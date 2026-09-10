import React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

function renderMath(tex, display) {
  try {
    return katex.renderToString(tex, {
      displayMode: display,
      throwOnError: false,
      output: "html",
    });
  } catch (e) {
    return tex;
  }
}

// Renders a string that may contain inline math wrapped in $...$ and display
// math (e.g. matrices) wrapped in $$...$$. Plain text (including newlines) is
// preserved via whiteSpace: pre-wrap.
export function MathText({ value = "", className = "" }) {
  const regex = /(\$\$[^$]*\$\$|\$[^$]*\$)/g;
  const segments = String(value).split(regex);

  return (
    <p className={className} style={{ whiteSpace: "pre-wrap" }}>
      {segments.map((seg, i) => {
        if (!seg) return null;
        if (seg.startsWith("$$") && seg.endsWith("$$")) {
          return (
            <span
              key={i}
              className="katex-block"
              dangerouslySetInnerHTML={{ __html: renderMath(seg.slice(2, -2), true) }}
            />
          );
        }
        if (seg.startsWith("$") && seg.endsWith("$")) {
          return (
            <span
              key={i}
              dangerouslySetInnerHTML={{ __html: renderMath(seg.slice(1, -1), false) }}
            />
          );
        }
        return <span key={i}>{seg}</span>;
      })}
    </p>
  );
}

export default MathText;
