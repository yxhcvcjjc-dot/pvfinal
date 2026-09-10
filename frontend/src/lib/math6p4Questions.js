// Mathematics — Part E (6 Mark Linear Programming & 4 Mark Determinants),
// grouped by year. Same shape as RF_5M_PAGES. Rendered by <MathText/>.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });

// ---------------- Linear Programming (6 Mark, Part E) ----------------
const LINEAR_PROGRAMMING = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model 1", qno: "Q46", marks: 6, text: "Solve the following graphically. Maximise $Z = 250x + 75y$ subject to the constraints $x + y \\le 60$, $25x + 5y \\le 500$, $x \\ge 0$, $y \\ge 0$." },
      { tag: "Model 2", qno: "Q46", marks: 6, text: "Solve the following graphically. Minimise $Z = 200x + 500y$ subject to the constraints $x + 2y \\ge 10$, $3x + 4y \\le 24$, $x \\ge 0$, $y \\ge 0$." },
      { tag: "Model 3", qno: "Q46", marks: 6, text: "Minimise and Maximise $Z = 3x + 9y$ subject to the constraints $x + 3y \\le 60$, $x + y \\ge 10$, $x \\le y$, $x \\ge 0$, $y \\ge 0$." },
      { tag: "Model 4", qno: "Q46", marks: 6, text: "Solve the following linear programming problem graphically: Maximise $Z = 3x + 2y$ subject to $x + 2y \\le 10$, $3x + y \\le 15$, $x, y \\ge 0$." },
      { tag: "Model 5", qno: "Q46", marks: 6, text: "Solve the following linear programming problem graphically: Maximise $Z = 4x + y$ subject to constraints $x + y \\le 50$, $3x + y \\le 90$, $x \\ge 0$, $y \\ge 0$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q46", marks: 6, text: "Maximise $Z = 250x + 75y$ subject to the constraints $x + y \\le 60$, $25x + 5y \\le 500$, $x \\ge 0$, $y \\ge 0$." },
      { tag: "Exam 2", qno: "Q46", marks: 6, text: "Minimise and maximise $Z = 4x + y$ subject to the constraints $x + y \\ge 50$, $3x + y \\le 90$, $x \\ge 0$, $y \\ge 0$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q46", marks: 6, text: "Minimise and Maximise $Z = 5x + 10y$ subject to $x + 2y \\le 120$, $x + y \\ge 60$, $x - 2y \\ge 0$, $x \\ge 0$, $y \\ge 0$." },
      { tag: "Exam 2", qno: "Q46", marks: 6, text: "Minimise and Maximise $Z = 5x + 10y$ subject to the constraints $x + 2y \\le 120$, $x + y \\ge 60$, $x - 2y \\ge 0$ and $x, y \\ge 0$ by graphical method." },
      { tag: "Exam 3", qno: "Q46", marks: 6, text: "Maximise $Z = 3x + 2y$, subject to the constraints $2x + y \\le 50$, $x + y \\le 40$, $x \\ge 0$, $y \\ge 0$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q51", marks: 6, text: "Solve the following Linear Programming Problem graphically: Maximise $Z = 4x + y$ subject to the constraints $x + y \\le 50$, $3x + y \\le 90$, $x \\ge 0$, $y \\ge 0$." },
      { tag: "Exam 2", qno: "Q51", marks: 6, text: "Maximise $Z = -3x + 4y$ subject to the constraints $x + 2y \\le 8$, $3x + 2y \\le 12$, $x \\ge 0$, $y \\ge 0$." },
      { tag: "Exam 3", qno: "Q51", marks: 6, text: "Minimise and maximise $Z = 3x + 9y$ subject to the constraints $x + 3y \\le 60$, $x + y \\ge 10$, $x \\le y$, $x \\ge 0$, $y \\ge 0$." },
    ]),
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q59", marks: 6, text: "Minimise $Z = -3x + 4y$ subject to constraints $x + 2y \\le 8$, $3x + 2y \\le 12$, $x \\ge 0$ and $y \\ge 0$ by graphical method." },
      { tag: "Supplement", qno: "Q59", marks: 6, text: "Maximise $Z = 3x + 2y$ subject to the constraints $x + 2y \\le 10$, $3x + y \\le 15$, $x \\ge 0$, $y \\ge 0$." },
    ]),
  ],
];

// ---------------- Determinants (4 Mark, Part E) ----------------
const DETERMINANTS_4M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model 1", qno: "Q47", marks: 4, text: "If $A = \\begin{bmatrix} 5 & 6 \\\\ 4 & 3 \\end{bmatrix}$ satisfies the equation $A^2 - 8A - 9I = O$, where $I$ is $2 \\times 2$ identity matrix and $O$ is $2 \\times 2$ zero matrix. Using this equation, find $A^{-1}$." },
      { tag: "Model 2", qno: "Q47", marks: 4, text: "If $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix}$ satisfies the equation $A^2 - 4A + I = O$, then find the inverse of $A$ using this equation, where $I$ is the identity matrix of order 2 and $O$ is the zero matrix of order 2." },
      { tag: "Model 3", qno: "Q47", marks: 4, text: "If $A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix}$, show that $A^2 - 5A + 7I = O$, where $I$ is $2 \\times 2$ identity matrix and $O$ is $2 \\times 2$ zero matrix, and hence find $A^{-1}$." },
      { tag: "Model 4", qno: "Q47", marks: 4, text: "Show that the matrix $A = \\begin{bmatrix} 2 & 1 \\\\ 3 & 2 \\end{bmatrix}$ satisfies the equation $A^2 - 4A + I = O$, where $I$ is $2 \\times 2$ identity matrix and $O$ is $2 \\times 2$ zero matrix. Using this equation, find $A^{-1}$." },
      { tag: "Model 5", qno: "Q47", marks: 4, text: "If $A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix}$, show that $A^2 - 5A + 7I = O$, where $I$ is $2 \\times 2$ identity matrix and $O$ is $2 \\times 2$ zero matrix, and hence find $A^{-1}$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q47", marks: 4, text: "Show that the matrix $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix}$ satisfies the equation $A^2 - 4A + I = O$, where $I$ is $2 \\times 2$ identity matrix and $O$ is $2 \\times 2$ zero matrix, and hence find $A^{-1}$." },
      { tag: "Exam 2", qno: "Q47", marks: 4, text: "Show that the matrix $A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix}$ satisfies the equation $A^2 - 5A + 7I = O$, where $I$ is an identity matrix of order $2 \\times 2$ and $O$ is the zero matrix of order $2 \\times 2$. Using this equation find $A^{-1}$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q47", marks: 4, text: "If $A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix}$, show that $A^2 - 5A + 7I = O$ and hence find $A^{-1}$." },
      { tag: "Exam 2", qno: "Q47", marks: 4, text: "If $A = \\begin{bmatrix} 3 & 7 \\\\ 2 & 5 \\end{bmatrix}$ and $B = \\begin{bmatrix} 6 & 8 \\\\ 7 & 9 \\end{bmatrix}$, then verify that $(AB)^{-1} = B^{-1}A^{-1}$." },
      { tag: "Exam 3", qno: "Q47", marks: 4, text: "If $A = \\begin{bmatrix} 3 & -2 \\\\ 4 & -2 \\end{bmatrix}$ and $I = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$, show that $A^2 - A + 2I = O$. Using this equation, find $A^{-1}$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q52", marks: 4, text: "Show that the matrix $A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix}$ satisfies the equation $A^2 - 5A + 7I = O$, where $I$ is $2 \\times 2$ identity matrix and $O$ is $2 \\times 2$ zero matrix. Using this equation find $A^{-1}$." },
      { tag: "Exam 2", qno: "Q52", marks: 4, text: "Show that the matrix $A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix}$ satisfies the equation $A^2 - 5A + 7I = O$, where $I$ is $2 \\times 2$ identity matrix and $O$ is $2 \\times 2$ zero matrix. Using the equation, find $A^{-1}$." },
      { tag: "Exam 3", qno: "Q52", marks: 4, text: "Show that the matrix $A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix}$ satisfies the equation $A^2 - 5A + 7I = O$, where $I$ is $2 \\times 2$ identity matrix and $O$ is $2 \\times 2$ zero matrix. Using this equation find $A^{-1}$." },
    ]),
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q60", marks: 4, text: "Prove that $\\begin{vmatrix} a-b-c & 2a & 2a \\\\ 2b & b-c-a & 2b \\\\ 2c & 2c & c-a-b \\end{vmatrix} = (a+b+c)^3$." },
      { tag: "Supplement", qno: "Q60", marks: 4, text: "Show that $\\begin{vmatrix} x+4 & 2x & 2x \\\\ 2x & x+4 & 2x \\\\ 2x & 2x & x+4 \\end{vmatrix} = (5x+4)(4-x)^2$." },
    ]),
  ],
];

export const MATH_6P4 = {
  "Linear Programming": LINEAR_PROGRAMMING,
  "Determinants": DETERMINANTS_4M,
};
