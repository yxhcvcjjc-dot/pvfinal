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
  physics: {
    "electricchargesandfields|3m": "Derivation",            // Q37
    "electricchargesandfields|numeric": "Numeric",          // Q42 (all numeric)
    "electrostaticpotentialandcapacitance|numeric": "Numeric", // Q42 (all numeric)
  },
};

// Per similarity-group overrides (Similarity tab only).
// Key: `${subject}|${chapter}|${mark}|${simLabel}` (all normalized).
const SIM_TYPE_MAP = {
  "physics|electricchargesandfields|2m|similar1": "Theory",         // Q21 Sim 1
  "physics|electricchargesandfields|2m|similar2": "Numeric",        // Q21 Sim 2
  "physics|electrostaticpotentialandcapacitance|2m|similar1": "Theory",  // Q22 Sim 1
  "physics|electrostaticpotentialandcapacitance|2m|similar2": "Numeric", // Q22 Sim 2
};

// Returns a type label string, or null when nothing is mapped.
// Pass `simLabel` (e.g. "Similar 1") to resolve per-similarity-group types.
export function questionType(subjectId, chapterName, mark, simLabel = null) {
  const c = norm(chapterName);
  const m = normMark(mark);
  if (simLabel) {
    const hit = SIM_TYPE_MAP[`${subjectId}|${c}|${m}|${norm(simLabel)}`];
    if (hit) return hit;
  }
  const tbl = TYPE_MAP[subjectId];
  if (!tbl) return null;
  return tbl[`${c}|${m}`] || tbl[c] || null;
}

// Tailwind classes per type for the small badge.
export const TYPE_BADGE = {
  Theory: "bg-blue-100 text-blue-700",
  Formula: "bg-violet-100 text-violet-700",
  Numeric: "bg-emerald-100 text-emerald-700",
  Graph: "bg-indigo-100 text-indigo-700",
  Shorts: "bg-amber-100 text-amber-800",
  Derivation: "bg-rose-100 text-rose-700",
};

export const typeBadgeClass = (t) => TYPE_BADGE[t] || "bg-slate-100 text-slate-700";
