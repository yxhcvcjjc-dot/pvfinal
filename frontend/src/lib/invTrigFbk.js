// Inverse Trigonometric Functions (Maths) — Fill in the Blanks. Rendered by
// <MathText/>. `options` is the word-bank; `solution` holds the answer.

const P = (year, label, tint, questions, options) => ({ year, label, tint, questions, ...(options ? { options } : {}) });
const M = (tag, text, answer) => ({ tag, qno: "", marks: 1, text, solution: [`Correct answer: ${answer}`] });

export const INVTRIG_MCQ = [
  [P("Fill in the Blanks", "1 Mark", "amber", [
    M("FBK 1", "The value of $\\tan^2(\\sec^{-1}2) + \\cot^2(\\csc^{-1}3)$ is ______.", "11"),
    M("FBK 2", "The value of $\\cos\\!\\left(\\sec^{-1}2 - \\sin^{-1}\\tfrac{\\sqrt{3}}{2}\\right)$ is ______.", "1"),
    M("FBK 3", "The value of $\\sin\\!\\left(\\tfrac{\\pi}{3} - \\sin^{-1}\\left(-\\tfrac{1}{2}\\right)\\right)$ is ______.", "1"),
    M("FBK 4", "The value of $\\sin(\\csc^{-1}2)$ is ______.", "1/2"),
    M("FBK 5", "The value of $2\\sin\\!\\left[\\tfrac{\\pi}{3} - \\tan^{-1}\\left(-\\tfrac{1}{\\sqrt{3}}\\right)\\right]$ is ______.", "2"),
  ], ["2", "1/2", "11", "1", "1"])],
];
