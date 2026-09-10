// Solutions (Chemistry) — 1 Mark MCQs, grouped by year. Rendered by <MathText/>.
// Options embedded in question text (newlines preserved); `solution` = answer.

const P = (year, label, tint, questions, options) => ({ year, label, tint, questions, ...(options ? { options } : {}) });
const M = (tag, text, answer) => ({ tag, qno: "", marks: 1, text, solution: [`Correct answer: ${answer}`] });

export const SOLUTIONS_MCQ = [
  [P("2026-27", "Model Paper", "teal", [
    M("Model Paper 1", "The mass percentage (W/W) of glucose in water is $10\\%$ means.\na) $10\\,\\text{g}$ of glucose dissolved in $100\\,\\text{g}$ of water\nb) $10\\,\\text{g}$ of glucose dissolved in $90\\,\\text{mL}$ of water\nc) $10\\,\\text{g}$ of glucose dissolved in $100\\,\\text{mL}$ of water\nd) $10\\,\\text{g}$ of glucose dissolved in $90\\,\\text{g}$ of water", "d) $10\\,\\text{g}$ of glucose dissolved in $90\\,\\text{g}$ of water"),
    M("Model Paper 1", "Statement-1: If on mixing the two liquids, the solution becomes hot, it implies that it shows negative deviation from Raoult's law.\nStatement-2: Solutions which show negative deviation are accompanied by decrease in volume.\na) Both Statement-1 and Statement-2 are true.\nb) Statement-1 is true but Statement-2 is false.\nc) Both Statement-1 and Statement-2 are false.\nd) Statement-1 is false but Statement-2 is true.", "a) Both Statement-1 and Statement-2 are true."),
    M("Model Paper 2", "The mixture which shows positive deviation from Raoult's Law is\na) n-hexane and n-heptane\nb) Bromoethane and chloroethane\nc) Ethanol and Acetone\nd) Chloroform and Acetone", "c) Ethanol and Acetone"),
    M("Model Paper 2", "A student took two glasses of pure water from a water filter. He cools glass-A in a fridge and warms the other glass-B on a stove. On comparing the solubility of oxygen in $\\text{H}_2\\text{O}$ in glass-A and glass-B, he states that glass-A contains\na) more oxygen than glass-B.\nb) less oxygen than glass-B.\nc) same amount of oxygen as in glass-B.\nd) zero concentration of oxygen.", "a) more oxygen than glass-B."),
    M("Model Paper 2", "A binary solution has two components 'A' and 'B'. The mole fraction of component 'A' is 0.5, then the number of moles of components 'A' and 'B' in the solution is\na) $n_A > n_B$\nb) $n_A < n_B$\nc) $n_A = n_B$\nd) zero", "c) $n_A = n_B$"),
    M("Model Paper 3", "10 mL of liquid 'A' and 20 mL of liquid 'B' are mixed at $25^{\\circ}C$. The volume of the solution was measured to be 30.1 mL then,\na) $\\Delta_{\\text{mix}} H > 0$, Solution shows negative deviation from Raoult's law.\nb) $\\Delta_{\\text{mix}} H < 0$, Solution shows negative deviation from Raoult's law.\nc) $\\Delta_{\\text{mix}} H > 0$, Solution shows positive deviation from Raoult's law.\nd) $\\Delta_{\\text{mix}} H < 0$, Solution shows positive deviation from Raoult's law.", "c) $\\Delta_{\\text{mix}} H > 0$, Solution shows positive deviation from Raoult's law."),
    M("Model Paper 3", "A binary solution has two components 'A' and 'B'. The mole fraction of component 'A' is 0.5, then the number of moles of components 'A' and 'B' in the solution is\na) $n_A > n_B$\nb) $n_A < n_B$\nc) $n_A = n_B$\nd) zero", "c) $n_A = n_B$"),
    M("Model Paper 4", "Desalination of sea water is carried out by the process\na) Exosmosis\nb) Endosmosis\nc) Reverse osmosis\nd) Osmosis", "c) Reverse osmosis"),
    M("Model Paper 4", "The mixture that forms maximum boiling azeotrope is\na) heptane + octane\nb) water + nitric acid\nc) ethanol + water\nd) acetone + carbon disulphide", "b) water + nitric acid"),
    M("Model Paper 5", "If molality of the dilute solution is doubled, the value of the molal depression constant $(K_f)$ will be\na) doubled\nb) halved\nc) tripled\nd) unchanged", "d) unchanged"),
    M("Model Paper 5", "During osmosis, the solvent molecules are moving from\na) Hypotonic solution to hypertonic solution\nb) Hypertonic solution to hypotonic solution\nc) Higher concentrated solution to lower concentrated solution\nd) Higher osmotic pressure solution to lower osmotic pressure solution.", "a) Hypotonic solution to hypertonic solution"),
  ])],
  [P("2026", "Exam", "blue", [
    M("Exam 2", "The mixture which shows positive deviation from Raoult's Law is\na) n-hexane and n-heptane\nb) Bromoethane and Chloroethane\nc) Ethanol and Acetone\nd) Chloroform and Acetone", "c) Ethanol and Acetone"),
  ])],
  [P("2025", "Exam", "sky", [
    M("Exam 1", "Camphor in nitrogen gas, is an example of ______.\na) liquid solution\nb) solid solution\nc) gaseous solution\nd) aqueous solution", "c) gaseous solution"),
    M("Exam 2", "When compared to $\\Delta T_f$-value of a 0.01 M glucose solution, the $\\Delta T_f$-value of 0.01 M $\\text{MgCl}_2$ solution\na) increases about three times\nb) increases about six times\nc) increases about ten times\nd) remains same", "a) increases about three times"),
    M("Exam 3", "The mass percentage (w/w) of glucose in water is 10% means\na) 10 g of glucose dissolved in 100 g of water.\nb) 10 g of glucose dissolved in 10 g of water.\nc) 10 g of glucose dissolved in 90 g of water.\nd) 10 g of glucose dissolved in 90 mL of water.", "c) 10 g of glucose dissolved in 90 g of water."),
  ])],
  [P("2024", "Exam", "indigo", [
    M("Exam 1", "If the process of dissolution of a solid in liquid is endothermic, its solubility\na) decreases with increase in temperature\nb) remains same at all temperature\nc) increases with increase in temperature\nd) increases with decrease in temperature", "c) increases with increase in temperature"),
    M("Exam 2", "To determine molar mass of Biomolecules and Polymers, which Colligative property based method has advantage over other methods?\na) Relative lowering of vapour pressure\nb) Elevation of Boiling point\nc) Depression in freezing point\nd) Osmotic pressure", "d) Osmotic pressure"),
    M("Exam 3", "Van't Hoff factor (i) for complete dissociation of $\\text{K}_2\\text{SO}_4$ is\na) 0\nb) 1\nc) 2\nd) 3", "d) 3"),
  ])],
  [P("Fill in the Blanks", "1 Mark", "amber", [
    M("FBK 1", "Van't Hoff factor (i) for a non-electrolyte in a solution is ______.", "one"),
    M("FBK 2", "As temperature increases, solubility of gases in liquid ______.", "decreases"),
    M("FBK 3", "The solubility of a solid in a liquid ______ with temperature for an endothermic process.", "increases"),
    M("FBK 4", "______ is the number of moles of solute dissolved in one litre of solution.", "Molarity"),
    M("FBK 5", "The number of moles of solute present in one kilogram of the solvent is called ______.", "Molality"),
  ], ["Molarity", "decreases", "Molality", "increases", "one"])],
];
