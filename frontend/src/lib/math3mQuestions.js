// Mathematics — Part C (3 Mark) questions, grouped by year.
// Same shape as RF_5M_PAGES. Rendered by <MathText/> (KaTeX).
// In JS strings backslashes are doubled: `\\tan`, `\\frac`, `\\sqrt`, `\\{`, etc.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });

// ---------------- Relations and Functions (3 Mark, Part C) ----------------
const RELATIONS_FUNCTIONS_3M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q30", marks: 3, text: "Let $L$ be the set of all lines in a plane and $R$ be the relation in $L$ defined as $R = \\{(L_1, L_2) : L_1$ is perpendicular to $L_2\\}$. Show that $R$ is symmetric but neither reflexive nor transitive." },
      { tag: "Paper 2", qno: "Q30", marks: 3, text: "Show that the relation $R$ on the set $A = \\{x \\in \\mathbb{Z} : 0 \\le x \\le 12\\}$, given by $R = \\{(a, b) : |a - b|$ is a multiple of $4\\}$ is an equivalence relation." },
      { tag: "Paper 3", qno: "Q30", marks: 3, text: "Check whether the relation $R$ in $\\mathbb{R}$ the set of real numbers defined as $R = \\{(a, b) : a \\le b^{3}\\}$ is reflexive, symmetric and transitive." },
      { tag: "Paper 4", qno: "Q30", marks: 3, text: "Determine whether the relation $R$ in the set $A = \\{1, 2, 3, 4, 5, 6\\}$ as $R = \\{(x, y) : y$ is divisible by $x\\}$ is reflexive, symmetric and transitive." },
      { tag: "Paper 5", qno: "Q30", marks: 3, text: "Show that the relation $R$ in the set $A = \\{1, 2, 3, 4, 5\\}$ given by $R = \\{(a, b) : |a - b|$ is even$\\}$, is an equivalence relation." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q30", marks: 3, text: "Let $T$ be the set of all triangles with $R$ a relation in $T$ given by $R = \\{(T_1, T_2) : T_1$ is congruent to $T_2\\}$. Show that $R$ is an equivalence relation." },
      { tag: "Exam 2", qno: "Q30", marks: 3, text: "Let $L$ be the set of all lines in the plane and $R$ is the relation on $L$ defined by $R = \\{(L_1, L_2) : L_1$ is parallel to $L_2\\}$. Show that $R$ is an equivalence relation." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q30", marks: 3, text: "Check whether the relation $R$ in $\\mathbb{R}$ defined by $R = \\{(a, b) : a \\le b^{3}\\}$ is reflexive, symmetric and transitive." },
      { tag: "Exam 2", qno: "Q30", marks: 3, text: "Show that the relation $R$ in the set $\\mathbb{Z}$ of integers given by $R = \\{(a, b) : 2$ divides $(a - b)\\}$ is an equivalence relation." },
      { tag: "Exam 3", qno: "Q30", marks: 3, text: "Determine whether the relation $R$ in the set $\\mathbb{N}$ of natural numbers defined as $R = \\{(x, y) : y = x + 5$ and $x < 4\\}$ is reflexive, symmetric and transitive." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q30", marks: 3, text: "Show that the relation $R$ in the set of real numbers $\\mathbb{R}$ defined as $R = \\{(a, b) : a \\le b\\}$ is reflexive and transitive but not symmetric." },
      { tag: "Exam 2", qno: "Q30", marks: 3, text: "Let $L$ be the set of all lines in a plane and $R$ be the relation in $L$, defined as $R = \\{(L_1, L_2) : L_1$ is perpendicular to $L_2\\}$. Show that $R$ is symmetric but neither reflexive nor transitive." },
      { tag: "Exam 3", qno: "Q30", marks: 3, text: "Determine whether the relation $R$ in the set $A = \\{1, 2, 3, 4, 5, 6\\}$ defined as $R = \\{(x, y) : y$ is divisible by $x\\}$ is reflexive, symmetric and transitive." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q30", marks: 3, text: "Let $T$ be the set of all triangles in a plane with $R$ a relation in $T$ given by $R = \\{(T_1, T_2) : T_1$ is congruent to $T_2\\}$. Show that $R$ is an equivalence relation." },
      { tag: "Supplement", qno: "Q30", marks: 3, text: "Show that the relation $R$ in the set $A = \\{1, 2, 3, 4, 5\\}$ given by $R = \\{(a, b) : |a - b|$ is even$\\}$ is an equivalence relation." },
    ]),
  ],
];

// ---------------- Inverse Trigonometric Functions (3 Mark, Part C) ----------------
const INVERSE_TRIG_3M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q31", marks: 3, text: "Find the simplest form of $\\tan^{-1}\\left(\\dfrac{\\sqrt{1 + x^{2}} - 1}{x}\\right)$, $x \\neq 0$." },
      { tag: "Paper 2", qno: "Q31", marks: 3, text: "Prove that $\\cos^{-1}\\dfrac{4}{5} + \\cos^{-1}\\dfrac{12}{13} = \\cos^{-1}\\dfrac{33}{65}$." },
      { tag: "Paper 3", qno: "Q31", marks: 3, text: "Write $\\tan^{-1}\\left(\\dfrac{\\cos x - \\sin x}{\\cos x + \\sin x}\\right)$, $-\\dfrac{\\pi}{4} < x < \\dfrac{3\\pi}{4}$ in simplest form." },
      { tag: "Paper 4", qno: "Q31", marks: 3, text: "Solve: $\\tan^{-1}\\left(\\dfrac{1 - x}{1 + x}\\right) = \\dfrac{1}{2}\\tan^{-1} x$, $(x > 0)$." },
      { tag: "Paper 5", qno: "Q31", marks: 3, text: "Prove that $\\cos^{-1}\\dfrac{4}{5} + \\cos^{-1}\\dfrac{12}{13} = \\cos^{-1}\\dfrac{33}{65}$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q31", marks: 3, text: "Prove that $3\\cos^{-1} x = \\cos^{-1}(4x^{3} - 3x)$, $x \\in \\left[\\dfrac{1}{2}, 1\\right]$." },
      { tag: "Exam 2", qno: "Q31", marks: 3, text: "Prove that $\\cos^{-1}\\left(\\dfrac{4}{5}\\right) + \\cos^{-1}\\left(\\dfrac{12}{13}\\right) = \\cos^{-1}\\left(\\dfrac{33}{65}\\right)$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q31", marks: 3, text: "Prove that $\\tan^{-1}\\left(\\dfrac{63}{16}\\right) = \\sin^{-1}\\left(\\dfrac{5}{13}\\right) + \\cos^{-1}\\left(\\dfrac{3}{5}\\right)$." },
      { tag: "Exam 2", qno: "Q31", marks: 3, text: "Prove that $\\cos^{-1}\\left(\\dfrac{4}{5}\\right) - \\cos^{-1}\\left(\\dfrac{12}{13}\\right) = \\cos^{-1}\\left(\\dfrac{63}{65}\\right)$." },
      { tag: "Exam 3", qno: "Q31", marks: 3, text: "Prove that $\\sin^{-1}\\left(\\dfrac{5}{13}\\right) + \\cos^{-1}\\left(\\dfrac{3}{5}\\right) = \\tan^{-1}\\left(\\dfrac{63}{16}\\right)$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 2", qno: "Q33", marks: 3, text: "Write the simplest form of $\\tan^{-1}\\left(\\dfrac{\\cos x - \\sin x}{\\cos x + \\sin x}\\right)$, $-\\dfrac{3\\pi}{4} < x < \\dfrac{\\pi}{2}$." },
      { tag: "Exam 3", qno: "Q33", marks: 3, text: "Prove that $\\cos^{-1}\\left(\\dfrac{4}{5}\\right) + \\cos^{-1}\\left(\\dfrac{12}{13}\\right) = \\cos^{-1}\\left(\\dfrac{33}{65}\\right)$." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q31", marks: 3, text: "Prove that $2\\tan^{-1}\\left(\\dfrac{1}{2}\\right) + \\tan^{-1}\\left(\\dfrac{1}{7}\\right) = \\tan^{-1}\\left(\\dfrac{31}{17}\\right)$." },
      { tag: "Supplement", qno: "Q31", marks: 3, text: "Solve for $x$: $\\tan^{-1}(2x) + \\tan^{-1}(3x) = \\dfrac{\\pi}{4}$, $x > 0$." },
    ]),
  ],
];

// ---------------- Matrices (3 Mark, Part C) ----------------
const MATRICES_3M = [
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q32", marks: 3, text: "Express the matrix $\\begin{bmatrix} 1 & 5 \\\\ -1 & 2 \\end{bmatrix}$ as the sum of a symmetric and a skew-symmetric matrix." },
      { tag: "Exam 2", qno: "Q32", marks: 3, text: "Express the matrix $\\begin{bmatrix} 3 & 5 \\\\ 1 & -1 \\end{bmatrix}$ as the sum of a symmetric and skew symmetric matrix." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q32", marks: 3, text: "Express $\\begin{bmatrix} 1 & 5 \\\\ -1 & 2 \\end{bmatrix}$ as the sum of a symmetric and a skew-symmetric matrix." },
      { tag: "Exam 2", qno: "Q32", marks: 3, text: "If $A$ and $B$ are symmetric matrices, prove that $AB - BA$ is a skew symmetric matrix." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q32", marks: 3, text: "Express $A = \\begin{bmatrix} 1 & 5 \\\\ 6 & 7 \\end{bmatrix}$ as the sum of a symmetric and a skew symmetric matrix." },
    ]),
  ],
];

// ---------------- Continuity & Differentiability (3 Mark, Part C) ----------------
const CONTINUITY_3M = [
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q33", marks: 3, text: "Differentiate $x^{\\sin x}$, $x > 0$ with respect to $x$." },
      { tag: "Exam 2", qno: "Q33", marks: 3, text: "If $x = a(\\theta - \\sin\\theta)$ and $y = a(1 - \\cos\\theta)$, then find $\\frac{dy}{dx}$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q33", marks: 3, text: "Find $\\frac{dy}{dx}$ if $x = a\\left(\\cos t + \\log\\left(\\tan\\frac{t}{2}\\right)\\right)$ and $y = a\\sin t$." },
      { tag: "Exam 2", qno: "Q33", marks: 3, text: "Find $\\frac{dy}{dx}$ if $x = a(\\theta - \\sin\\theta)$, $y = a(1 + \\cos\\theta)$." },
      { tag: "Exam 3", qno: "Q33", marks: 3, text: "If $y^x = x^y$, then find $\\frac{dy}{dx}$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q33", marks: 3, text: "Differentiate $(\\log x)^{\\cos x}$, $x > 0$ with respect to $x$." },
      { tag: "Exam 1", qno: "Q33", marks: 3, text: "Find $\\frac{dy}{dx}$ if $x = a(\\theta + \\sin\\theta)$, $y = a(1 - \\cos\\theta)$." },
    ]),
  ],
];

// ---------------- Application of Derivatives (3 Mark, Part C) ----------------
const APP_DERIVATIVES_3M = [
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q34", marks: 3, text: "Find the absolute maximum and minimum values of a function $f$ given by $f(x) = 2x^3 - 15x^2 + 36x + 1$ on the interval $[1, 5]$." },
      { tag: "Exam 2", qno: "Q34", marks: 3, text: "Find two numbers whose sum is 24 and whose product is as large as possible." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q34", marks: 3, text: "Find the two positive numbers $x$ and $y$ such that $x + y = 60$ and $xy^3$ is maximum." },
      { tag: "Exam 2", qno: "Q34", marks: 3, text: "A man of height 2 metres walks at a uniform speed of 5 km/hr away from a lamp post which is 6 metres high. Find the rate at which the length of his shadow increases." },
      { tag: "Exam 3", qno: "Q34", marks: 3, text: "The volume of a cube is increasing at a rate of 9 cm$^3$/sec. How fast is the surface area increasing when the length of an edge is 10 cm?" },
      { tag: "Exam 3", qno: "Q34", marks: 3, text: "Find the absolute maximum value of $2x^3 - 24x + 107$ in the interval $[1, 3]$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q34", marks: 3, text: "Find two positive numbers $x$ and $y$ such that $x + y = 60$ and $xy^3$ is maximum." },
    ]),
  ],
];

// ---------------- Integrals (3 Mark, Part C) ----------------
const INTEGRALS_3M = [
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q35", marks: 3, text: "Find $\\int \\frac{1}{(x+1)(x+2)}\\, dx$." },
      { tag: "Exam 2", qno: "Q35", marks: 3, text: "Find $\\int \\frac{x}{(x-1)(x-2)}\\, dx$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q35", marks: 3, text: "Evaluate $\\int \\frac{2x}{x^2 + 3x + 2}\\, dx$." },
      { tag: "Exam 2", qno: "Q35", marks: 3, text: "Evaluate $\\int \\frac{3x-2}{(x+1)^2(x+3)}\\, dx$." },
      { tag: "Exam 3", qno: "Q35", marks: 3, text: "Find $\\int \\frac{\\cos x}{(1-\\sin x)(2-\\sin x)}\\, dx$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q35", marks: 3, text: "Find $\\int x \\tan^{-1} x\\, dx$." },
    ]),
  ],
];

// ---------------- Vector Algebra (3 Mark, Part C) ----------------
const VECTOR_ALGEBRA_3M = [
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q36", marks: 3, text: "Find the area of a triangle having the points $A(1, 1, 1)$, $B(1, 2, 3)$ and $C(2, 3, 1)$ as its vertices." },
      { tag: "Exam 2", qno: "Q36", marks: 3, text: "Show that the position vector of the point $P$ which divides the line joining the points $A$ and $B$ having position vectors $\\vec{a}$ and $\\vec{b}$ internally in the ratio $m:n$ is $\\frac{m\\vec{b} + n\\vec{a}}{m+n}$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q36", marks: 3, text: "Find the area of triangle $ABC$ where the position vectors of $A$, $B$, $C$ are $\\vec{i} - \\vec{j} + 2\\vec{k}$, $2\\vec{j} + \\vec{k}$, $\\vec{j} + 3\\vec{k}$ respectively." },
      { tag: "Exam 2", qno: "Q36", marks: 3, text: "Three vectors $\\vec{a}$, $\\vec{b}$ and $\\vec{c}$ satisfy the condition $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$. Evaluate the quantity $\\mu = \\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}$, if $|\\vec{a}| = 3$, $|\\vec{b}| = 4$ and $|\\vec{c}| = 5$." },
      { tag: "Exam 3", qno: "Q36", marks: 3, text: "Let $\\vec{a}$, $\\vec{b}$ and $\\vec{c}$ be three vectors such that $|\\vec{a}| = 3$, $|\\vec{b}| = 4$, $|\\vec{c}| = 5$ and each one of them being perpendicular to the sum of the other two, find $|\\vec{a} + \\vec{b} + \\vec{c}|$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q36", marks: 3, text: "If $\\vec{a}$, $\\vec{b}$ and $\\vec{c}$ are three vectors such that $|\\vec{a}| = 3$, $|\\vec{b}| = 4$, $|\\vec{c}| = 5$ and $\\vec{a}$ is perpendicular to $(\\vec{b}+\\vec{c})$, $\\vec{b}$ is perpendicular to $(\\vec{c}+\\vec{a})$ and $\\vec{c}$ is perpendicular to $(\\vec{a}+\\vec{b})$, then find $|\\vec{a}+\\vec{b}+\\vec{c}|$." },
      { tag: "Exam 1", qno: "Q36", marks: 3, text: "Find the area of a triangle having the points $A(1, 1, 2)$, $B(2, 3, 5)$ and $C(1, 5, 5)$ as its vertices." },
    ]),
  ],
];

// ---------------- Three Dimensional Geometry (3 Mark, Part C) ----------------
const THREE_D_GEOMETRY_3M = [
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q37", marks: 3, text: "Derive the equation of a line in space passing through a given point $A$ and parallel to a given vector." },
      { tag: "Exam 2", qno: "Q37", marks: 3, text: "Find the distance between the lines $\\vec{r} = \\hat{i} + 2\\hat{j} - 4\\hat{k} + \\lambda(2\\hat{i} + 3\\hat{j} + 6\\hat{k})$ and $\\vec{r} = 3\\hat{i} + 3\\hat{j} - 5\\hat{k} + \\mu(2\\hat{i} + 3\\hat{j} + 6\\hat{k})$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q37", marks: 3, text: "Derive the equation of a line in space through a given point and parallel to a given vector $\\vec{b}$ in the vector form." },
      { tag: "Exam 2", qno: "Q37", marks: 3, text: "Find the shortest distance between the lines $\\vec{r} = \\hat{i} + 2\\hat{j} + \\hat{k} + \\lambda(\\hat{i} - \\hat{j} + \\hat{k})$ and $\\vec{r} = 2\\hat{i} - \\hat{j} - \\hat{k} + \\mu(2\\hat{i} + \\hat{j} + 2\\hat{k})$." },
      { tag: "Exam 3", qno: "Q37", marks: 3, text: "Find the shortest distance between the lines $\\vec{r} = (\\hat{i} + 2\\hat{j} + \\hat{k}) + \\lambda(\\hat{i} - \\hat{j} + \\hat{k})$ and $\\vec{r} = (2\\hat{i} - \\hat{j} - \\hat{k}) + \\mu(2\\hat{i} + \\hat{j} + 2\\hat{k})$." },
    ]),
  ],
];

// ---------------- Probability (3 Mark, Part C) ----------------
const PROBABILITY_3M = [
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 2", qno: "Q38", marks: 3, text: "Bag I contains 3 red and 4 black balls while another Bag II contains 5 red and 6 black balls. One ball is drawn at random from one of the bags and it is found to be red. Find the probability that it was drawn from Bag II." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q38", marks: 3, text: "In two identical boxes, box I contains 2 gold coins, while box II contains one gold and one silver coin. A person chooses a box at random and takes out a coin. If the coin is of gold, what is the probability that the other coin in the box is also gold?" },
      { tag: "Exam 2", qno: "Q38", marks: 3, text: "Given three identical boxes I, II and III, each containing two coins. In box I both coins are gold coins, in box II both are silver coins, and in box III there is one gold and one silver coin. A person chooses a box at random and takes out a coin. If the coin is of gold, what is the probability that the other coin in the box is also gold?" },
      { tag: "Exam 3", qno: "Q38", marks: 3, text: "In answering a question on a multiple choice test, a student either knows the answer or guesses. Let $\\frac{3}{4}$ be the probability that he knows the answer and $\\frac{1}{4}$ be the probability that he guesses. Assuming that a student who guesses at the answer will be correct with probability $\\frac{1}{4}$, what is the probability that the student knows the answer given that he answered it correctly?" },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q38", marks: 3, text: "In answering a question on a multiple choice test, a student either knows the answer or guesses. Let $\\frac{3}{4}$ be the probability that he knows the answer and $\\frac{1}{4}$ be the probability that he guesses. Assuming that a student who guesses at the answer will be correct with probability $\\frac{1}{4}$, what is the probability that the student knows the answer given that he answered it correctly?" },
    ]),
  ],
];

export const MATH_3M = {
  "Relations and Functions": RELATIONS_FUNCTIONS_3M,
  "Inverse Trigonometric Functions": INVERSE_TRIG_3M,
  "Matrices": MATRICES_3M,
  "Continuity & Differentiability": CONTINUITY_3M,
  "Application of Derivatives": APP_DERIVATIVES_3M,
  "Integrals": INTEGRALS_3M,
  "Vector Algebra": VECTOR_ALGEBRA_3M,
  "Three Dimensional Geometry": THREE_D_GEOMETRY_3M,
  "Probability": PROBABILITY_3M,
};
