// Determinants — similar questions for the 6+4M Part E (Q47, 4 marks).
// Grouped by "similarity" as provided. Rendered by SimilarityModal via MathText.
export const DETERMINANTS_SIMILARITY = [
  {
    sim: "Similar 1",
    items: [
      {
        question: "If $A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix}$, show that $A^2 - 5A + 7I = O$, where $I$ is $2 \\times 2$ identity matrix and $O$ is $2 \\times 2$ zero matrix. Hence find $A^{-1}$.",
        difficulty: "medium",
        marks: "4 marks",
        imp: true,
        repetitions: [
          { year: "2027", exam: "Model 3" },
          { year: "2027", exam: "Model 5" },
          { year: "2026", exam: "Exam 2" },
          { year: "2025", exam: "Exam 1" },
          { year: "2024", exam: "Exam 1" },
          { year: "2024", exam: "Exam 2" },
          { year: "2024", exam: "Exam 3" },
        ],
        total: 7,
        answer: "Calculate A^2:\n$A^2 = A \\cdot A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix} \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 9-1 & 3+2 \\\\ -3-2 & -1+4 \\end{bmatrix} = \\begin{bmatrix} 8 & 5 \\\\ -5 & 3 \\end{bmatrix}$\n\nCalculate 5A:\n$5A = \\begin{bmatrix} 15 & 5 \\\\ -5 & 10 \\end{bmatrix}$\n\nCalculate 7I:\n$7I = \\begin{bmatrix} 7 & 0 \\\\ 0 & 7 \\end{bmatrix}$\n\nVerify the equation:\n$A^2 - 5A + 7I = \\begin{bmatrix} 8 & 5 \\\\ -5 & 3 \\end{bmatrix} - \\begin{bmatrix} 15 & 5 \\\\ -5 & 10 \\end{bmatrix} + \\begin{bmatrix} 7 & 0 \\\\ 0 & 7 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = O$.\nHence proved.\n\nFind A^{-1}:\nGiven $A^2 - 5A + 7I = O$. Multiply both sides by $A^{-1}$:\n$A - 5I + 7A^{-1} = O$\n$7A^{-1} = 5I - A$\n$7A^{-1} = \\begin{bmatrix} 5 & 0 \\\\ 0 & 5 \\end{bmatrix} - \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 2 & -1 \\\\ 1 & 3 \\end{bmatrix}$\n$A^{-1} = \\frac{1}{7} \\begin{bmatrix} 2 & -1 \\\\ 1 & 3 \\end{bmatrix}$",
      },
      {
        question: "If $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix}$ satisfies the equation $A^2 - 4A + I = O$, then find the inverse of $A$ using this equation, where $I$ is the identity matrix of order 2 and $O$ is the zero matrix of order 2.",
        difficulty: "medium",
        marks: "4 marks",
        imp: true,
        repetitions: [
          { year: "2027", exam: "Model 2" },
          { year: "2027", exam: "Model 4" },
          { year: "2026", exam: "Exam 1" },
        ],
        total: 3,
        answer: "Calculate A^2:\n$A^2 = A \\cdot A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix} \\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix} = \\begin{bmatrix} 4+3 & 6+6 \\\\ 2+2 & 3+4 \\end{bmatrix} = \\begin{bmatrix} 7 & 12 \\\\ 4 & 7 \\end{bmatrix}$\n\nCalculate 4A:\n$4A = \\begin{bmatrix} 8 & 12 \\\\ 4 & 8 \\end{bmatrix}$\n\nCalculate I:\n$I = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$\n\nVerify the equation:\n$A^2 - 4A + I = \\begin{bmatrix} 7 & 12 \\\\ 4 & 7 \\end{bmatrix} - \\begin{bmatrix} 8 & 12 \\\\ 4 & 8 \\end{bmatrix} + \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = O$.\nHence proved.\n\nFind A^{-1}:\nGiven $A^2 - 4A + I = O$. Multiply both sides by $A^{-1}$:\n$A - 4I + A^{-1} = O$\n$A^{-1} = 4I - A$\n$A^{-1} = \\begin{bmatrix} 4 & 0 \\\\ 0 & 4 \\end{bmatrix} - \\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix} = \\begin{bmatrix} 2 & -3 \\\\ -1 & 2 \\end{bmatrix}$",
      },
      {
        question: "If $A = \\begin{bmatrix} 5 & 6 \\\\ 4 & 3 \\end{bmatrix}$ satisfies the equation $A^2 - 8A - 9I = O$, where $I$ is $2 \\times 2$ identity matrix and $O$ is $2 \\times 2$ zero matrix. Using this equation, find $A^{-1}$.",
        difficulty: "easy",
        marks: "4 marks",
        repetitions: [{ year: "2027", exam: "Model 1" }],
        total: 1,
        answer: "Calculate A^2:\n$A^2 = A \\cdot A = \\begin{bmatrix} 5 & 6 \\\\ 4 & 3 \\end{bmatrix} \\begin{bmatrix} 5 & 6 \\\\ 4 & 3 \\end{bmatrix} = \\begin{bmatrix} 25+24 & 30+18 \\\\ 20+12 & 24+9 \\end{bmatrix} = \\begin{bmatrix} 49 & 48 \\\\ 32 & 33 \\end{bmatrix}$\n\nCalculate 8A:\n$8A = \\begin{bmatrix} 40 & 48 \\\\ 32 & 24 \\end{bmatrix}$\n\nCalculate 9I:\n$9I = \\begin{bmatrix} 9 & 0 \\\\ 0 & 9 \\end{bmatrix}$\n\nVerify the equation:\n$A^2 - 8A - 9I = \\begin{bmatrix} 49 & 48 \\\\ 32 & 33 \\end{bmatrix} - \\begin{bmatrix} 40 & 48 \\\\ 32 & 24 \\end{bmatrix} - \\begin{bmatrix} 9 & 0 \\\\ 0 & 9 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = O$.\nHence proved.\n\nFind A^{-1}:\nGiven $A^2 - 8A - 9I = O$. Multiply both sides by $A^{-1}$:\n$A - 8I - 9A^{-1} = O$\n$9A^{-1} = A - 8I$\n$9A^{-1} = \\begin{bmatrix} 5 & 6 \\\\ 4 & 3 \\end{bmatrix} - \\begin{bmatrix} 8 & 0 \\\\ 0 & 8 \\end{bmatrix} = \\begin{bmatrix} -3 & 6 \\\\ 4 & -5 \\end{bmatrix}$\n$A^{-1} = \\frac{1}{9} \\begin{bmatrix} -3 & 6 \\\\ 4 & -5 \\end{bmatrix}$",
      },
      {
        question: "If $A = \\begin{bmatrix} 3 & -2 \\\\ 4 & -2 \\end{bmatrix}$ and $I = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$, show that $A^2 - A + 2I = O$. Using this equation, find $A^{-1}$.",
        difficulty: "easy",
        marks: "4 marks",
        repetitions: [{ year: "2025", exam: "Exam 3" }],
        total: 1,
        answer: "Calculate A^2:\n$A^2 = A \\cdot A = \\begin{bmatrix} 3 & -2 \\\\ 4 & -2 \\end{bmatrix} \\begin{bmatrix} 3 & -2 \\\\ 4 & -2 \\end{bmatrix} = \\begin{bmatrix} 9-8 & -6+4 \\\\ 12-8 & -8+4 \\end{bmatrix} = \\begin{bmatrix} 1 & -2 \\\\ 4 & -4 \\end{bmatrix}$\n\nCalculate A:\n$A = \\begin{bmatrix} 3 & -2 \\\\ 4 & -2 \\end{bmatrix}$\n\nCalculate 2I:\n$2I = \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix}$\n\nVerify the equation:\n$A^2 - A + 2I = \\begin{bmatrix} 1 & -2 \\\\ 4 & -4 \\end{bmatrix} - \\begin{bmatrix} 3 & -2 \\\\ 4 & -2 \\end{bmatrix} + \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = O$.\nHence proved.\n\nFind A^{-1}:\nGiven $A^2 - A + 2I = O$. Multiply both sides by $A^{-1}$:\n$A - I + 2A^{-1} = O$\n$2A^{-1} = I - A$\n$2A^{-1} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} - \\begin{bmatrix} 3 & -2 \\\\ 4 & -2 \\end{bmatrix} = \\begin{bmatrix} -2 & 2 \\\\ -4 & 3 \\end{bmatrix}$\n$A^{-1} = \\frac{1}{2} \\begin{bmatrix} -2 & 2 \\\\ -4 & 3 \\end{bmatrix} = \\begin{bmatrix} -1 & 1 \\\\ -2 & 3/2 \\end{bmatrix}$",
      },
    ],
  },
  {
    sim: "Similar 2",
    items: [
      {
        question: "If $A = \\begin{bmatrix} 3 & 7 \\\\ 2 & 5 \\end{bmatrix}$ and $B = \\begin{bmatrix} 6 & 8 \\\\ 7 & 9 \\end{bmatrix}$, then verify that $(AB)^{-1} = B^{-1}A^{-1}$.",
        difficulty: "medium",
        marks: "4 marks",
        imp: true,
        repetitions: [{ year: "2025", exam: "Exam 2" }],
        total: 1,
        answer: "Calculate AB:\n$AB = \\begin{bmatrix} 3 & 7 \\\\ 2 & 5 \\end{bmatrix} \\begin{bmatrix} 6 & 8 \\\\ 7 & 9 \\end{bmatrix} = \\begin{bmatrix} 18+49 & 24+63 \\\\ 12+35 & 16+45 \\end{bmatrix} = \\begin{bmatrix} 67 & 87 \\\\ 47 & 61 \\end{bmatrix}$\n\nCalculate (AB)^{-1}:\n$|AB| = 67(61) - 87(47) = 4087 - 4089 = -2$\n$(AB)^{-1} = \\frac{1}{-2} \\begin{bmatrix} 61 & -87 \\\\ -47 & 67 \\end{bmatrix} = \\begin{bmatrix} -61/2 & 87/2 \\\\ 47/2 & -67/2 \\end{bmatrix}$\n\nCalculate B^{-1} and A^{-1}:\n$|A| = 15 - 14 = 1 \\Rightarrow A^{-1} = \\begin{bmatrix} 5 & -7 \\\\ -2 & 3 \\end{bmatrix}$\n$|B| = 54 - 56 = -2 \\Rightarrow B^{-1} = \\frac{1}{-2} \\begin{bmatrix} 9 & -8 \\\\ -7 & 6 \\end{bmatrix} = \\begin{bmatrix} -9/2 & 4 \\\\ 7/2 & -3 \\end{bmatrix}$\n\nCalculate B^{-1}A^{-1}:\n$B^{-1}A^{-1} = \\begin{bmatrix} -9/2 & 4 \\\\ 7/2 & -3 \\end{bmatrix} \\begin{bmatrix} 5 & -7 \\\\ -2 & 3 \\end{bmatrix} = \\begin{bmatrix} -45/2 - 8 & 63/2 + 12 \\\\ 35/2 + 6 & -49/2 - 9 \\end{bmatrix} = \\begin{bmatrix} -61/2 & 87/2 \\\\ 47/2 & -67/2 \\end{bmatrix}$\n\nConclusion: Since $(AB)^{-1} = B^{-1}A^{-1}$, it is verified.",
      },
    ],
  },
  {
    sim: "Similar 3",
    items: [
      {
        question: "Prove that $\\begin{vmatrix} a-b-c & 2a & 2a \\\\ 2b & b-c-a & 2b \\\\ 2c & 2c & c-a-b \\end{vmatrix} = (a+b+c)^3$.",
        difficulty: "easy",
        marks: "4 marks",
        repetitions: [
          { year: "2023", exam: "Main" },
          { year: "2023", exam: "Supplement" },
        ],
        total: 2,
        answer: "Let $\\Delta = \\begin{vmatrix} a-b-c & 2a & 2a \\\\ 2b & b-c-a & 2b \\\\ 2c & 2c & c-a-b \\end{vmatrix}$\nApply $R_1 \\to R_1 + R_2 + R_3$:\n$\\Delta = \\begin{vmatrix} a+b+c & a+b+c & a+b+c \\\\ 2b & b-c-a & 2b \\\\ 2c & 2c & c-a-b \\end{vmatrix}$\nTake $(a+b+c)$ common from $R_1$:\n$\\Delta = (a+b+c) \\begin{vmatrix} 1 & 1 & 1 \\\\ 2b & b-c-a & 2b \\\\ 2c & 2c & c-a-b \\end{vmatrix}$\nApply $C_2 \\to C_2 - C_1, C_3 \\to C_3 - C_1$:\n$\\Delta = (a+b+c) \\begin{vmatrix} 1 & 0 & 0 \\\\ 2b & -(a+b+c) & 0 \\\\ 2c & 0 & -(a+b+c) \\end{vmatrix}$\nExpanding along $R_1$:\n$\\Delta = (a+b+c) [1 \\cdot (-(a+b+c)) \\cdot (-(a+b+c))] = (a+b+c)^3$. Hence proved.",
      },
      {
        question: "Show that $\\begin{vmatrix} x+4 & 2x & 2x \\\\ 2x & x+4 & 2x \\\\ 2x & 2x & x+4 \\end{vmatrix} = (5x+4)(4-x)^2$.",
        difficulty: "easy",
        marks: "4 marks",
        repetitions: [
          { year: "2023", exam: "Main" },
          { year: "2023", exam: "Supplement" },
        ],
        total: 2,
        answer: "Let $\\Delta = \\begin{vmatrix} x+4 & 2x & 2x \\\\ 2x & x+4 & 2x \\\\ 2x & 2x & x+4 \\end{vmatrix}$\nApply $R_1 \\to R_1 + R_2 + R_3$:\n$\\Delta = \\begin{vmatrix} 5x+4 & 5x+4 & 5x+4 \\\\ 2x & x+4 & 2x \\\\ 2x & 2x & x+4 \\end{vmatrix}$\nTake $(5x+4)$ common from $R_1$:\n$\\Delta = (5x+4) \\begin{vmatrix} 1 & 1 & 1 \\\\ 2x & x+4 & 2x \\\\ 2x & 2x & x+4 \\end{vmatrix}$\nApply $C_2 \\to C_2 - C_1, C_3 \\to C_3 - C_1$:\n$\\Delta = (5x+4) \\begin{vmatrix} 1 & 0 & 0 \\\\ 2x & 4-x & 0 \\\\ 2x & 0 & 4-x \\end{vmatrix}$\nExpanding along $R_1$:\n$\\Delta = (5x+4) [1 \\cdot (4-x) \\cdot (4-x)] = (5x+4)(4-x)^2$. Hence proved.",
      },
    ],
  },
];
