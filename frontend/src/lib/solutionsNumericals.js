// Chemistry — Solutions chapter · Part D NUMERICALS (with worked solutions).
// Rendered by <MathText/> (KaTeX). `solution` is an array of step strings; each
// step may contain inline $...$ math. Grouped by colligative-property topic.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });
const Q = (tag, qno, text, solution) => ({ tag, qno, marks: 5, text, solution });

// ----- GROUP 4: Boiling Point Elevation -----
const BOILING_POINT = [
  P("Boiling Point Elevation", "Part D Numericals", "blue", [
    Q(
      "2024 · Exam 2",
      "Q44",
      "The boiling point of benzene is 353.23 K. When 1.80 g of a non-volatile solute was dissolved in 90 g of benzene, the boiling point is raised to 354.11 K. Calculate the molar mass of the solute ($K_b$ for benzene is $2.53\\text{ K kg mol}^{-1}$).",
      [
        "$\\Delta T_b = 354.11 - 353.23 = 0.88\\,\\text{K}$",
        "$M_2 = \\dfrac{K_b \\times w_2 \\times 1000}{\\Delta T_b \\times w_1} = \\dfrac{2.53 \\times 1.80 \\times 1000}{0.88 \\times 90}$",
        "$M_2 = \\dfrac{4554}{79.2} \\approx 57.5\\,\\text{g mol}^{-1}$",
      ]
    ),
    Q(
      "2026-27 · Model Paper 2",
      "Q41",
      "The boiling point of benzene is 353.23 K. Calculate the mass of non-volatile solute to be added to 90 g of benzene such that it boils at 354.11 K. The molar mass of solute is $58\\text{ g mol}^{-1}$. Given: $K_b = 2.53\\text{ K kg mol}^{-1}$.",
      [
        "$\\Delta T_b = 354.11 - 353.23 = 0.88\\,\\text{K}$",
        "Rearranging $\\Delta T_b = \\dfrac{K_b \\times w_2 \\times 1000}{M_2 \\times w_1}$ for $w_2$:",
        "$w_2 = \\dfrac{\\Delta T_b \\times M_2 \\times w_1}{K_b \\times 1000} = \\dfrac{0.88 \\times 58 \\times 90}{2.53 \\times 1000}$",
        "$w_2 = \\dfrac{4593.6}{2530} \\approx 1.82\\,\\text{g}$",
      ]
    ),
    Q(
      "2026-27 · Model Paper 5",
      "Q44",
      "The vapour pressure (in Atm) curve for a solution containing non-volatile solid substance \"G\" and pure solvent is plotted against temperature (in K) as shown in the figure. Calculate the molality of the solution. ($K_b$ for water is $0.52\\text{ K kg mol}^{-1}$).",
      [
        "From the graph, read the elevation in boiling point $\\Delta T_b$ = (boiling point of solution − boiling point of pure water at 1 atm).",
        "Molality: $m = \\dfrac{\\Delta T_b}{K_b}$",
        "For the standard figure where the solution boils 0.52 K higher than pure water, $\\Delta T_b = 0.52\\,\\text{K}$:",
        "$m = \\dfrac{0.52}{0.52} = 1\\,\\text{mol kg}^{-1}$ (substitute the exact $\\Delta T_b$ read from your figure).",
      ]
    ),
  ]),
];

// ----- GROUP 5: Freezing Point Depression -----
const FREEZING_POINT = [
  P("Freezing Point Depression", "Part D Numericals", "sky", [
    Q(
      "2024 · Exam 1",
      "Q45",
      "1.00 g of a non-electrolyte solute dissolved in 50 g of benzene lowered the freezing point of benzene by 0.40 K. The freezing point depression constant of benzene is $5.12\\text{ K kg mol}^{-1}$. Find the molar mass of the solute.",
      [
        "$M_2 = \\dfrac{K_f \\times w_2 \\times 1000}{\\Delta T_f \\times w_1} = \\dfrac{5.12 \\times 1.00 \\times 1000}{0.40 \\times 50}$",
        "$M_2 = \\dfrac{5120}{20} = 256\\,\\text{g mol}^{-1}$",
      ]
    ),
    Q(
      "2026 · Exam 1",
      "Q44",
      "1.00 g of a non-electrolyte solute dissolved in 50 g of benzene lowered the freezing point of benzene by 0.40 K. The freezing point depression constant of benzene is $5.12\\text{ K kg mol}^{-1}$. Find the molar mass of the solute.",
      [
        "$M_2 = \\dfrac{K_f \\times w_2 \\times 1000}{\\Delta T_f \\times w_1} = \\dfrac{5.12 \\times 1.00 \\times 1000}{0.40 \\times 50}$",
        "$M_2 = \\dfrac{5120}{20} = 256\\,\\text{g mol}^{-1}$",
      ]
    ),
    Q(
      "2026 · Exam 2",
      "Q41",
      "2.00 g of a non-electrolyte solute dissolved in 100 g of benzene lowered the freezing point of benzene by 0.40 K. The freezing point depression constant for benzene is $5.12\\text{ K kg mol}^{-1}$. Find the molar mass of the solute.",
      [
        "$M_2 = \\dfrac{K_f \\times w_2 \\times 1000}{\\Delta T_f \\times w_1} = \\dfrac{5.12 \\times 2.00 \\times 1000}{0.40 \\times 100}$",
        "$M_2 = \\dfrac{10240}{40} = 256\\,\\text{g mol}^{-1}$",
      ]
    ),
    Q(
      "2024 · Exam 3",
      "Q45",
      "A non-electrolyte solute with molar mass $256\\text{ g mol}^{-1}$ dissolved in 100 g of benzene lowered the freezing point of benzene by 0.40 K. The freezing point depression constant of benzene is $5.12\\text{ K kg mol}^{-1}$. Find the mass of the solute dissolved.",
      [
        "Rearranging $\\Delta T_f = \\dfrac{K_f \\times w_2 \\times 1000}{M_2 \\times w_1}$ for $w_2$:",
        "$w_2 = \\dfrac{\\Delta T_f \\times M_2 \\times w_1}{K_f \\times 1000} = \\dfrac{0.40 \\times 256 \\times 100}{5.12 \\times 1000}$",
        "$w_2 = \\dfrac{10240}{5120} = 2.00\\,\\text{g}$",
      ]
    ),
    Q(
      "2026-27 · Model Paper 4",
      "Q42",
      "A solution containing $34.2\\text{ g}$ of cane sugar $C_{12}H_{22}O_{11}$ dissolved in $500\\text{ cm}^3$ of water froze at $-0.374^{\\circ}\\text{C}$. Calculate the freezing point depression constant of water. [Given: Density of water = $1.0\\text{ g cm}^{-3}$]",
      [
        "Moles of sugar $= \\dfrac{34.2}{342} = 0.1\\,\\text{mol}$",
        "Mass of water $= 500\\text{ cm}^3 \\times 1.0 = 500\\,\\text{g} = 0.5\\,\\text{kg}$",
        "Molality $m = \\dfrac{0.1}{0.5} = 0.2\\,\\text{mol kg}^{-1}$",
        "$\\Delta T_f = 0 - (-0.374) = 0.374\\,\\text{K}$",
        "$K_f = \\dfrac{\\Delta T_f}{m} = \\dfrac{0.374}{0.2} = 1.87\\,\\text{K kg mol}^{-1}$",
      ]
    ),
  ]),
];

// ----- GROUP 6: Osmotic Pressure -----
const OSMOTIC_PRESSURE = [
  P("Osmotic Pressure", "Part D Numericals", "indigo", [
    Q(
      "2025 · Exam 1",
      "Q42",
      "Calculate the osmotic pressure in pascals exerted by a solution prepared by dissolving 1.0 g of polymer of molar mass 185000 in 450 mL of water at $37^{\\circ}\\text{C}$. $[R = 8.314 \\times 10^3 \\text{ Pa L K}^{-1} \\text{ mol}^{-1}]$",
      [
        "$n = \\dfrac{w}{M} = \\dfrac{1.0}{185000} = 5.405 \\times 10^{-6}\\,\\text{mol}$, $\\;V = 0.450\\,\\text{L}$, $\\;T = 310\\,\\text{K}$",
        "$\\pi = \\dfrac{n}{V}RT = \\dfrac{5.405 \\times 10^{-6}}{0.450} \\times (8.314 \\times 10^{3}) \\times 310$",
        "$\\pi \\approx 30.96\\,\\text{Pa}$",
      ]
    ),
    Q(
      "2025 · Exam 3",
      "Q41",
      "$400\\text{ cm}^3$ of an aqueous solution of a protein contains 2.52 g of the protein. The osmotic pressure of such a solution at 300 K is found to be $2.57 \\times 10^{-3}\\text{ bar}$. Calculate the molar mass of the protein $[R = 0.083\\text{ L bar mol}^{-1} \\text{ K}^{-1}]$",
      [
        "$V = 400\\text{ cm}^3 = 0.400\\,\\text{L}$",
        "$M = \\dfrac{wRT}{\\pi V} = \\dfrac{2.52 \\times 0.083 \\times 300}{2.57 \\times 10^{-3} \\times 0.400}$",
        "$M = \\dfrac{62.748}{1.028 \\times 10^{-3}} \\approx 6.10 \\times 10^{4}\\,\\text{g mol}^{-1}$",
      ]
    ),
    Q(
      "2025 · Exam 2",
      "Q42",
      "Determine the amount (in grams) of $CaCl_2$ (i = 2.47) dissolved in 2.5 L of water such that its osmotic pressure is 0.75 atm at $27^{\\circ}\\text{C}$. ($R = 0.0821\\text{ L atm K}^{-1} \\text{ mol}^{-1}$, molar mass of $CaCl_2 = 111\\text{ g mol}^{-1}$)",
      [
        "$\\pi = i\\,\\dfrac{w}{M}\\dfrac{RT}{V} \\Rightarrow w = \\dfrac{\\pi M V}{i\\,R\\,T}$",
        "$w = \\dfrac{0.75 \\times 111 \\times 2.5}{2.47 \\times 0.0821 \\times 300}$",
        "$w = \\dfrac{208.125}{60.84} \\approx 3.42\\,\\text{g}$",
      ]
    ),
    Q(
      "2026-27 · Model Paper 1",
      "Q45",
      "Calculate the osmotic pressure in pascal exerted by a solution prepared by dissolving 0.925 g of polymer of molar mass 1,85,000 in $500\\text{ mL}$ of water at $37^{\\circ}\\text{C}$. [Given: $R = 8.314 \\times 10^{3}\\text{ Pa L K}^{-1} \\text{ mol}^{-1}$]",
      [
        "$n = \\dfrac{0.925}{185000} = 5.0 \\times 10^{-6}\\,\\text{mol}$, $\\;V = 0.500\\,\\text{L}$, $\\;T = 310\\,\\text{K}$",
        "$\\pi = \\dfrac{n}{V}RT = \\dfrac{5.0 \\times 10^{-6}}{0.500} \\times (8.314 \\times 10^{3}) \\times 310$",
        "$\\pi \\approx 25.77\\,\\text{Pa}$",
      ]
    ),
    Q(
      "2026-27 · Model Paper 3",
      "Q41",
      "Calculate the osmotic pressure of $0.5\\%$ (w/v) aqueous solution of sucrose at $300\\text{ K}$. $R = 0.08314\\text{ L bar K}^{-1} \\text{ mol}^{-1}$ and molar mass of sucrose = $342\\text{ g mol}^{-1}$.",
      [
        "$0.5\\%\\ (w/v) = 0.5\\text{ g per }100\\text{ mL} = 5\\text{ g L}^{-1}$",
        "Concentration $C = \\dfrac{5}{342} = 0.01462\\,\\text{mol L}^{-1}$",
        "$\\pi = CRT = 0.01462 \\times 0.08314 \\times 300 \\approx 0.365\\,\\text{bar}$",
      ]
    ),
    Q(
      "2026-27 · Model Paper 5",
      "Q42",
      "At the same temperature, $6\\%$ urea is isotonic with $5\\%$ solution of an unknown non-electrolyte A. Calculate the molar mass of the unknown non-electrolyte A. (molar mass of urea $= 60\\text{ g mol}^{-1}$)",
      [
        "Isotonic solutions have equal molar concentrations.",
        "$C_{\\text{urea}} = \\dfrac{6}{60 \\times 0.1} = 1\\,\\text{mol L}^{-1}$ (6 g in 100 mL)",
        "$C_{A} = \\dfrac{5}{M_A \\times 0.1} = 1 \\Rightarrow M_A = \\dfrac{5}{0.1} = 50\\,\\text{g mol}^{-1}$",
      ]
    ),
  ]),
];

// Each page = one topic group (matches the ChapterQuestions pager UI).
export const SOLUTIONS_NUMERIC = {
  "Solutions": [BOILING_POINT, FREEZING_POINT, OSMOTIC_PRESSURE],
};
