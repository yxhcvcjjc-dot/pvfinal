// Mathematics — Part B (2 Mark) questions, grouped by year.
// Same shape as RF_5M_PAGES. Rendered by <MathText/> (KaTeX).
// In JS strings backslashes are doubled: `\\tan`, `\\frac`, `\\sqrt`, etc.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });

// ---------------- Inverse Trigonometric Functions (2 Mark, Part B) ----------------
const INVERSE_TRIG_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q21", marks: 2, text: "Find the value of $\\tan^{-1}\\left[2\\cos\\left(2\\sin^{-1}\\dfrac{1}{2}\\right)\\right]$." },
      { tag: "Paper 2", qno: "Q21", marks: 2, text: "Prove that $\\sin^{-1}\\left(2x\\sqrt{1 - x^{2}}\\right) = 2\\sin^{-1}x$, $\\dfrac{-1}{\\sqrt{2}} \\le x \\le \\dfrac{1}{\\sqrt{2}}$." },
      { tag: "Paper 3", qno: "Q21", marks: 2, text: "Evaluate $\\cos^{-1}\\left[\\cos\\dfrac{7\\pi}{6}\\right]$." },
      { tag: "Paper 4", qno: "Q21", marks: 2, text: "Show that $\\sin^{-1}\\left(2x\\sqrt{1 - x^{2}}\\right) = 2\\cos^{-1}(x)$, $\\dfrac{1}{\\sqrt{2}} \\le x \\le 1$." },
      { tag: "Paper 5", qno: "Q21", marks: 2, text: "Prove that $2\\sin^{-1}\\dfrac{3}{5} = \\tan^{-1}\\dfrac{24}{7}$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q21", marks: 2, text: "Write $\\tan^{-1}\\sqrt{\\dfrac{1 - \\cos x}{1 + \\cos x}}$, $0 < x < \\pi$ in simplest form." },
      { tag: "Exam 2", qno: "Q21", marks: 2, text: "Prove that $3\\sin^{-1} x = \\sin^{-1}(3x - 4x^{3})$, $x \\in \\left[-\\dfrac{1}{2}, \\dfrac{1}{2}\\right]$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 3", qno: "Q21", marks: 2, text: "Prove that $\\cos^{-1}(4x^{3} - 3x) = 3\\cos^{-1} x$, $x \\in \\left[\\dfrac{1}{2}, 1\\right]$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q21", marks: 2, text: "Show that $\\sin^{-1}\\left(2x\\sqrt{1 - x^{2}}\\right) = 2\\sin^{-1} x$, $-\\dfrac{1}{\\sqrt{2}} \\le x \\le \\dfrac{1}{\\sqrt{2}}$." },
      { tag: "Exam 2", qno: "Q21", marks: 2, text: "Show that $\\sin^{-1}\\left(2x\\sqrt{1 - x^{2}}\\right) = 2\\sin^{-1} x$, $-\\dfrac{1}{\\sqrt{2}} \\le x \\le \\dfrac{1}{\\sqrt{2}}$." },
      { tag: "Exam 3", qno: "Q21", marks: 2, text: "Write $\\cot^{-1}\\left(\\dfrac{1}{\\sqrt{x^{2} - 1}}\\right)$, $x > 1$ in the simplest form." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q22", marks: 2, text: "Prove that $\\sin^{-1} x + \\cos^{-1} x = \\dfrac{\\pi}{2}$, $x \\in [-1, 1]$." },
      { tag: "Supplement", qno: "Q22", marks: 2, text: "Prove that $\\sin^{-1}\\left(\\dfrac{1}{x}\\right) = \\operatorname{cosec}^{-1}(x)$, $x \\ge 1$ or $x \\le -1$." },
    ]),
  ],
];

// ---------------- Determinants (2 Mark, Part B) ----------------
const DETERMINANTS_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q22", marks: 2, text: "Find the area of the triangle whose vertices are $(3,8)$, $(-4,2)$ and $(5,1)$ using determinants." },
      { tag: "Paper 2", qno: "Q22", marks: 2, text: "Find the equation of the line joining the points $(3,1)$ and $(9,3)$ using determinants." },
      { tag: "Paper 3", qno: "Q22", marks: 2, text: "If the area of the triangle with vertices $(2,-6)$, $(5,4)$ and $(k,4)$ is $35$ square units, find the values of $k$ using determinants." },
      { tag: "Paper 4", qno: "Q22", marks: 2, text: "Find values of $k$ if area of triangle is $3$ sq. units and vertices are $(1,3)$, $(0,0)$ and $(k,0)$." },
      { tag: "Paper 5", qno: "Q22", marks: 2, text: "If the area of the triangle with vertices $(-2,0)$, $(0,4)$ and $(0,k)$ is $4$ square units, find the values of $k$ using determinants." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q22", marks: 2, text: "Find the equation of the line joining $(1,2)$ and $(3,6)$ using determinants." },
      { tag: "Exam 2", qno: "Q22", marks: 2, text: "Find the area of the triangle whose vertices are $(1,0)$, $(6,0)$ and $(4,3)$ using determinants." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q21", marks: 2, text: "Find the equation of the line through the points $(1,2)$ and $(3,6)$ using determinants." },
      { tag: "Exam 2", qno: "Q21", marks: 2, text: "Find the equation of the line joining the points $(1,3)$ and $(0,0)$ using determinants." },
      { tag: "Exam 3", qno: "Q23", marks: 2, text: "Find the area of the triangle whose vertices are $(-2,-3)$, $(3,2)$ and $(-1,-8)$ using determinants." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q22", marks: 2, text: "Find the equation of the line joining the points $(3,1)$ and $(9,3)$ using determinants." },
      { tag: "Exam 2", qno: "Q22", marks: 2, text: "Find the value of $K$, if area of triangle is $35$ sq. units and vertices are $(2,-6)$, $(5,4)$ and $(K,4)$, using determinants." },
      { tag: "Exam 3", qno: "Q22", marks: 2, text: "If the area of triangle with vertices $(-2,0)$, $(0,4)$ and $(0,k)$ is $4$ square units, find $k$ using determinants." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q24", marks: 2, text: "Find the area of the triangle whose vertices are $(1,0)$, $(6,0)$ and $(4,3)$ using determinants." },
      { tag: "Supplement", qno: "Q24", marks: 2, text: "Find the area of the triangle whose vertices are $(-2,-3)$, $(3,2)$ and $(-1,-8)$ using determinants." },
    ]),
  ],
];

// ---------------- Continuity & Differentiability (2 Mark, Part B) ----------------
const CONTINUITY_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q23", marks: 2, text: "Find $\\frac{dy}{dx}$, if $y = \\sin^{-1}\\left(\\frac{2x}{1+x^2}\\right)$, $-1 < x < 1$." },
      { tag: "Paper 2", qno: "Q23", marks: 2, text: "Find $\\frac{dy}{dx}$, if $y + \\sin y = \\cos x$." },
      { tag: "Paper 3", qno: "Q23", marks: 2, text: "Find $\\frac{dy}{dx}$, if $\\sin^2 x + \\cos^2 y = 1$." },
      { tag: "Paper 4", qno: "Q23", marks: 2, text: "Differentiate $(\\log x)^{\\cos x}$ with respect to $x$." },
      { tag: "Paper 5", qno: "Q23", marks: 2, text: "If $\\sqrt{x} + \\sqrt{y} = 10$, show that $\\frac{dy}{dx} + \\sqrt{\\frac{y}{x}} = 0$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q23", marks: 2, text: "Find $\\frac{dy}{dx}$ if $x = \\sin t$ and $y = \\cos 2t$." },
      { tag: "Exam 2", qno: "Q23", marks: 2, text: "Find $\\frac{dy}{dx}$, if $2x + 3y = \\sin y$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q23", marks: 2, text: "If $\\sqrt{x} + \\sqrt{y} = \\sqrt{10}$ then show that $\\frac{dy}{dx} + \\sqrt{\\frac{y}{x}} = 0$." },
      { tag: "Exam 2", qno: "Q23", marks: 2, text: "Find $\\frac{dy}{dx}$, if $y + \\sin y = \\cos x$." },
      { tag: "Exam 3", qno: "Q23", marks: 2, text: "Differentiate $\\sin^2 x + \\cos^2 y = 1$ with respect to $x$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q23", marks: 2, text: "If $2x + 3y = \\sin y$ then find $\\frac{dy}{dx}$." },
      { tag: "Exam 2", qno: "Q23", marks: 2, text: "Find $\\frac{dy}{dx}$, if $ax + by^2 = \\cos y$." },
      { tag: "Exam 3", qno: "Q23", marks: 2, text: "If $2x + 3y = \\sin y$, find $\\frac{dy}{dx}$." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q23", marks: 2, text: "Find $\\frac{dy}{dx}$, if $y + \\sin y = \\cos x$." },
      { tag: "Main Exam", qno: "Q23", marks: 2, text: "Find $\\frac{dy}{dx}$, if $y = x^x$, $x > 0$." },
      { tag: "Supplement", qno: "Q23", marks: 2, text: "If $ax + by^2 = \\cos y$ then find $\\frac{dy}{dx}$." },
      { tag: "Supplement", qno: "Q23", marks: 2, text: "Differentiate $(\\log_e x)^x$, $x > 1$ with respect to $x$." },
    ]),
  ],
];

// ---------------- Application of Derivatives (2 Mark, Part B) ----------------
const APP_DERIVATIVES_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q24", marks: 2, text: "Find the interval in which the function $f$ given by $f(x) = x^2 + 2x - 5$ is strictly increasing." },
      { tag: "Paper 2", qno: "Q24", marks: 2, text: "Find the rate of change of the area of a circle with respect to its radius $r$ at $r = 6$ cm." },
      { tag: "Paper 3", qno: "Q24", marks: 2, text: "Prove that the function $f$ given by $f(x) = x^2 e^{-x}$ is increasing in $(0, 2)$." },
      { tag: "Paper 4", qno: "Q24", marks: 2, text: "Find two numbers whose product is 100 and whose sum is minimum." },
      { tag: "Paper 5", qno: "Q24", marks: 2, text: "Find the interval in which the function $f$ given by $f(x) = 2x^3 - 3x$ is increasing." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q24", marks: 2, text: "The radius of a circle is increasing at the rate of 0.7 cm/s. Find the rate of increase of its circumference." },
      { tag: "Exam 2", qno: "Q24", marks: 2, text: "The radius of a circle is increasing uniformly at the rate of 3 cm/sec. Find the rate at which the area of the circle is increasing when the radius is 10 cm." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q24", marks: 2, text: "A balloon which always remains spherical has a variable radius. Find the rate at which its volume is increasing with radius when the radius is 10 cm." },
      { tag: "Exam 1", qno: "Q24", marks: 2, text: "Find the interval in which the function given by $f(x) = 4x^3 - 6x^2 - 72x + 30$ is decreasing." },
      { tag: "Exam 2", qno: "Q24", marks: 2, text: "Find the absolute maximum value of the function $f(x) = x^3$ in the interval $[-2, 2]$." },
      { tag: "Exam 2", qno: "Q24", marks: 2, text: "Find the interval in which the function $f$ given by $f(x) = x^2 - 4x + 6$ is increasing." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q24", marks: 2, text: "The radius of a circle is increasing at the rate of 0.7 cm/s. What is the rate of increase of its circumference?" },
      { tag: "Exam 1", qno: "Q24", marks: 2, text: "Find the interval in which the function $f$ given by $f(x) = 2x^2 - 3x$ is decreasing." },
      { tag: "Exam 2", qno: "Q24", marks: 2, text: "The total revenue in Rupees received from the sale of $x$ units of a product is given by $R(x) = 3x^2 + 36x + 5$. Find the marginal revenue when $x = 5$." },
      { tag: "Exam 2", qno: "Q24", marks: 2, text: "Find the local maximum value of the function $g$ given by $g(x) = x^3 - 3x$." },
      { tag: "Exam 3", qno: "Q24", marks: 2, text: "The radius of a circle is increasing at the rate of 0.7 cm/s. What is the rate of increase of its circumference?" },
      { tag: "Exam 3", qno: "Q24", marks: 2, text: "Prove that the function $f(x) = \\cos x$ is decreasing in $(0, \\pi)$." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q24", marks: 2, text: "Using differential, find the approximate value of $\\sqrt{25.3}$." },
      { tag: "Supplement", qno: "Q24", marks: 2, text: "Find the local maximum value of the function $f(x) = x^3 - 3x$." },
    ]),
  ],
];

// ---------------- Integrals (2 Mark, Part B) ----------------
const INTEGRALS_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q25", marks: 2, text: "Find $\\int \\frac{x \\sin^{-1} x}{\\sqrt{1-x^2}}\\, dx$." },
      { tag: "Paper 2", qno: "Q25", marks: 2, text: "Find $\\int \\sin 2x \\cos 3x\\, dx$." },
      { tag: "Paper 3", qno: "Q25", marks: 2, text: "Find $\\int \\tan^2(2x - 3)\\, dx$." },
      { tag: "Paper 4", qno: "Q25", marks: 2, text: "Evaluate $\\int_{0}^{1} \\frac{x}{1 + x^2}\\, dx$." },
      { tag: "Paper 5", qno: "Q25", marks: 2, text: "Find $\\int \\frac{\\sin^2 x}{1 + \\cos x}\\, dx$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q25", marks: 2, text: "Find $\\int \\frac{1}{x + x \\log x}\\, dx$." },
      { tag: "Exam 2", qno: "Q25", marks: 2, text: "Find $\\int \\frac{\\sin(\\tan^{-1} x)}{1 + x^2}\\, dx$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q25", marks: 2, text: "Find $\\int \\cot x \\cdot \\log(\\sin x)\\, dx$." },
      { tag: "Exam 2", qno: "Q25", marks: 2, text: "Evaluate $\\int \\frac{x^3 - x^2 + x - 1}{x - 1}\\, dx$." },
      { tag: "Exam 3", qno: "Q25", marks: 2, text: "Evaluate $\\int \\frac{x^2 \\tan^{-1}(x^4)}{1+x^8}\\, dx$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q25", marks: 2, text: "Find $\\int \\frac{x}{(x+1)(x+2)}\\, dx$." },
      { tag: "Exam 1", qno: "Q25", marks: 2, text: "Evaluate $\\int_{1}^{\\sqrt{3}} \\frac{dx}{1 + x^2}$." },
      { tag: "Exam 2", qno: "Q25", marks: 2, text: "Find $\\int \\frac{x}{(x-1)(x-2)}\\, dx$." },
      { tag: "Exam 2", qno: "Q25", marks: 2, text: "Evaluate $\\int_{0}^{\\pi/2} \\cos^2 x\\, dx$." },
      { tag: "Exam 3", qno: "Q25", marks: 2, text: "Find $\\int \\frac{x}{(x+1)(x+2)}\\, dx$." },
      { tag: "Exam 3", qno: "Q25", marks: 2, text: "Evaluate $\\int_{0}^{1} \\frac{x}{x^2 + 1}\\, dx$." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q25", marks: 2, text: "Evaluate $\\int \\frac{2 - 3\\sin x}{\\cos^2 x}\\, dx$." },
      { tag: "Main Exam", qno: "Q25", marks: 2, text: "Evaluate $\\int_{1}^{\\sqrt{3}} \\frac{dx}{1 + x^2}$." },
      { tag: "Supplement", qno: "Q25", marks: 2, text: "Evaluate $\\int \\sin 4x \\sin 8x\\, dx$." },
      { tag: "Supplement", qno: "Q25", marks: 2, text: "Find $\\int_{0}^{\\pi/4} \\tan x\\, dx$." },
    ]),
  ],
];

// ---------------- Differential Equations (2 Mark, Part B) ----------------
const DIFF_EQUATIONS_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q26", marks: 2, text: "Find the general solution of the differential equation $\\frac{dy}{dx} = \\frac{2x}{y^2}$." },
      { tag: "Paper 2", qno: "Q26", marks: 2, text: "Find the general solution of the differential equation $\\frac{dy}{dx} = \\frac{x+1}{2-y}$, $(y \\neq 2)$." },
      { tag: "Paper 3", qno: "Q26", marks: 2, text: "Find the equation of the curve passing through the point $(1, 1)$ whose differential equation is $x\\,dy = (2x^2 + 1)\\,dx$ $(x \\neq 0)$." },
      { tag: "Paper 4", qno: "Q26", marks: 2, text: "Find the order and degree of the differential equation $\\frac{d^4 y}{dx^4} - \\sin\\left(\\frac{d^3 y}{dx^3}\\right) = 0$." },
      { tag: "Paper 5", qno: "Q26", marks: 2, text: "Find the equation of a curve passing through the point $(-2, 3)$, given that the slope of the tangent to the curve at any point $(x, y)$ is $\\frac{2x}{y^2}$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q26", marks: 2, text: "Find the general solution of the differential equation $\\frac{dy}{dx} = \\frac{1+y^2}{1+x^2}$." },
      { tag: "Exam 2", qno: "Q26", marks: 2, text: "Find the general solution of the differential equation $\\frac{dy}{dx} = \\frac{x+1}{2-y}$, $y \\neq 2$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q26", marks: 2, text: "Verify that the function $y = a\\sin x + b\\cos x$ is a solution of the differential equation $\\frac{d^2y}{dx^2} + y = 0$." },
      { tag: "Exam 2", qno: "Q26", marks: 2, text: "Find the general solution of the differential equation $\\frac{dy}{dx} = -4xy^2$." },
      { tag: "Exam 3", qno: "Q26", marks: 2, text: "Find the integrating factor (IF) of the differential equation $x \\log x \\frac{dy}{dx} + y = \\frac{2 \\log x}{x}$." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q26", marks: 2, text: "Form the differential equation representing the family of parabolas having vertex at origin and axis along positive direction of $x$-axis." },
      { tag: "Supplement", qno: "Q26", marks: 2, text: "Form the differential equation representing the family of curves $y = mx$, where $m$ is the arbitrary constant." },
    ]),
  ],
];

// ---------------- Vector Algebra (2 Mark, Part B) ----------------
const VECTOR_ALGEBRA_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q27", marks: 2, text: "Find the area of the parallelogram whose adjacent sides are given by the vectors $\\vec{a} = 3\\vec{i} + \\vec{j} + 4\\vec{k}$ and $\\vec{b} = \\vec{i} - \\vec{j} + \\vec{k}$." },
      { tag: "Paper 2", qno: "Q27", marks: 2, text: "Find the projection of the vector $\\vec{a} = 2\\vec{i} + 3\\vec{j} + 2\\vec{k}$ on the vector $\\vec{b} = \\vec{i} + 2\\vec{j} + \\vec{k}$." },
      { tag: "Paper 3", qno: "Q27", marks: 2, text: "Find the area of the triangle whose adjacent sides are determined by the vectors $\\vec{a} = -2\\vec{i} - 5\\vec{k}$ and $\\vec{b} = \\vec{i} - 2\\vec{j} - \\vec{k}$." },
      { tag: "Paper 4", qno: "Q27", marks: 2, text: "If $\\vec{a}$ is a unit vector such that $(\\vec{x} - \\vec{a}) \\cdot (\\vec{x} + \\vec{a}) = 8$, find $|\\vec{x}|$." },
      { tag: "Paper 5", qno: "Q27", marks: 2, text: "Find the position vector of a point $R$ which divides the line joining two points $P$ and $Q$ whose position vectors are $\\vec{i} + 2\\vec{j} - \\vec{k}$ and $-\\vec{i} + \\vec{j} + \\vec{k}$ respectively, in the ratio $2:1$ internally." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q27", marks: 2, text: "Find the projection of the vector $\\vec{a} = 2\\vec{i} + 3\\vec{j} + 2\\vec{k}$ on the vector $\\vec{b} = \\vec{i} + 2\\vec{j} + \\vec{k}$." },
      { tag: "Exam 2", qno: "Q27", marks: 2, text: "Find the area of the parallelogram whose adjacent sides are given by the vectors $\\vec{a} = 3\\vec{i} + \\vec{j} + 4\\vec{k}$ and $\\vec{b} = \\vec{i} - \\vec{j} + \\vec{k}$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q27", marks: 2, text: "If $\\vec{a} = \\vec{i} + \\vec{j} + \\vec{k}$, $\\vec{b} = 2\\vec{i} - \\vec{j} + 3\\vec{k}$ and $\\vec{c} = \\vec{i} - 2\\vec{j} + \\vec{k}$ then find the unit vector parallel to the vector $2\\vec{a} - \\vec{b} + 3\\vec{c}$." },
      { tag: "Exam 2", qno: "Q27", marks: 2, text: "Find the area of a triangle whose adjacent sides are given by the vectors $\\vec{a} = 3\\vec{i} + \\vec{j} + 4\\vec{k}$ and $\\vec{b} = \\vec{i} - \\vec{j} + \\vec{k}$." },
      { tag: "Exam 3", qno: "Q27", marks: 2, text: "Find the area of the parallelogram whose adjacent sides are given by the vectors $\\vec{a} = \\vec{i} - \\vec{j} + 3\\vec{k}$ and $\\vec{b} = 2\\vec{i} - 7\\vec{j} + \\vec{k}$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q27", marks: 2, text: "Consider two points $P$ and $Q$ with position vectors $\\vec{OP} = 3\\vec{a} - 2\\vec{b}$ and $\\vec{OQ} = \\vec{a} + \\vec{b}$. Find the position vector of a point $R$ which divides the line joining $P$ and $Q$ internally in the ratio $2:1$." },
      { tag: "Exam 2", qno: "Q27", marks: 2, text: "Find the projection of the vector $\\vec{a} = 2\\vec{i} + 3\\vec{j} + 2\\vec{k}$ on the vector $\\vec{b} = \\vec{i} + 2\\vec{j} + \\vec{k}$." },
      { tag: "Exam 3", qno: "Q27", marks: 2, text: "Find $|\\vec{a} - \\vec{b}|$ if two vectors $\\vec{a}$ and $\\vec{b}$ are such that $|\\vec{a}| = 2$, $|\\vec{b}| = 3$ and $\\vec{a} \\cdot \\vec{b} = 4$." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q27", marks: 2, text: "Find the projection of the vector $\\vec{a} = 2\\vec{i} + 3\\vec{j} + 2\\vec{k}$ on the vector $\\vec{b} = \\vec{i} + 2\\vec{j} + \\vec{k}$." },
      { tag: "Main Exam", qno: "Q27", marks: 2, text: "Find the area of the parallelogram whose adjacent sides are determined by the vectors $\\vec{a} = \\vec{i} - \\vec{j} + 3\\vec{k}$ and $\\vec{b} = 2\\vec{i} - 7\\vec{j} + \\vec{k}$." },
      { tag: "Supplement", qno: "Q27", marks: 2, text: "Find the projection of the vector $\\vec{i} + 3\\vec{j} + 7\\vec{k}$ on the vector $7\\vec{i} - \\vec{j} + 8\\vec{k}$." },
      { tag: "Supplement", qno: "Q27", marks: 2, text: "Find the area of the parallelogram whose adjacent sides are determined by the vectors $\\vec{a} = 3\\vec{i} + \\vec{j} + 4\\vec{k}$ and $\\vec{b} = \\vec{i} - \\vec{j} + \\vec{k}$." },
    ]),
  ],
];

// ---------------- Three Dimensional Geometry (2 Mark, Part B) ----------------
const THREE_D_GEOMETRY_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q28", marks: 2, text: "Find the angle between the pair of lines given by $\\frac{x+3}{3} = \\frac{y-1}{5} = \\frac{z+3}{4}$ and $\\frac{x+1}{1} = \\frac{y-4}{1} = \\frac{z-5}{2}$." },
      { tag: "Paper 2", qno: "Q28", marks: 2, text: "Find the vector and Cartesian equation of the line passing through the point $(5, 2, -4)$ and parallel to the vector $3\\vec{i} + 2\\vec{j} - 8\\vec{k}$." },
      { tag: "Paper 3", qno: "Q28", marks: 2, text: "Find the value of $k$, so that the lines $\\frac{x-1}{-3} = \\frac{y-2}{2k} = \\frac{z-3}{2}$ and $\\frac{x-1}{3k} = \\frac{y-1}{1} = \\frac{z-6}{-5}$ are at right angles." },
      { tag: "Paper 4", qno: "Q28", marks: 2, text: "Find the angle between the pair of lines $\\vec{r} = 2\\vec{i} + \\vec{j} - 2\\vec{k} + \\lambda(\\vec{i} - \\vec{j} - 2\\vec{k})$ and $\\vec{r} = 2\\vec{i} - \\vec{j} - 5\\vec{k} + \\mu(3\\vec{i} - 5\\vec{j} - 4\\vec{k})$." },
      { tag: "Paper 5", qno: "Q28", marks: 2, text: "Find the direction cosines of the line which makes equal angles with the coordinate axes." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q28", marks: 2, text: "Find the angle between the lines $\\frac{x-5}{4} = \\frac{y-2}{1} = \\frac{z-3}{8}$ and $\\frac{x}{2} = \\frac{y}{2} = \\frac{z}{1}$." },
      { tag: "Exam 2", qno: "Q28", marks: 2, text: "Find the angle between the pair of lines given by $\\vec{r} = 3\\vec{i} + 2\\vec{j} - 4\\vec{k} + \\lambda(\\vec{i} + 2\\vec{j} + 2\\vec{k})$ and $\\vec{r} = 5\\vec{i} - 2\\vec{j} + \\mu(3\\vec{i} + 2\\vec{j} + 6\\vec{k})$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q28", marks: 2, text: "If the lines $\\frac{x-1}{-3} = \\frac{y-2}{2k} = \\frac{z-3}{2}$ and $\\frac{x-1}{3k} = \\frac{y-1}{1} = \\frac{z-6}{-5}$ are perpendicular to each other, then find the value of $k$." },
      { tag: "Exam 2", qno: "Q28", marks: 2, text: "Find the angle between the pair of lines $\\frac{x}{2} = \\frac{y}{2} = \\frac{z}{1}$ and $\\frac{x-5}{4} = \\frac{y-2}{1} = \\frac{z-3}{8}$." },
      { tag: "Exam 3", qno: "Q28", marks: 2, text: "Find the angle between the pair of lines given by $\\frac{x-2}{2} = \\frac{y-1}{5} = \\frac{z+3}{-3}$ and $\\frac{x+2}{-1} = \\frac{y-4}{8} = \\frac{z-5}{4}$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q28", marks: 2, text: "Find the angle between the lines $\\frac{x}{2} = \\frac{y}{2} = \\frac{z}{1}$ and $\\frac{x-5}{4} = \\frac{y-2}{1} = \\frac{z-3}{8}$." },
      { tag: "Exam 2", qno: "Q28", marks: 2, text: "Find the angle between the pair of lines given by $\\vec{r} = 2\\vec{i} - 5\\vec{j} + \\vec{k} + \\lambda(3\\vec{i} + 2\\vec{j} + 6\\vec{k})$ and $\\vec{r} = 7\\vec{i} - 6\\vec{k} + \\mu(\\vec{i} + 2\\vec{j} + 2\\vec{k})$." },
      { tag: "Exam 3", qno: "Q28", marks: 2, text: "Find the distance between the lines $\\vec{r} = \\vec{i} + 2\\vec{j} - 4\\vec{k} + \\lambda(2\\vec{i} + 3\\vec{j} + 6\\vec{k})$ and $\\vec{r} = 3\\vec{i} + 3\\vec{j} - 5\\vec{k} + \\mu(2\\vec{i} + 3\\vec{j} + 6\\vec{k})$." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q28", marks: 2, text: "Find the angle between the pair of lines given by $\\vec{r} = (2\\vec{i} - 5\\vec{j} + \\vec{k}) + \\lambda(3\\vec{i} + 2\\vec{j} + 6\\vec{k})$ and $\\vec{r} = (7\\vec{i} - 6\\vec{k}) + \\mu(\\vec{i} + 2\\vec{j} + 2\\vec{k})$." },
      { tag: "Supplement", qno: "Q28", marks: 2, text: "Find the angle between the planes whose vector equations are $\\vec{r} \\cdot (2\\vec{i} + 2\\vec{j} - 3\\vec{k}) = 5$ and $\\vec{r} \\cdot (3\\vec{i} - 3\\vec{j} + 5\\vec{k}) = 3$." },
    ]),
  ],
];

// ---------------- Probability (2 Mark, Part B) ----------------
const PROBABILITY_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q29", marks: 2, text: "A die is thrown. If $E$ is the event 'the number appearing is a multiple of 3' and $F$ is the event 'the number appearing is even', then find whether $E$ and $F$ are independent." },
      { tag: "Paper 2", qno: "Q29", marks: 2, text: "A die is tossed thrice. Find the probability of getting an odd number at least once." },
      { tag: "Paper 3", qno: "Q29", marks: 2, text: "An urn contains 10 black and 5 white balls. Two balls are drawn from the urn one after the other without replacement. What is the probability that both drawn balls are black?" },
      { tag: "Paper 4", qno: "Q29", marks: 2, text: "A die is thrown twice and the sum of the numbers appearing is observed to be 6. What is the conditional probability that the number 4 has appeared at least once?" },
      { tag: "Paper 5", qno: "Q29", marks: 2, text: "If $A$ and $B$ are two events such that $P(A) = \\frac{1}{4}$, $P(B) = \\frac{1}{2}$ and $P(A \\cap B) = \\frac{1}{8}$, then find $P(\\text{not } A \\text{ and not } B)$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q29", marks: 2, text: "A family has two children. What is the probability that both the children are boys given that at least one of them is a boy?" },
      { tag: "Exam 2", qno: "Q29", marks: 2, text: "Two balls are drawn at random with replacement from a box containing 10 black and 8 red balls. Find the probability that the first ball is black and the second ball is red." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q29", marks: 2, text: "An urn contains 10 black and 5 white balls. Two balls are drawn from the urn one after the other without replacement. What is the probability that both drawn balls are black?" },
      { tag: "Exam 2", qno: "Q29", marks: 2, text: "Two cards are drawn at random and without replacement from a pack of 52 playing cards. Find the probability that both the cards are black." },
      { tag: "Exam 3", qno: "Q29", marks: 2, text: "An unbiased die is thrown twice. Let the event $A$ be 'odd number on the first throw' and $B$ be the event 'odd number on the second throw'. Check the independence of the events $A$ and $B$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q29", marks: 2, text: "Two coins are tossed once, where the events $E$ and $F$ are defined as $E$: Tail appears on one coin, $F$: One coin shows Head. Find $P(E/F)$." },
      { tag: "Exam 1", qno: "Q29", marks: 2, text: "Let $A$ and $B$ be two independent events such that $P(A) = 0.3$ and $P(B) = 0.6$. Find (a) $P(A \\text{ and not } B)$ (b) $P(\\text{neither } A \\text{ nor } B)$." },
      { tag: "Exam 2", qno: "Q29", marks: 2, text: "A fair die is rolled. Consider events $E = \\{1, 3, 5\\}$ and $F = \\{2, 3\\}$. Find $P(F/E)$." },
      { tag: "Exam 2", qno: "Q29", marks: 2, text: "One card is drawn at random from a well shuffled deck of 52 cards. If $E$ is the event 'the card drawn is a spade' and $F$ is the event 'the card drawn is an ace', then find whether $E$ and $F$ are independent." },
      { tag: "Exam 3", qno: "Q29", marks: 2, text: "Two cards are drawn at random without replacement from a pack of 52 playing cards. Find the probability that both the cards are black." },
      { tag: "Exam 3", qno: "Q29", marks: 2, text: "If $A$ and $B$ are two events such that $P(A) = \\frac{1}{2}$, $P(A \\cup B) = \\frac{3}{5}$ and $P(B) = K$, find $K$ if $A$ and $B$ are independent." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q29", marks: 2, text: "Find the probability distribution of the number of tails in the simultaneous tosses of three coins." },
      { tag: "Supplement", qno: "Q29", marks: 2, text: "A random variable $X$ has the following probability distribution: $X = 0, 1, 2, 3, 4$ with $P(X) = 0.1, k, 2k, 2k, k$. Find the value of $k$." },
    ]),
  ],
];

export const MATH_2M = {
  "Inverse Trigonometric Functions": INVERSE_TRIG_2M,
  "Determinants": DETERMINANTS_2M,
  "Continuity & Differentiability": CONTINUITY_2M,
  "Application of Derivatives": APP_DERIVATIVES_2M,
  "Integrals": INTEGRALS_2M,
  "Differential Equations": DIFF_EQUATIONS_2M,
  "Vector Algebra": VECTOR_ALGEBRA_2M,
  "Three Dimensional Geometry": THREE_D_GEOMETRY_2M,
  "Probability": PROBABILITY_2M,
};
