// Relations and Functions (Maths) — 1 Mark MCQs, grouped by year. Rendered by
// <MathText/>. Options embedded in question text (newlines preserved);
// `solution` holds the correct answer, revealed via the toggle.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });
const M = (tag, text, answer) => ({ tag, qno: "", marks: 1, text, solution: [`Correct answer: ${answer}`] });

export const RF_MCQ = [
  [P("2026-27", "Model Paper", "teal", [
    M("Model Paper 1", "Consider the following equivalence relation R on Z, the set of integers $R = \\{(a,b)\\,|\\,2 \\text{ divides } a - b\\}$. If $[x]$ represents the equivalence class of $x$, then [0] is the set\na) $\\{0,\\pm 2,\\pm 4,\\pm 6,\\pm 8,\\dots\\}$\nb) $\\{1,\\pm 3,\\pm 5,\\pm 7,\\pm 9,\\dots\\}$\nc) $\\{0,\\pm 1,\\pm 2,\\pm 3,\\pm 4,\\dots\\}$\nd) $\\{\\dots -4,-1,2,5,8,\\dots\\}$", "a) $\\{0,\\pm 2,\\pm 4,\\pm 6,\\pm 8,\\dots\\}$"),
    M("Model Paper 2", "If a relation R on the set {1, 2, 3} be defined by $R = \\{(1, 1), (2, 2)\\}$, then R is\na) symmetric but not transitive\nb) transitive but not symmetric\nc) symmetric and transitive\nd) neither symmetric nor transitive", "c) symmetric and transitive"),
    M("Model Paper 2", "Match Column I with Column II\nColumn I: a) Domain of $\\sec^{-1}x$\nb) Range of $\\csc^{-1}x$\nc) Range of $\\cot^{-1}x$\nColumn II: i) $R - (-1,1)$   ii) $(0, \\pi)$   iii) $[-\\pi/2, \\pi/2] - \\{0\\}$\nChoose the correct answer:\na) a-i, b-ii, c-iii\nb) a-iii, b-ii, c-i\nc) a-i, b-iii, c-ii\nd) a-iii, b-i, c-ii", "c) a-i, b-iii, c-ii"),
    M("Model Paper 2", "A function $f:R\\to R$ defined by $f(x)=2x+6$ is a bijective mapping then $f^{-1}(x)$ is given by\na) $\\frac{x}{2} -3$\nb) $2x + 6$\nc) $x - 3$\nd) $6x + 2$", "a) $\\frac{x}{2} -3$"),
    M("Model Paper 2", "The principal value branch of $\\sec^{-1}x$ is\na) $(-\\frac{\\pi}{2},\\frac{\\pi}{2}) - \\{0\\}$\nb) $(0,\\pi) - \\{\\frac{\\pi}{2}\\}$\nc) $[-\\frac{\\pi}{2},\\frac{\\pi}{2}] - \\{0\\}$\nd) $[0,\\pi] - \\{\\frac{\\pi}{2}\\}$", "d) $[0,\\pi] - \\{\\frac{\\pi}{2}\\}$"),
    M("Model Paper 3", "Let R be the relation in the set N given by $R = \\{(a,b) : a = b - 2,\\ b > 6\\}$. Choose the correct answer.\na) $(2, 4) \\in R$\nb) $(3, 8) \\in R$\nc) $(6, 8) \\in R$\nd) $(8, 6) \\in R$", "c) $(6, 8) \\in R$"),
    M("Model Paper 3", "The graph of the function $y = \\cos^{-1}x$ is the mirror image of the graph of the function $y = \\cos x$ along the line\na) $x=0$\nb) $y=x$\nc) $y=1$\nd) $y=0$", "b) $y=x$"),
    M("Model Paper 4", "Let $f: R\\to R$ be defined by $f(x) = x^{3}$, $x\\in R$. Then\na) f is one-one but not onto\nb) f is one-one and onto\nc) f is many-one onto\nd) f is neither one-one nor onto", "b) f is one-one and onto"),
    M("Model Paper 4", "Statement 1: $\\sin^{-1}\\left(\\sin \\frac{2\\pi}{3}\\right)$\nStatement 2: $\\sin^{-1}(\\sin\\theta) = \\theta$, if $\\theta\\in [-\\frac{\\pi}{2},\\frac{\\pi}{2}]$\na) Statement 1 is true and Statement 2 is false\nb) Statement 1 is true and Statement 2 is true, Statement 2 is correct explanation for Statement 1\nc) Statement 1 is false and Statement 2 is true\nd) Statement 1 is false and Statement 2 is false", "c) Statement 1 is false and Statement 2 is true"),
    M("Model Paper 4", "If $A = \\begin{bmatrix} 3 & x \\\\ y & 0 \\end{bmatrix}$ and $A = A^{T}$, then\na) $x = 0,\\ y = 3$\nb) $x + y = 3$\nc) $x = y$\nd) $x = -y$", "c) $x = y$"),
    M("Model Paper 5", "Let $f: R\\to R$ be defined by $f(x) = 2x + 6$ is a bijective mapping then $f^{-1}(x)$ is given by\na) $\\frac{x}{2} - 3$\nb) $2x + 6$\nc) $x - 3$\nd) $6x + 2$", "a) $\\frac{x}{2} - 3$"),
    M("Model Paper 5", "The principal value branch of $\\sec^{-1}x$ is\na) $(-\\frac{\\pi}{2},\\frac{\\pi}{2}) - \\{0\\}$\nb) $(0,\\pi) - \\{\\frac{\\pi}{2}\\}$\nc) $[-\\frac{\\pi}{2},\\frac{\\pi}{2}] - \\{0\\}$\nd) $[0,\\pi] - \\{\\frac{\\pi}{2}\\}$", "d) $[0,\\pi] - \\{\\frac{\\pi}{2}\\}$"),
  ])],
  [P("2026", "Exam", "blue", [
    M("Exam 1", "If a relation $R$ in the set $\\{1, 2, 3\\}$ be defined by $R = \\{(1, 1), (2, 2)\\}$ then $R$ is\na) symmetric but not transitive\nb) transitive but not symmetric\nc) symmetric and transitive\nd) neither symmetric nor transitive", "c) symmetric and transitive"),
    M("Exam 1", "The domain of $\\tan^{-1} x$ is\na) $\\left( -\\frac{\\pi}{2}, \\frac{\\pi}{2} \\right)$\nb) $(0, \\pi)$\nc) $[-1, 1]$\nd) $(-\\infty, \\infty)$", "d) $(-\\infty, \\infty)$"),
    M("Exam 2", "If a relation R on the set {1, 2, 3} is defined by $R = \\{(1, 1), (1, 2)\\}$, then R is\na) symmetric but not transitive\nb) transitive but not symmetric\nc) symmetric and transitive\nd) neither symmetric nor transitive", "b) transitive but not symmetric"),
  ])],
  [P("2025", "Exam", "sky", [
    M("Exam 1", "A relation $R$ in a set $A$ is called Reflexive relation if\na) $(a, a) \\in R$ for all $a \\in A$\nb) $(a, a) \\in R$ for atleast one $a \\in A$\nc) $(a, b) \\in R$ implies $(b, a) \\in R$\nd) $(a, b) \\in R$ and $(b, c) \\in R$ implies $(a, c) \\in R$", "a) $(a, a) \\in R$ for all $a \\in A$"),
    M("Exam 1", "The principal value of $\\sin^{-1}\\left(\\frac{1}{\\sqrt{2}}\\right)$ is\na) $\\frac{\\pi}{2}$\nb) $\\frac{\\pi}{3}$\nc) $\\frac{\\pi}{4}$\nd) $\\frac{\\pi}{6}$", "c) $\\frac{\\pi}{4}$"),
    M("Exam 2", "The relation $R$ in the set $\\{1, 2, 3\\}$ given by $R = \\{(2, 3)\\}$ is\na) Reflexive\nb) Symmetric\nc) Transitive\nd) Equivalence", "c) Transitive"),
    M("Exam 2", "The principal value branch of $\\cot^{-1}x$ is\na) $[0, \\pi]$\nb) $(0, \\pi)$\nc) $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$\nd) $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$", "b) $(0, \\pi)$"),
    M("Exam 3", "If $f : R \\to R$ and $g : R \\to R$ are given by $f(x) = \\sin x$ and $g(x) = x^2$, then the fog is\na) $x^2 \\sin x$\nb) $(\\sin x)^2$\nc) $\\sin(x^2)$\nd) $\\frac{\\sin x}{x^2}$", "c) $\\sin(x^2)$"),
  ])],
  [P("2024", "Exam", "indigo", [
    M("Exam 1", "The relation $R$ in the set $\\{1, 2, 3\\}$ given by $R = \\{(1, 1), (2, 2), (1, 2), (2, 3), (3, 3)\\}$ is\na) Reflexive\nb) Reflexive and Symmetric\nc) Reflexive and Transitive\nd) Symmetric and Transitive", "c) Reflexive and Transitive"),
    M("Exam 1", "If $f : Z \\to Z$, where $Z$ is the set of integers is defined as $f(x) = 3x$ then\na) $f$ is both one-one and onto\nb) $f$ is many one and onto\nc) $f$ is one-one but not onto\nd) $f$ is neither one-one nor onto", "c) $f$ is one-one but not onto"),
    M("Exam 1", "The principal value branch of $\\sin^{-1}x$ is\na) $\\left[ -\\frac{\\pi}{2}, \\frac{\\pi}{2} \\right]$\nb) $(0, \\pi)$\nc) $[0, \\pi]$\nd) $[0, 2\\pi]$", "a) $\\left[ -\\frac{\\pi}{2}, \\frac{\\pi}{2} \\right]$"),
  ])],
];
