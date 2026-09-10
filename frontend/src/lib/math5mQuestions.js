// Mathematics — 5 Mark (Part D) board questions grouped by year, per chapter.
// Same shape as RF_5M_PAGES. Math is written in LaTeX: inline math is wrapped in
// $...$ and display math (large matrices) in $$...$$, rendered by <MathText/>.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });

// Reusable matrices (LaTeX)
const mSkewA = "\\begin{bmatrix} 0 & 6 & 7 \\\\ -6 & 0 & 8 \\\\ 7 & -8 & 0 \\end{bmatrix}";
const mSymB  = "\\begin{bmatrix} 0 & 1 & 1 \\\\ 1 & 0 & 2 \\\\ 1 & 2 & 0 \\end{bmatrix}";
const mColC  = "\\begin{bmatrix} 2 \\\\ -2 \\\\ 3 \\end{bmatrix}";
const mA2    = "\\begin{bmatrix} 1 & 2 & -3 \\\\ 5 & 0 & 2 \\\\ 1 & -1 & 1 \\end{bmatrix}";
const mB2    = "\\begin{bmatrix} 3 & -1 & 2 \\\\ 4 & 2 & 5 \\\\ 2 & 0 & 3 \\end{bmatrix}";
const mC2    = "\\begin{bmatrix} 4 & 1 & 2 \\\\ 0 & 3 & 2 \\\\ 1 & -2 & 3 \\end{bmatrix}";
const mColA1 = "\\begin{bmatrix} 1 \\\\ -4 \\\\ 3 \\end{bmatrix}";
const mRowB1 = "\\begin{bmatrix} -1 & 2 & 1 \\end{bmatrix}";
const mColA2 = "\\begin{bmatrix} -2 \\\\ 4 \\\\ 5 \\end{bmatrix}";
const mRowB2 = "\\begin{bmatrix} 1 & 3 & -6 \\end{bmatrix}";
const mA24a  = "\\begin{bmatrix} 4 & -\\sqrt{3} & 2 \\\\ 4 & 2 & 0 \\end{bmatrix}";
const mB2x3  = "\\begin{bmatrix} 2 & -1 & 2 \\\\ 1 & 2 & 4 \\end{bmatrix}";
const mA5    = "\\begin{bmatrix} 3 & \\sqrt{3} & 2 \\\\ 4 & 2 & 0 \\end{bmatrix}";
const mA4    = "\\begin{bmatrix} 1 & 2 & 3 \\\\ 3 & -2 & 1 \\\\ 4 & 2 & 1 \\end{bmatrix}";
const mP1    = "\\begin{bmatrix} 1 & -1 & 2 \\\\ 0 & 2 & -3 \\\\ 3 & -2 & 4 \\end{bmatrix}";
const mP2    = "\\begin{bmatrix} -2 & 0 & 1 \\\\ 9 & 2 & -3 \\\\ 6 & 1 & -2 \\end{bmatrix}";

// ---------------- 40. Matrices (Q40) ----------------
const MATRICES = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model 1", qno: "Q40", marks: 5, text: `If $A = ${mSkewA}$, $B = ${mSymB}$ and $C = ${mColC}$, calculate $AC$, $BC$ and $(A + B)C$. Also verify that $(A + B)C = AC + BC$.` },
      { tag: "Model 2", qno: "Q40", marks: 5, text: `For the matrices $A = ${mColA2}$ and $B = ${mRowB2}$, verify that $(AB)' = B'A'$.` },
      { tag: "Model 3", qno: "Q40", marks: 5, text: `For the matrices $A = ${mColA2}$ and $B = ${mRowB2}$, verify that $(AB)' = B'A'$.` },
      { tag: "Model 4", qno: "Q40", marks: 5, text: `If $A = ${mA4}$, then show that $A^3 - 23A - 40I = O$.` },
      { tag: "Model 5", qno: "Q40", marks: 5, text: `If $A = ${mA5}$ and $B = ${mB2x3}$, then verify that $(A + B)' = A' + B'$.` },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q40", marks: 5, text: `If $A = ${mColA1}$ and $B = ${mRowB1}$, verify that $(AB)' = B'A'$.` },
      { tag: "Exam 2", qno: "Q40", marks: 5, text: `If $A = ${mColA2}$ and $B = ${mRowB2}$, verify that $(AB)' = B'A'$.` },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q40", marks: 5, text: `If $A = ${mColA1}$ and $B = ${mRowB1}$, verify that $(AB)' = B'A'$.` },
      { tag: "Exam 2", qno: "Q40", marks: 5, text: `If $A = ${mSkewA}$, $B = ${mSymB}$ and $C = ${mColC}$, then calculate $AC$, $BC$ and $(A + B)C$. Also verify that $(A + B)C = AC + BC$.` },
      { tag: "Exam 3", qno: "Q40", marks: 5, text: `If $A = ${mSkewA}$, $B = ${mSymB}$ and $C = ${mColC}$, calculate $AC$, $BC$ and $(A + B)C$. Also verify $(A - B)C = AC - BC$.` },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q44", marks: 5, text: `If $A = ${mA2}$, $B = ${mB2}$, $C = ${mC2}$ then compute $(A + B)$ and $(B - C)$. Also verify that $A + (B - C) = (A + B) - C$.` },
      { tag: "Exam 2", qno: "Q44", marks: 5, text: `If $A = ${mA2}$, $B = ${mB2}$ and $C = ${mC2}$, then compute $(A + B)$ and $(B - C)$. Also, verify that $A + (B - C) = (A + B) - C$.` },
      { tag: "Exam 3", qno: "Q44", marks: 5, text: `If $A = \\begin{bmatrix} 4 & \\sqrt{3} & 2 \\\\ 4 & 2 & 0 \\end{bmatrix}$ and $B = ${mB2x3}$ verify that $(A + B)' = A' + B'$.` },
    ]),
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q50", marks: 5, text: `If $A = ${mSkewA}$, $B = ${mSymB}$, $C = ${mColC}$. Calculate $AC$, $BC$ and $(A + B)C$. Verify that $(A + B)C = AC + BC$.` },
      { tag: "Supplement", qno: "Q50", marks: 5, text: `If $A = ${mA2}$, $B = ${mB2}$ and $C = ${mC2}$, compute $(A + B)$ and $(B - C)$. Verify that $A + (B - C) = (A + B) - C$.` },
    ]),
  ],
];

// ---------------- 42. Continuity & Differentiability (Q42) ----------------
const CONTINUITY = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model 1", qno: "Q42", marks: 5, text: "If $y = 3e^{2x} + 2e^{3x}$, then prove that $\\dfrac{d^2y}{dx^2} - 5\\dfrac{dy}{dx} + 6y = 0$." },
      { tag: "Model 2", qno: "Q42", marks: 5, text: "If $y = \\sin^{-1}x$, then prove that $(1 - x^2)\\dfrac{d^2y}{dx^2} - x\\dfrac{dy}{dx} = 0$." },
      { tag: "Model 3", qno: "Q42", marks: 5, text: "If $y = (\\tan^{-1}x)^2$, show that $(1 + x^2)^2 y_2 + 2x(1 + x^2) y_1 = 2$." },
      { tag: "Model 4", qno: "Q42", marks: 5, text: "If $y = 3\\cos(\\log x) + 4\\sin(\\log x)$, prove that $x^2 y_2 + x y_1 + y = 0$." },
      { tag: "Model 5", qno: "Q42", marks: 5, text: "If $y = Ae^{mx} + Be^{nx}$, prove that $\\dfrac{d^2y}{dx^2} - (m + n)\\dfrac{dy}{dx} + (mn)y = 0$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q42", marks: 5, text: "If $y = Ae^{mx} + Be^{nx}$, show that $\\dfrac{d^2y}{dx^2} - (m + n)\\dfrac{dy}{dx} + mny = 0$." },
      { tag: "Exam 2", qno: "Q42", marks: 5, text: "If $y = 3\\cos(\\log x) + 4\\sin(\\log x)$, show that $x^2 y_2 + x y_1 + y = 0$." },
    ]),
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q42", marks: 5, text: "If $y = (\\tan^{-1}x)^2$, then show that $(x^2 + 1)^2 y_2 + 2x(x^2 + 1) y_1 = 2$." },
      { tag: "Exam 2", qno: "Q42", marks: 5, text: "If $y = (\\tan^{-1}x)^2$, then show that $(x^2 + 1)^2 \\dfrac{d^2y}{dx^2} + 2x(x^2 + 1)\\dfrac{dy}{dx} = 2$." },
      { tag: "Exam 3", qno: "Q42", marks: 5, text: "If $x = a(\\cos\\theta + \\theta\\sin\\theta)$ and $y = a(\\sin\\theta - \\theta\\cos\\theta)$, then show that $\\dfrac{d^2y}{dx^2} = \\dfrac{1}{a\\theta}\\sec^3\\theta$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q42", marks: 5, text: "If $y = Ae^{mx} + Be^{nx}$, show that $\\dfrac{d^2y}{dx^2} - (m + n)\\dfrac{dy}{dx} + mny = 0$." },
      { tag: "Exam 2", qno: "Q42", marks: 5, text: "If $y = Ae^{mx} + Be^{nx}$, show that $\\dfrac{d^2y}{dx^2} - (m + n)\\dfrac{dy}{dx} + mny = 0$." },
      { tag: "Exam 3", qno: "Q42", marks: 5, text: "If $y = 3\\cos(\\log x) + 4\\sin(\\log x)$, show that $x^2 y_2 + x y_1 + y = 0$." },
    ]),
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q42", marks: 5, text: "If $y = (\\tan^{-1}x)^2$, then prove that $(x^2 + 1)^2 y_2 + 2x(x^2 + 1) y_1 = 2$." },
      { tag: "Supplement", qno: "Q42", marks: 5, text: "If $y = (\\tan^{-1}x)^2$, then prove that $(x^2 + 1)^2 y_2 + 2x(x^2 + 1) y_1 = 2$." },
    ]),
  ],
];

// ---------------- 43. Integrals (Q43) ----------------
const INTEGRALS = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model 1", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{\\sqrt{a^2 - x^2}}$ with respect to $x$ and hence evaluate $\\displaystyle\\int \\dfrac{dx}{\\sqrt{25 - x^2}}$." },
      { tag: "Model 2", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{x^2 - a^2}$ with respect to $x$ and evaluate $\\displaystyle\\int \\dfrac{dx}{x^2 - 16}$." },
      { tag: "Model 3", qno: "Q43", marks: 5, text: "Integrate $\\dfrac{1}{x^2 + a^2}$ with respect to $x$ and hence find $\\displaystyle\\int \\dfrac{dx}{x^2 + 2x + 10}$." },
      { tag: "Model 4", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{\\sqrt{x^2 + a^2}}$ w.r.t $x$ and hence evaluate $\\displaystyle\\int \\dfrac{1}{\\sqrt{x^2 + 2x + 4}}\\,dx$." },
      { tag: "Model 5", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{\\sqrt{x^2 + a^2}}$ with respect to $x$ and hence evaluate $\\displaystyle\\int \\dfrac{dx}{\\sqrt{1 + 4x^2}}$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{a^2 - x^2}$ with respect to $x$ and hence find $\\displaystyle\\int \\dfrac{1}{25 - x^2}\\,dx$." },
      { tag: "Exam 2", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{\\sqrt{a^2 - x^2}}$ with respect to $x$ and hence find $\\displaystyle\\int \\dfrac{1}{\\sqrt{9 - 25x^2}}\\,dx$." },
    ]),
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{x^2 + a^2}$ with respect to $x$ and hence find $\\displaystyle\\int \\dfrac{1}{x^2 - 6x + 13}\\,dx$." },
      { tag: "Exam 2", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{x^2 - a^2}$ with respect to $x$ and hence evaluate $\\displaystyle\\int \\dfrac{1}{4x^2 - 9}\\,dx$." },
      { tag: "Exam 3", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{a^2 - x^2}$ with respect to $x$ and hence evaluate $\\displaystyle\\int \\dfrac{1}{3 - x^2 - 2x}\\,dx$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{x^2 + a^2}$ with respect to $x$ and hence find $\\displaystyle\\int \\dfrac{1}{x^2 + 2x + 2}\\,dx$." },
      { tag: "Exam 2", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{\\sqrt{x^2 + a^2}}$ with respect to $x$ and hence evaluate $\\displaystyle\\int \\dfrac{1}{\\sqrt{(2 - x)^2 + 1}}\\,dx$." },
      { tag: "Exam 3", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{a^2 - x^2}$ with respect to $x$ and hence evaluate $\\displaystyle\\int \\dfrac{dx}{5 - x^2}$." },
    ]),
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{\\sqrt{x^2 + a^2}}$ with respect to $x$ and hence evaluate $\\displaystyle\\int \\dfrac{1}{\\sqrt{x^2 + 2x + 2}}\\,dx$." },
      { tag: "Supplement", qno: "Q43", marks: 5, text: "Find the integral of $\\dfrac{1}{x^2 + a^2}$ with respect to $x$ and hence evaluate $\\displaystyle\\int \\dfrac{1}{3 + 2x + x^2}\\,dx$." },
    ]),
  ],
];

// ---------------- 44. Application of Integrals (Q44) ----------------
const APP_INTEGRALS = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model 1", qno: "Q44", marks: 5, text: "Find the area of the ellipse $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$ by the method of integration." },
      { tag: "Model 2", qno: "Q44", marks: 5, text: "Using the method of integration, find the area enclosed by the circle $x^2 + y^2 = a^2$." },
      { tag: "Model 3", qno: "Q44", marks: 5, text: "Find the area bounded by the curve $y = \\sin x$ between $x = 0$ and $x = 2\\pi$." },
      { tag: "Model 4", qno: "Q44", marks: 5, text: "Using the method of integration, find the area enclosed by the ellipse $\\dfrac{x^2}{4} + \\dfrac{y^2}{9} = 1$." },
      { tag: "Model 5", qno: "Q44", marks: 5, text: "Using the method of integration, find the area lying in the first quadrant and bounded by the circle $x^2 + y^2 = 4$ and the lines $x = 0$ and $x = 2$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q44", marks: 5, text: "Find the area of circle $x^2 + y^2 = a^2$ by method of integration." },
      { tag: "Exam 2", qno: "Q44", marks: 5, text: "Using the method of integration, find the area enclosed by the circle $x^2 + y^2 = a^2$." },
    ]),
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q44", marks: 5, text: "Find the area bounded by the curve $y = \\sin x$ between $x = 0$ and $x = 2\\pi$." },
      { tag: "Exam 2", qno: "Q44", marks: 5, text: "Find the area of the region bounded by the line $y = 3x + 2$, the X-axis and the ordinates $x = -1$ and $x = 1$ by the method of integration." },
      { tag: "Exam 3", qno: "Q44", marks: 5, text: "Find the area bounded by the curve $y = \\cos x$ between $x = 0$ and $x = 2\\pi$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q44", marks: 5, text: "Find the area enclosed by the ellipse $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$ by the method of integration." },
      { tag: "Exam 2", qno: "Q44", marks: 5, text: "Find the area enclosed by the ellipse $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$ using integration." },
      { tag: "Exam 3", qno: "Q44", marks: 5, text: "Find the area enclosed by the circle $x^2 + y^2 = a^2$ using integration." },
    ]),
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q44", marks: 5, text: "Find the area enclosed by the circle $x^2 + y^2 = a^2$ by the method of integration." },
      { tag: "Supplement", qno: "Q44", marks: 5, text: "Find the area of the circle $x^2 + y^2 = a^2$ by integration." },
    ]),
  ],
];

// ---------------- 45. Differential Equations (Q45) ----------------
const DIFF_EQ = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model 1", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation $\\dfrac{dy}{dx} + 2y = \\sin x$." },
      { tag: "Model 2", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation $\\dfrac{dy}{dx} + y\\cot x = 4x\\csc x$  $(x \\neq 0)$." },
      { tag: "Model 3", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation $x\\dfrac{dy}{dx} + 2y = x^2 \\log x$." },
      { tag: "Model 4", qno: "Q45", marks: 5, text: "Find the general solution of $\\cos^2 x\\dfrac{dy}{dx} + y = \\tan x$  $\\left(0 \\leq x \\leq \\dfrac{\\pi}{2}\\right)$." },
      { tag: "Model 5", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation $\\dfrac{dy}{dx} + \\dfrac{y}{x} = x^2$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation $x\\dfrac{dy}{dx} + 2y = x^2$  $(x \\neq 0)$." },
      { tag: "Exam 2", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation $x\\dfrac{dy}{dx} - y = 2x^2$." },
    ]),
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q45", marks: 5, text: "Solve the differential equation $\\cos^2 x\\dfrac{dy}{dx} + y = \\tan x$  $\\left(0 \\leq x < \\dfrac{\\pi}{2}\\right)$." },
      { tag: "Exam 2", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation $x\\dfrac{dy}{dx} + 2y = x^2 \\log x$." },
      { tag: "Exam 3", qno: "Q45", marks: 5, text: "Find the equation of a curve passing through the point $(0, 0)$ and whose differential equation is $\\dfrac{dy}{dx} = e^x \\sin x$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q45", marks: 5, text: "Find the particular solution of the differential equation $(1 + x^2)\\dfrac{dy}{dx} + 2xy = \\dfrac{1}{1 + x^2}$; $y = 0$ when $x = 1$." },
      { tag: "Exam 2", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation $x\\dfrac{dy}{dx} + 2y = x^2$  $(x \\neq 0)$." },
      { tag: "Exam 3", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation $\\dfrac{dy}{dx} + \\dfrac{y}{x} = x^2$." },
    ]),
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation $x\\dfrac{dy}{dx} + 2y = x^2 \\log x$  $(x \\neq 0)$." },
      { tag: "Supplement", qno: "Q45", marks: 5, text: "Find the general solution of the differential equation $x\\dfrac{dy}{dx} + 2y = x^2 \\log x$  $(x \\neq 0)$." },
    ]),
  ],
];

export const MATH_5M = {
  "Matrices": MATRICES,
  "Continuity and Differentiability": CONTINUITY,
  "Continuity & Differentiability": CONTINUITY,
  "Integrals": INTEGRALS,
  "Application of Integrals": APP_INTEGRALS,
  "Differential Equations": DIFF_EQ,
};
