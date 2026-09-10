// Chemistry — 5 Mark (Part D, organic) questions by chapter, grouped by year.
// Rendered by <MathText/> (KaTeX). Chemical formulas wrapped in $...$.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });
const Q = (tag, qno, text) => ({ tag, qno, marks: 5, text });
// Image-based question (already-cropped photo). `image` is the chapter_images filename.
const QI = (tag, qno, image) => ({ tag, qno, marks: 5, image });

const HALOALKANES_5M = [
  [P("2027", "Model Paper", "teal", [
    QI("Model Paper 1", "", "halo5m-2027-mp1.jpg"),
    QI("Model Paper 2", "", "halo5m-2027-mp2.jpg"),
    QI("Model Paper 3", "", "halo5m-2027-mp3.jpg"),
    QI("Model Paper 4", "", "halo5m-2027-mp4.jpg"),
    QI("Model Paper 5", "", "halo5m-2027-mp5.jpg"),
  ])],
  [P("2026", "Exam", "blue", [
    QI("Exam 1", "", "halo5m-2026-e1.jpg"),
    QI("Exam 2", "", "halo5m-2026-e2.jpg"),
  ])],
  [P("2025", "Exam", "sky", [
    QI("Exam 1", "", "halo5m-2025-e1.jpg"),
    QI("Exam 2", "", "halo5m-2025-e2.jpg"),
    QI("Exam 3", "", "halo5m-2025-e3.jpg"),
  ])],
  [P("2024", "Exam", "indigo", [
    QI("Exam 1", "", "halo5m-2024-e1.jpg"),
    QI("Exam 2", "", "halo5m-2024-e2.jpg"),
    QI("Exam 3", "", "halo5m-2024-e3.jpg"),
  ])],
];

const ALCOHOLS_5M = [
  [P("2026-27", "Model Paper", "teal", [
    Q("Model Paper 1", "Q36", "(a) Write the three steps involved in the acid catalysed dehydration of ethanol to ethoxyethane at 413 K. (b) Explain Kolbe's reaction with equation. (3+2)"),
    Q("Model Paper 2", "Q37", "(a) How is salicylic acid prepared from phenol? Explain with an equation. (b) Alcohols are comparatively more soluble in water than hydrocarbons of comparable molecular masses. Give reason. (3+2)"),
    Q("Model Paper 3", "Q39", "(a) Write the steps involved in the mechanism of acid catalysed dehydration of ethanol to ethene. (b) Complete the following reactions: (i) $\\mathrm{Phenol + Na_2Cr_2O_7 / H_2SO_4}$ (ii) $\\mathrm{Phenol + 3Br_2}$"),
    Q("Model Paper 4", "Q35", "(a) What are organometallic compounds? Explain how RMgX (Grignard reagent) reacts with water with the help of a chemical equation. (b) Write the IUPAC name of the major product obtained when anisole undergoes Friedel-Crafts methylation and mention the catalyst used. (3+2)"),
    Q("Model Paper 4", "Q39", "(a) Mention the hybridization of carbon atoms to which the hydroxyl group is bonded in allylic alcohols, phenol and vinylic alcohols respectively. (b) How do you prepare aspirin from salicylic acid? Write the chemical equation. (3+2)"),
    Q("Model Paper 5", "Q39", "(a) Write the steps involved in the mechanism of acid catalysed hydration of ethene to ethanol. (b) Write the product(s) obtained when 2-methoxy-2-methylpropane reacts with HI. (3+2)"),
  ])],
  [P("2026", "Exam", "blue", [
    Q("Exam 1", "Q38", "(a) Write the steps involved in the mechanism of acid catalysed dehydration of ethanol to ethene. (b) Complete the following reactions: (i) $\\mathrm{Phenol + Na_2Cr_2O_7 / H_2SO_4}$ (ii) $\\mathrm{Phenol + 3Br_2 \\rightarrow \\dots + 3HBr}$"),
    Q("Exam 2", "Q36", "(a) Write the steps involved in the mechanism of acid catalysed dehydration of ethanol to ethene. (b) Complete the following reactions: (i) $\\mathrm{Phenol + Na_2Cr_2O_7 / H_2SO_4}$ (ii) $\\mathrm{Phenol + 3Br_2 \\rightarrow \\dots + 3HBr}$"),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q39", "(a) Lucas reagent helps to distinguish between three classes of alcohols. Write the chemical composition of the Lucas reagent and explain how it helps to distinguish $1^\\circ$ and $3^\\circ$ alcohols. (b) Illustrate the preparation of ether by Williamson synthesis with a general chemical equation."),
    Q("Exam 1", "Q40", "An organic compound 'A' on treatment with ethanoic acid in presence of hydrochloric acid gas as a catalyst produces an ester 'B'. 'A' on oxidation with $\\mathrm{CrO_3}$ in an anhydrous medium gives 'C'. 'C' is heated with concentrated KOH followed by acidification with dilute HCl to generate 'A' and 'D'. Three moles of 'D' react with $\\mathrm{PCl_5}$ to give three moles of a compound with molecular formula $\\mathrm{CH_3COCl}$ and 'E'. 'D' is reduced to 'A' by lithium aluminium hydride followed by hydrolysis. Write the molecular formulas of the compounds 'A', 'B', 'C', 'D' and 'E'."),
    Q("Exam 2", "Q36", "(a) Write the equations for the steps in the mechanism of acid catalysed dehydration of ethanol to ethene. (b) Complete reactions: (i) $\\mathrm{Phenol + 3Br_2 \\rightarrow \\dots + 3HBr}$ (ii) $\\mathrm{C_2H_5Br + C_2H_5ONa \\rightarrow \\dots + NaBr}$"),
    Q("Exam 3", "Q38", "(a) Write the steps in the mechanism of acid catalysed hydration of ethene to ethanol. (b) Between p-nitrophenol and p-cresol, which has the highest pKa and least pKa values?"),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q38", "(a) Write the three reactions involved in the mechanism of acid catalysed dehydration of ethanol to ethene. (b) What is Lucas reagent? Which class of alcohols does not readily form turbidity with Lucas reagent?"),
    Q("Exam 1", "Q39", "(a) Write the chemical equations in the manufacture of phenol by cumene process. (b) Complete the equation: $\\mathrm{C_6H_5OH + Zn \\rightarrow}$ (c) Explain Williamson's reaction for the preparation of methoxymethane."),
    Q("Exam 2", "Q38", "(a) Explain the mechanism of acid catalysed dehydration of ethanol to ethene. (b) Explain Reimer-Tiemann reaction."),
    Q("Exam 2", "Q39", "(a) Complete the following equations: (i) $\\mathrm{Phenol + Na_2Cr_2O_7 / H_2SO_4}$ (ii) $\\mathrm{CH_3-CH=CH-CH_2-OH + PCl_5}$ (iii) $\\mathrm{CH_3-CH(CH_3)-O-CH_3 + HI}$ (b) Explain Williamson's reaction for ether."),
    Q("Exam 3", "Q38", "(a) Write the equations for the steps in the mechanism of acid catalysed dehydration of ethanol to ethene. (b) How do you convert salicylic acid into aspirin?"),
    Q("Exam 3", "Q39", "(a) How is phenol manufactured from cumene? (b) Write the general equation for Williamson synthesis. Which mechanism is involved in it?"),
  ])],
];

export const CHEMISTRY_5M = {
  "Haloalkanes & Haloarenes": HALOALKANES_5M,
  "Alcohols, Phenols & Ethers": ALCOHOLS_5M,
};
