// Chemistry — 3 Mark (Part C, inorganic) questions by chapter, grouped by year.
// Rendered by <MathText/> (KaTeX). Blanks shown as underlined spaces.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });
const Q = (tag, qno, text) => ({ tag, qno, marks: 3, text });

const BLANK = "\\underline{\\hspace{2em}}";

const D_F_BLOCK_3M = [
  [P("2026-27", "Model Paper", "teal", [
    Q("Model Paper 1", "Q30", `Complete the following equations: (a) $${BLANK} + 8\\mathrm{Na_2CO_3} + 7\\mathrm{O_2} \\longrightarrow 8\\mathrm{Na_2CrO_4} + 2\\mathrm{Fe_2O_3} + 8\\mathrm{CO_2}$ (b) $\\mathrm{MnO_2} \\xrightarrow{\\text{Fused with KOH}} ${BLANK}$ (c) $2\\mathrm{KMnO_4} \\xrightarrow{513\\ \\mathrm{K}} \\mathrm{K_2MnO_4} + \\mathrm{O_2} + ${BLANK}$`),
    Q("Model Paper 2", "Q30", `Complete the following equations: (a) $${BLANK} + 8\\mathrm{Na_2CO_3} + 7\\mathrm{O_2} \\longrightarrow 8\\mathrm{Na_2CrO_4} + 2\\mathrm{Fe_2O_3} + 8\\mathrm{CO_2}$ (b) $\\mathrm{MnO_2} \\xrightarrow{\\text{Fused with KOH}} ${BLANK}$ (c) $2\\mathrm{KMnO_4} \\xrightarrow{513\\ \\mathrm{K}} \\mathrm{K_2MnO_4} + \\mathrm{O_2} + ${BLANK}$`),
    Q("Model Paper 3", "Q26", "Write the balanced chemical equations involved in the manufacture of potassium dichromate from chromite ore."),
    Q("Model Paper 4", "Q29", `Complete the following chemical equations: $${BLANK} + 8\\mathrm{Na_2CO_3} + 7\\mathrm{O_2} \\longrightarrow 8\\mathrm{Na_2CrO_4} + 2\\mathrm{Fe_2O_3} + 8\\mathrm{CO_2}$; $2\\mathrm{Na_2CrO_4} + ${BLANK} \\longrightarrow \\mathrm{Na_2Cr_2O_7} + 2\\mathrm{Na^+} + \\mathrm{H_2O}$; $\\mathrm{Na_2Cr_2O_7} + 2\\mathrm{KCl} \\longrightarrow ${BLANK} + 2\\mathrm{NaCl}$`),
    Q("Model Paper 5", "Q26", "Give two reasons to justify the catalytic property of transition elements. Name the catalyst used in the Wacker process."),
  ])],
  [P("2026", "Exam", "blue", [
    Q("Exam 1", "Q26", "Write the balanced chemical equations involved in the manufacture of potassium dichromate from chromite ore."),
    Q("Exam 2", "Q27", "What are interstitial compounds?"),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q27", "Write the balanced chemical equations involved in the manufacture of potassium dichromate $(\\mathrm{K_2Cr_2O_7})$ from chromite ore $(\\mathrm{FeCr_2O_4})$."),
    Q("Exam 2", "Q26", "What are interstitial compounds? Write any two characteristics of them."),
    Q("Exam 3", "Q27", "Write the balanced chemical equation for the manufacture of potassium dichromate from chromite ore."),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q27", "Write the balanced chemical equations in the manufacture of potassium dichromate from chromite ore."),
    Q("Exam 2", "Q27", "Write any three characteristic properties of interstitial compounds."),
    Q("Exam 3", "Q27", "What are interstitial compounds? Write any two characteristics of these compounds."),
  ])],
];

export const CHEMISTRY_3M_INORG = {
  "The d & f Block Elements": D_F_BLOCK_3M,
};

const SOLUTIONS_3M = [
  [P("2026-27", "Model Paper", "teal", [
    Q("Model Paper 1", "Q32", "Name the concentration term which is commonly used in medicine and pharmacy. Write the definition and mathematical equation for that concentration term."),
    Q("Model Paper 2", "Q32", "Write three reasons to justify that the osmotic pressure method has the advantage over other colligative methods for the measurement of molar mass of macromolecules."),
    Q("Model Paper 3", "Q34", "Given below is the sketch of a plant for carrying out a process. (i) Name the process occurring in the given plant. (ii) Name any one SPM which can be used in this plant. (iii) Give one practical use of the plant."),
    Q("Model Paper 4", "Q33", "What are ideal solutions? Write two characteristics of it."),
  ])],
  [P("2026", "Exam", "blue", [
    Q("Exam 1", "Q33", "What are ideal solutions? Write two characteristics of it."),
    Q("Exam 2", "Q31", "Write any three differences between ideal and non-ideal solutions."),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q33", "Define azeotropes. What type of azeotropes are formed by solutions with negative deviation from Raoult's law? Give an example for it."),
    Q("Exam 2", "Q31", "(a) State Henry's law. Write its mathematical form. (b) What is the effect of pressure on solubility of solids in liquids?"),
    Q("Exam 3", "Q31", "What are colligative properties? Name the colligative property expressed in terms of mole fraction. Write the mathematical equation of that colligative property."),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q33", "(a) What is reverse osmosis? Mention one of its applications. (b) State Henry's law."),
    Q("Exam 2", "Q33", "Write any three differences between ideal and non-ideal solutions."),
    Q("Exam 3", "Q33", "(a) State Henry's law. Write an application of it. (b) It is not possible to separate the components of azeotropes by fractional distillation. Give reason."),
  ])],
];

export const CHEMISTRY_3M_PHYS = {
  "Solutions": SOLUTIONS_3M,
};
