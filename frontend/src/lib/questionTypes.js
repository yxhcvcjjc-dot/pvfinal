// Question "type" tag (Theory / Formula / Numeric / Graph / Shorts) shown on
// each question — in the normal questions view AND the Similarity tab.
// Mapping is keyed by chapter (+ mark where the same chapter has different types).

const norm = (s) => (s || "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]/g, "");

// Reduce any mark/pattern key to a simple form: "3m-inorg" -> "3m", "numeric" -> "numeric".
const normMark = (m) => {
  const s = String(m || "").toLowerCase();
  if (s.includes("numeric")) return "numeric";
  const mm = s.match(/(\d+)\s*m/);
  return mm ? `${mm[1]}m` : s;
};

// `${chapter}|${mark}` takes priority; bare `${chapter}` is the fallback.
const TYPE_MAP = {
  math: {
    determinants: "Formula",            // 2m Q22 and 4m Q46
    linearprogramming: "Graph",         // 6m Q47
  },
  chemistry: {
    "chemicalkinetics|2m": "Theory",    // Q21
    "dandfblockelements|2m": "Theory",  // Q22
    "dandfblockelements|3m": "Shorts",  // Q26
    "solutions|3m": "Theory",           // Q31
    "haloalkanesandhaloarenes|5m": "Theory", // Q35
    "solutions|numeric": "Numeric",     // Q41
  },
};

// Returns a type label string, or null when the chapter has no mapped type.
export function questionType(subjectId, chapterName, mark) {
  const tbl = TYPE_MAP[subjectId];
  if (!tbl) return null;
  const c = norm(chapterName);
  const m = normMark(mark);
  return tbl[`${c}|${m}`] || tbl[c] || null;
}

// Tailwind classes per type for the small badge.
export const TYPE_BADGE = {
  Theory: "bg-blue-100 text-blue-700",
  Formula: "bg-violet-100 text-violet-700",
  Numeric: "bg-emerald-100 text-emerald-700",
  Graph: "bg-indigo-100 text-indigo-700",
  Shorts: "bg-amber-100 text-amber-800",
};

export const typeBadgeClass = (t) => TYPE_BADGE[t] || "bg-slate-100 text-slate-700";
