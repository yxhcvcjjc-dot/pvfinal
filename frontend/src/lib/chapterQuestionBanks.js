// Registry of chapter-wise question sets keyed by `${subjectId}:${chOrLabel}:${mark}`.
// `mark` is the pattern TYPE (e.g. "5m", "3m", "2m", "numeric") so BOTH the
// chapter-wise flow and the pattern flow resolve to the SAME content.
// Each value has the SAME shape as RF_5M_PAGES:
//   pages -> [ year-group, ... ]  where a year-group is
//   { year, label, tint, questions: [ { tag, qno, marks, text } ] }
import { RF_5M_PAGES } from "@/lib/rfQuestions";
import { MATH_5M } from "@/lib/math5mQuestions";
import { MATH_6P4 } from "@/lib/math6p4Questions";
import { MATH_2M } from "@/lib/math2mQuestions";
import { MATH_3M } from "@/lib/math3mQuestions";
import { PHYSICS_5M, PHYSICS_NUMERIC, PHYSICS_3M, PHYSICS_2M } from "@/lib/physicsQuestions";
import { PHYSICS_3M_EXTRA } from "@/lib/physics3mQuestions";
import { CHEMISTRY_2M } from "@/lib/chemistryQuestions";
import { CHEMISTRY_5M } from "@/lib/chemistry5mQuestions";
import { CHEMISTRY_3M_INORG } from "@/lib/chemistry3mQuestions";
import { CHEMISTRY_3M_PHYS } from "@/lib/chemistry3mQuestions";
import { SOLUTIONS_NUMERIC } from "@/lib/solutionsNumericals";
import { ECF_MCQ } from "@/lib/ecfMcq";
import { SOLUTIONS_MCQ } from "@/lib/solutionsMcq";
import { RF_MCQ } from "@/lib/relationsMcq";
import { INVTRIG_MCQ } from "@/lib/invTrigFbk";

// Electric Charges & Fields — split the combined bank into MCQ-only and FBK-only
// pages so the MCQ and FBK tabs show separate content.
const ECF_MCQ_ONLY = ECF_MCQ.filter((page) => page[0]?.year !== "Fill in the Blanks");
const ECF_FBK_ONLY = ECF_MCQ.filter((page) => page[0]?.year === "Fill in the Blanks");

// Solutions (Chemistry) — same MCQ / FBK split.
const SOLUTIONS_MCQ_ONLY = SOLUTIONS_MCQ.filter((page) => page[0]?.year !== "Fill in the Blanks");
const SOLUTIONS_FBK_ONLY = SOLUTIONS_MCQ.filter((page) => page[0]?.year === "Fill in the Blanks");

export const CHAPTER_QUESTION_BANKS = {
  // Relations and Functions · 5 Mark — shared by both flows (label + chapter-no keys)
  "math:Relations and Functions:5m": RF_5M_PAGES,
  "math:1:5m": RF_5M_PAGES,

  // Part E — 6 Mark Linear Programming & 4 Mark Determinants (pattern type "6p4m")
  "math:Linear Programming:6p4m": MATH_6P4["Linear Programming"],
  "math:Determinants:6p4m": MATH_6P4["Determinants"],

  // Math Part D (5 Mark) chapters — both label variants registered so the
  // chapter-wise flow (blueprint labels) and pattern flow both resolve.
  "math:Matrices:5m": MATH_5M["Matrices"],
  "math:Continuity and Differentiability:5m": MATH_5M["Continuity and Differentiability"],
  "math:Continuity & Differentiability:5m": MATH_5M["Continuity & Differentiability"],
  "math:Integrals:5m": MATH_5M["Integrals"],
  "math:Application of Integrals:5m": MATH_5M["Application of Integrals"],
  // Math Part B (2 Mark) chapters — both label + chapter-no keys registered so
  // the chapter-wise flow and pattern flow both resolve to the SAME content.
  "math:Inverse Trigonometric Functions:2m": MATH_2M["Inverse Trigonometric Functions"],
  "math:2:2m": MATH_2M["Inverse Trigonometric Functions"],
  "math:Determinants:2m": MATH_2M["Determinants"],
  "math:4:2m": MATH_2M["Determinants"],
  "math:Continuity & Differentiability:2m": MATH_2M["Continuity & Differentiability"],
  "math:Continuity and Differentiability:2m": MATH_2M["Continuity & Differentiability"],
  "math:Application of Derivatives:2m": MATH_2M["Application of Derivatives"],
  "math:Integrals:2m": MATH_2M["Integrals"],
  "math:Differential Equations:2m": MATH_2M["Differential Equations"],
  "math:Vector Algebra:2m": MATH_2M["Vector Algebra"],
  "math:Three Dimensional Geometry:2m": MATH_2M["Three Dimensional Geometry"],
  "math:Probability:2m": MATH_2M["Probability"],

  // Math Part C (3 Mark) chapters — label + chapter-no keys for both flows.
  "math:Relations and Functions:3m": MATH_3M["Relations and Functions"],
  "math:1:3m": MATH_3M["Relations and Functions"],
  "math:Inverse Trigonometric Functions:3m": MATH_3M["Inverse Trigonometric Functions"],
  "math:2:3m": MATH_3M["Inverse Trigonometric Functions"],
  "math:Matrices:3m": MATH_3M["Matrices"],
  "math:Continuity & Differentiability:3m": MATH_3M["Continuity & Differentiability"],
  "math:Continuity and Differentiability:3m": MATH_3M["Continuity & Differentiability"],
  "math:Application of Derivatives:3m": MATH_3M["Application of Derivatives"],
  "math:Integrals:3m": MATH_3M["Integrals"],
  "math:Vector Algebra:3m": MATH_3M["Vector Algebra"],
  "math:Three Dimensional Geometry:3m": MATH_3M["Three Dimensional Geometry"],
  "math:Probability:3m": MATH_3M["Probability"],

  // ===== Physics — Electric Charges and Fields & Electrostatic Potential and
  // Capacitance. Register every label spelling used by the two flows + ch-no.
  // Part D (5 Mark) — Potential & Capacitance
  "physics:Electrostatic Potential and Capacitance:5m": PHYSICS_5M["Electrostatic Potential and Capacitance"],
  "physics:Electrostatic Potential & Capacitance:5m": PHYSICS_5M["Electrostatic Potential and Capacitance"],
  "physics:2:5m": PHYSICS_5M["Electrostatic Potential and Capacitance"],
  // Part D (5 Mark) — Electric Charges & Fields
  "physics:Electric Charges & Fields:5m": PHYSICS_5M["Electric Charges and Fields"],
  "physics:Electric Charges and Fields:5m": PHYSICS_5M["Electric Charges and Fields"],
  "physics:1:5m": PHYSICS_5M["Electric Charges and Fields"],
  // Numericals — Potential & Capacitance
  "physics:Electrostatic Potential and Capacitance:numeric": PHYSICS_NUMERIC["Electrostatic Potential and Capacitance"],
  "physics:Electrostatic Potential & Capacitance:numeric": PHYSICS_NUMERIC["Electrostatic Potential and Capacitance"],
  "physics:2:numeric": PHYSICS_NUMERIC["Electrostatic Potential and Capacitance"],
  // Numericals — Electric Charges & Fields
  "physics:Electric Charges & Fields:numeric": PHYSICS_NUMERIC["Electric Charges and Fields"],
  "physics:Electric Charges and Fields:numeric": PHYSICS_NUMERIC["Electric Charges and Fields"],
  "physics:1:numeric": PHYSICS_NUMERIC["Electric Charges and Fields"],
  // Part C (3 Mark)
  "physics:Electric Charges & Fields:3m": PHYSICS_3M["Electric Charges and Fields"],
  "physics:Electric Charges and Fields:3m": PHYSICS_3M["Electric Charges and Fields"],
  "physics:1:3m": PHYSICS_3M["Electric Charges and Fields"],
  "physics:Electrostatic Potential and Capacitance:3m": PHYSICS_3M["Electrostatic Potential and Capacitance"],
  "physics:Electrostatic Potential & Capacitance:3m": PHYSICS_3M["Electrostatic Potential and Capacitance"],
  "physics:2:3m": PHYSICS_3M["Electrostatic Potential and Capacitance"],
  // Part B (2 Mark)
  "physics:Electric Charges & Fields:2m": PHYSICS_2M["Electric Charges and Fields"],
  "physics:Electric Charges and Fields:2m": PHYSICS_2M["Electric Charges and Fields"],
  "physics:1:2m": PHYSICS_2M["Electric Charges and Fields"],
  "physics:Electrostatic Potential and Capacitance:2m": PHYSICS_2M["Electrostatic Potential and Capacitance"],
  "physics:Electrostatic Potential & Capacitance:2m": PHYSICS_2M["Electrostatic Potential and Capacitance"],
  "physics:2:2m": PHYSICS_2M["Electrostatic Potential and Capacitance"],

  // ===== Physics — additional 3 Mark chapters (both label spellings + ch-no) =====
  "physics:Current Electricity:3m": PHYSICS_3M_EXTRA["Current Electricity"],
  "physics:3:3m": PHYSICS_3M_EXTRA["Current Electricity"],
  "physics:Moving Charges & Magnetism:3m": PHYSICS_3M_EXTRA["Moving Charges and Magnetism"],
  "physics:Moving Charges and Magnetism:3m": PHYSICS_3M_EXTRA["Moving Charges and Magnetism"],
  "physics:4:3m": PHYSICS_3M_EXTRA["Moving Charges and Magnetism"],
  "physics:Magnetism & Matter:3m": PHYSICS_3M_EXTRA["Magnetism and Matter"],
  "physics:Magnetism and Matter:3m": PHYSICS_3M_EXTRA["Magnetism and Matter"],
  "physics:5:3m": PHYSICS_3M_EXTRA["Magnetism and Matter"],
  "physics:Electromagnetic Induction:3m": PHYSICS_3M_EXTRA["Electromagnetic Induction"],
  "physics:6:3m": PHYSICS_3M_EXTRA["Electromagnetic Induction"],
  "physics:Ray Optics and Optical Instruments:3m": PHYSICS_3M_EXTRA["Ray Optics and Optical Instruments"],
  "physics:Ray Optics:3m": PHYSICS_3M_EXTRA["Ray Optics and Optical Instruments"],
  "physics:9:3m": PHYSICS_3M_EXTRA["Ray Optics and Optical Instruments"],
  "physics:Dual Nature of Radiation:3m": PHYSICS_3M_EXTRA["Dual Nature of Radiation and Matter"],
  "physics:Dual Nature of Radiation and Matter:3m": PHYSICS_3M_EXTRA["Dual Nature of Radiation and Matter"],
  "physics:11:3m": PHYSICS_3M_EXTRA["Dual Nature of Radiation and Matter"],
  "physics:Atoms:3m": PHYSICS_3M_EXTRA["Atoms"],
  "physics:12:3m": PHYSICS_3M_EXTRA["Atoms"],
  "physics:Nuclei:3m": PHYSICS_3M_EXTRA["Nuclei"],
  "physics:13:3m": PHYSICS_3M_EXTRA["Nuclei"],

  // ===== Chemistry — 2 Mark (both label spellings + ch-no) =====
  "chemistry:Chemical Kinetics:2m": CHEMISTRY_2M["Chemical Kinetics"],
  "chemistry:3:2m": CHEMISTRY_2M["Chemical Kinetics"],
  "chemistry:d & f Block Elements:2m": CHEMISTRY_2M["The d & f Block Elements"],
  "chemistry:The d & f Block Elements:2m": CHEMISTRY_2M["The d & f Block Elements"],
  "chemistry:The d- and f-Block Elements:2m": CHEMISTRY_2M["The d & f Block Elements"],
  "chemistry:4:2m": CHEMISTRY_2M["The d & f Block Elements"],

  // ===== Chemistry — 5 Mark (Part D, organic) =====
  "chemistry:Haloalkanes & Haloarenes:5m-org": CHEMISTRY_5M["Haloalkanes & Haloarenes"],
  "chemistry:Haloalkanes and Haloarenes:5m-org": CHEMISTRY_5M["Haloalkanes & Haloarenes"],
  "chemistry:6:5m-org": CHEMISTRY_5M["Haloalkanes & Haloarenes"],
  "chemistry:Alcohols, Phenols & Ethers:5m-org": CHEMISTRY_5M["Alcohols, Phenols & Ethers"],
  "chemistry:Alcohols, Phenols and Ethers:5m-org": CHEMISTRY_5M["Alcohols, Phenols & Ethers"],
  "chemistry:7:5m-org": CHEMISTRY_5M["Alcohols, Phenols & Ethers"],

  // ===== Chemistry — 3 Mark (Part C, inorganic) — d & f Block =====
  "chemistry:d & f Block Elements:3m-inorg": CHEMISTRY_3M_INORG["The d & f Block Elements"],
  "chemistry:The d & f Block Elements:3m-inorg": CHEMISTRY_3M_INORG["The d & f Block Elements"],
  "chemistry:The d- and f-Block Elements:3m-inorg": CHEMISTRY_3M_INORG["The d & f Block Elements"],
  "chemistry:4:3m-inorg": CHEMISTRY_3M_INORG["The d & f Block Elements"],

  // ===== Chemistry — 3 Mark (Part C, physical) — Solutions =====
  "chemistry:Solutions:3m-phys": CHEMISTRY_3M_PHYS["Solutions"],
  "chemistry:1:3m-phys": CHEMISTRY_3M_PHYS["Solutions"],

  // ===== Chemistry — Part D NUMERICALS (with worked solutions) — Solutions =====
  "chemistry:Solutions:numeric": SOLUTIONS_NUMERIC["Solutions"],
  "chemistry:1:numeric": SOLUTIONS_NUMERIC["Solutions"],

  // ===== Physics — Electric Charges & Fields · 1 Mark MCQs (Part A) =====
  "physics:Electric Charges & Fields:A": ECF_MCQ,
  "physics:Electric Charges and Fields:A": ECF_MCQ,
  "physics:1:A": ECF_MCQ,
  "physics:Electric Charges & Fields:mcq": ECF_MCQ_ONLY,
  "physics:Electric Charges and Fields:mcq": ECF_MCQ_ONLY,
  "physics:Electric Charges & Fields:fbk": ECF_FBK_ONLY,
  "physics:Electric Charges and Fields:fbk": ECF_FBK_ONLY,

  // ===== Chemistry — Solutions · 1 Mark MCQs (Part A) =====
  "chemistry:Solutions:A": SOLUTIONS_MCQ,
  "chemistry:1:A": SOLUTIONS_MCQ,
  "chemistry:Solutions:mcq": SOLUTIONS_MCQ_ONLY,
  "chemistry:Solutions:fbk": SOLUTIONS_FBK_ONLY,

  // ===== Maths — Relations and Functions · 1 Mark MCQs (Part A) =====
  "math:Relations and Functions:A": RF_MCQ,
  "math:1:A": RF_MCQ,
  "math:Relations and Functions:mcq": RF_MCQ,

  // ===== Maths — Inverse Trigonometric Functions · Fill in the Blanks (Part A) =====
  "math:Inverse Trigonometric Functions:A": INVTRIG_MCQ,
  "math:2:A": INVTRIG_MCQ,
  "math:Inverse Trigonometric Functions:fbk": INVTRIG_MCQ,
};

export function getChapterBank(subjectId, ch, mark) {
  return CHAPTER_QUESTION_BANKS[`${subjectId}:${ch}:${mark}`] || null;
}

// Resolve a bank by chapter number OR chapter label (whichever is provided).
export function resolveChapterBank({ subjectId, ch, label, mark }) {
  if (ch != null && CHAPTER_QUESTION_BANKS[`${subjectId}:${ch}:${mark}`])
    return CHAPTER_QUESTION_BANKS[`${subjectId}:${ch}:${mark}`];
  if (label && CHAPTER_QUESTION_BANKS[`${subjectId}:${label}:${mark}`])
    return CHAPTER_QUESTION_BANKS[`${subjectId}:${label}:${mark}`];
  return null;
}
