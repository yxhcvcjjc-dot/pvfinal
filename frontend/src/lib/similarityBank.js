// Similarity bank — questions grouped by "similarity" (s1, s2, s3 …) shown when
// the "Similarity" button is tapped on the chapter questions page.
// Keyed by `${chapterName}:${mark}` (both "&"/"and" spellings registered).
// Each group: { sim, items: [{ question, difficulty, marks, repetitions, total, answer }] }.

import { DETERMINANTS_SIMILARITY } from "@/lib/determinantsSimilarity";
import { LINEAR_PROGRAMMING_SIMILARITY } from "@/lib/linearProgrammingSimilarity";

const ECF_NUMERIC = [
  {
    sim: "Similar 1",
    items: [
      {
        question:
          "A positively charged spherical conductor of radius $0.1\\text{ m}$ produces an electric field of $1.8 \\times 10^{3}\\text{ N C}^{-1}$ at a point P distant $0.2\\text{ m}$ from its centre. Calculate the magnitude of the charge present on the spherical conductor. Also find the new charge on the charged spherical conductor if $5 \\times 10^{10}$ more electrons are removed from it.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 1" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} E = \\frac{kQ}{r^2}. \\text{ Given } E = 1.8 \\times 10^{3}, r = 0.2\\text{ m}. \\\\ 1.8 \\times 10^{3} = \\frac{9 \\times 10^{9} \\times Q}{(0.2)^2} \\Rightarrow Q = \\frac{1.8 \\times 10^{3} \\times 0.04}{9 \\times 10^{9}} = 8 \\times 10^{-9}\\text{ C} = \\mathbf{8\\text{ nC}}. \\\\ \\text{Step 2:} \\text{ Charge removed } = ne = 5 \\times 10^{10} \\times 1.6 \\times 10^{-19} = 8 \\times 10^{-9}\\text{ C}. \\\\ \\text{New charge } = 8\\text{ nC} + 8\\text{ nC} = \\mathbf{16\\text{ nC}}.$$",
      },
      {
        question:
          "A uniformly charged spherical shell of radius $10\\text{ cm}$ has a surface charge density of $16\\ \\mu\\text{C/m}^2$. Find the electric field due to the shell at a distance of (a) $20\\text{ cm}$ from the centre of the shell, (b) $5\\text{ cm}$ from the centre of the shell.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2025", exam: "Exam 1" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} \\text{ Total charge } Q = \\sigma \\times 4\\pi R^2 = 16 \\times 10^{-6} \\times 4\\pi (0.1)^2 = 2.01 \\times 10^{-6}\\text{ C}. \\\\ \\text{Step 2 (a):} \\text{ At } r = 0.2\\text{ m}, E = \\frac{kQ}{r^2} = \\frac{9 \\times 10^{9} \\times 2.01 \\times 10^{-6}}{(0.2)^2} = \\mathbf{4.52 \\times 10^{5}\\text{ N/C}}. \\\\ \\text{Step 3 (b):} \\text{ At } r = 0.05\\text{ m} < R, \\text{ electric field inside shell } E = \\mathbf{0}.$$",
      },
      {
        question:
          "Two point charges $2\\ \\mu\\text{C}$ and $3\\ \\mu\\text{C}$ are placed at the two corners A and B of an equilateral triangle ABC of side $0.2\\text{ m}$. Calculate the magnitude of resultant electric field at the corner C of that triangle.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2025", exam: "Exam 3" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} E_A = \\frac{9 \\times 10^{9} \\times 2 \\times 10^{-6}}{(0.2)^2} = 4.5 \\times 10^{5}\\text{ N/C}; \\quad E_B = \\frac{9 \\times 10^{9} \\times 3 \\times 10^{-6}}{(0.2)^2} = 6.75 \\times 10^{5}\\text{ N/C}. \\\\ \\text{Step 2:} \\text{ Angle between } E_A \\text{ and } E_B = 60^\\circ. \\\\ E_{net} = \\sqrt{E_A^2 + E_B^2 + 2E_AE_B\\cos 60^\\circ} = \\sqrt{(4.5)^2 + (6.75)^2 + 2(4.5)(6.75)(0.5)} \\times 10^{5} = \\mathbf{9.96 \\times 10^{5}\\text{ N/C}}.$$",
      },
      {
        question:
          "Two point charges $+15\\ \\mu\\text{C}$ and $-10\\ \\mu\\text{C}$ are separated by a distance of $20\\text{ cm}$ in air. Calculate the electric field at the mid point of the line joining two charges. If a point charge of $20\\text{ mC}$ is placed at that mid point, what is the magnitude of electric force experienced by it?",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2024", exam: "Exam 1" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} \\text{ Distance } r = 0.1\\text{ m}. \\quad E_{net} = E_1 + E_2 = \\frac{k}{r^2}(|q_1| + |q_2|) = \\frac{9 \\times 10^{9}}{(0.1)^2} \\times (15 + 10) \\times 10^{-6} = \\mathbf{2.25 \\times 10^{7}\\text{ N/C}}. \\\\ \\text{Step 2:} F = qE = 20 \\times 10^{-3} \\times 2.25 \\times 10^{7} = \\mathbf{4.5 \\times 10^{5}\\text{ N}}.$$",
      },
    ],
  },
  {
    sim: "Similar 2",
    items: [
      {
        question:
          "The electrostatic force on a small sphere of charge $0.4\\ \\mu\\text{C}$ due to another small sphere of charge $-0.8\\ \\mu\\text{C}$ in air separated by a distance d is $0.2\\text{ N}$. (a) Find the distance between the two spheres. (b) What is the magnitude and nature of force on the second sphere due to the first?",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2024", exam: "Exam 2" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} F = \\frac{k q_1 q_2}{d^2} \\Rightarrow 0.2 = \\frac{9 \\times 10^{9} \\times (0.4 \\times 10^{-6}) \\times (0.8 \\times 10^{-6})}{d^2}. \\\\ d^2 = 0.0144 \\Rightarrow d = \\mathbf{0.12\\text{ m}}. \\\\ \\text{Step 2:} \\text{ Force on second sphere is } \\mathbf{0.2\\text{ N}}, \\text{ attractive in nature (unlike charges).}$$",
      },
      {
        question:
          "The electrostatic force on a metal sphere of charge $0.5\\ \\mu\\text{C}$ due to another identical metal sphere of charge $-1.2\\ \\mu\\text{C}$ is $45 \\times 10^{-3}\\text{ N}$. Find the distance between two spheres. Also find the force between the same two spheres when they are brought into contact and then placed at their initial position.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2024", exam: "Exam 3" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} F = \\frac{k q_1 q_2}{d^2} \\Rightarrow 45 \\times 10^{-3} = \\frac{9 \\times 10^{9} \\times (0.5 \\times 10^{-6}) \\times (1.2 \\times 10^{-6})}{d^2}. \\\\ d^2 = 0.12 \\Rightarrow d = \\mathbf{0.346\\text{ m}}. \\\\ \\text{Step 2:} \\text{ After contact, } q = \\frac{0.5 + (-1.2)}{2} = -0.35\\ \\mu\\text{C}. \\\\ F = \\frac{9 \\times 10^{9} \\times (0.35 \\times 10^{-6})^2}{0.12} = \\mathbf{9.19 \\times 10^{-3}\\text{ N}} \\text{ (repulsive)}.$$",
      },
    ],
  },
  {
    sim: "Similar 3",
    items: [
      {
        question:
          "A pendulum bob of mass $80\\text{ mg}$ and carrying charge $2 \\times 10^{-8}\\text{ C}$ is rest at a certain angle with the vertical in a horizontal uniform electric field of $20,000\\text{ V m}^{-1}$. Find the tension in the thread of the pendulum and the angle it makes with the vertical.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 4" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} \\text{ Electric force } F_e = qE = 2 \\times 10^{-8} \\times 20,000 = 4 \\times 10^{-4}\\text{ N}. \\text{ Weight } mg = 80 \\times 10^{-6} \\times 9.8 = 7.84 \\times 10^{-4}\\text{ N}. \\\\ \\text{Step 2:} \\tan \\theta = \\frac{F_e}{mg} = \\frac{4 \\times 10^{-4}}{7.84 \\times 10^{-4}} = 0.51 \\Rightarrow \\theta = \\mathbf{27^\\circ}. \\\\ \\text{Step 3:} T = \\sqrt{(mg)^2 + F_e^2} = \\sqrt{(7.84 \\times 10^{-4})^2 + (4 \\times 10^{-4})^2} = \\mathbf{8.8 \\times 10^{-4}\\text{ N}}.$$",
      },
    ],
  },
];

const ECF_5M_THEORY = [
  {
    sim: "Similar 1",
    items: [
      {
        question:
          "State Gauss's law in electrostatics. Using it, derive the expression for the electric field at a point due to an infinitely long, straight, uniformly charged wire.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [
          { year: "2027", exam: "Model Paper 5" },
          { year: "2026", exam: "Exam 1" },
          { year: "2026", exam: "Exam 2" },
          { year: "2023", exam: "Main Exam" },
          { year: "2023", exam: "Supplement (2nd Set)" },
        ],
        total: 5,
        answer:
          "Gauss's law states that the total electric flux through a closed surface is $\\frac{1}{\\varepsilon_0}$ times the charge enclosed ($\\Phi = \\frac{q}{\\varepsilon_0}$). For an infinitely long wire with linear charge density $\\lambda$, consider a cylindrical Gaussian surface of radius $r$ and length $l$. By symmetry, $E$ is radial and constant over the curved surface. Flux $= E \\times 2\\pi r l$. Charge enclosed $= \\lambda l$. So, $E(2\\pi r l) = \\frac{\\lambda l}{\\varepsilon_0}$, which gives $E = \\frac{\\lambda}{2\\pi \\varepsilon_0 r}$.",
      },
      {
        question:
          "Derive an expression for the electric field at a point on the axial line (axis) of an electric dipole.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [
          { year: "2027", exam: "Model Paper 2" },
          { year: "2027", exam: "Model Paper 3" },
        ],
        total: 2,
        answer:
          "Consider a dipole with charges $+q$ and $-q$ separated by $2a$. Let P be a point on the axial line at a distance $r$ from the center. The electric field due to $+q$ is $E_+ = \\frac{kq}{(r-a)^2}$ (away from $+q$). The field due to $-q$ is $E_- = \\frac{kq}{(r+a)^2}$ (towards $-q$). Net field $E = E_+ - E_- = kq\\left[\\frac{1}{(r-a)^2} - \\frac{1}{(r+a)^2}\\right]$. Solving this gives $E = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{2pr}{(r^2 - a^2)^2}$, where $p = 2aq$ is the dipole moment. For short dipoles ($r \\gg a$), $E = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{2p}{r^3}$ along the dipole axis.",
      },
      {
        question:
          "Derive the expression for the electric field at a point on the equatorial line of an electric dipole.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2023", exam: "Supplement" }],
        total: 1,
        answer:
          "For a point P on the equatorial line at distance $r$, the fields $E_+$ (due to $+q$) and $E_-$ (due to $-q$) have equal magnitudes. Their vertical components cancel out, and horizontal components add up. Net field $E = -2E_+\\cos\\theta$. Substituting $E_+ = \\frac{kq}{r^2 + a^2}$ and $\\cos\\theta = \\frac{a}{\\sqrt{r^2 + a^2}}$, we get $E = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{p}{(r^2 + a^2)^{3/2}}$. For short dipoles ($r \\gg a$), $E = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{p}{r^3}$ directed opposite to the dipole moment.",
      },
      {
        question:
          "Deduce an expression for electric field at a point outside a thin uniformly-charged spherical shell using Gauss's law.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2025", exam: "Exam 2" }],
        total: 1,
        answer:
          "Consider a thin spherical shell of radius $R$ with total charge $Q$. To find the field at a point P outside (distance $r > R$), draw a concentric spherical Gaussian surface of radius $r$. By symmetry, $E$ is radial and constant over the surface. Flux $= E \\times 4\\pi r^2$. Enclosed charge $= Q$. Applying Gauss's law: $E(4\\pi r^2) = \\frac{Q}{\\varepsilon_0}$. Therefore, $E = \\frac{Q}{4\\pi\\varepsilon_0 r^2}$. This shows that for points outside the shell, the field is exactly as if the entire charge were concentrated at the center.",
      },
    ],
  },
];

const ECP_5M_THEORY = [
  {
    sim: "Similar 1",
    items: [
      {
        question:
          "Derive the expression for electric potential at a point due to a point charge / Define electrostatic potential. Obtain an expression for electrostatic potential at a point due to an isolated point charge.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [
          { year: "2027", exam: "Model Paper 1" },
          { year: "2025", exam: "Exam 1" },
          { year: "2025", exam: "Exam 3" },
          { year: "2024", exam: "Exam 2" },
        ],
        total: 4,
        answer:
          "Electrostatic potential $V$ at a distance $r$ from a point charge $q$ is the work done per unit positive charge to bring it from infinity.\n\n$V = -\\int E \\cdot dr = -\\int \\left( \\frac{kq}{r^2} \\right) dr = \\frac{kq}{r} = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{q}{r}$",
      },
      {
        question:
          "Derive the expression for the capacitance of a parallel plate capacitor with air between the plates. Also write the general expression for the capacitance of a parallel plate capacitor with a dielectric medium.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [
          { year: "2027", exam: "Model Paper 4" },
          { year: "2024", exam: "Exam 1 (b)" },
        ],
        total: 2,
        answer:
          "For air:\n\n$E = \\frac{\\sigma}{\\varepsilon_0} = \\frac{Q}{A\\varepsilon_0}$\n\n$V = E \\cdot d = \\frac{Qd}{A\\varepsilon_0}$\n\n$C = \\frac{Q}{V} = \\frac{\\varepsilon_0 A}{d}$\n\nWith dielectric:\n\n$C = \\frac{K\\varepsilon_0 A}{d}$",
      },
      {
        question: "What are polar and non-polar molecules?",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2024", exam: "Exam 1 (a)" }],
        total: 1,
        answer:
          "Polar molecules have a permanent electric dipole moment due to the asymmetric distribution of charges (e.g., $H_2O$). Non-polar molecules have a zero net dipole moment as the centers of positive and negative charges coincide (e.g., $CO_2$, $CH_4$).",
      },
      {
        question:
          "Derive an expression for equivalent capacitance of two capacitors connected in series.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2024", exam: "Exam 3 (a)" }],
        total: 1,
        answer:
          "In series, the charge $Q$ is the same. Voltage $V = V_1 + V_2$.\n\n$\\frac{Q}{C_{eq}} = \\frac{Q}{C_1} + \\frac{Q}{C_2}$. Therefore,\n\n$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2}$",
      },
      {
        question: "Write any two properties of the equipotential surface.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2024", exam: "Exam 3 (b)" }],
        total: 1,
        answer:
          "1. No two equipotential surfaces can intersect each other.\n2. The electric field lines are always perpendicular to the equipotential surfaces.",
      },
    ],
  },
];

const ECP_2M = [
  {
    sim: "Similar 1",
    items: [
      {
        question:
          "Mention two properties of equipotential surfaces. / Write two properties of equipotential surfaces.",
        difficulty: "easy",
        marks: "2 marks",
        imp: true,
        repetitions: [
          { year: "2023", exam: "Supplement 1" },
          { year: "2023", exam: "Supplement 2" },
          { year: "2027", exam: "Model Paper 4" },
        ],
        total: 3,
        answer: "",
      },
      {
        question:
          "On what factors does the capacitance of a parallel plate capacitor depend? / Name any two factors on which the capacitance of a parallel plate capacitor depends.",
        difficulty: "easy",
        marks: "2 marks",
        imp: true,
        repetitions: [
          { year: "2023", exam: "Main Exam" },
          { year: "2026", exam: "Exam 2" },
        ],
        total: 2,
        answer: "",
      },
      {
        question:
          "Define electric potential energy of a system of charges. What happens to the potential energy of a system of two unlike charges when the distance between them is increased (assume there is no external electric field)?",
        difficulty: "easy",
        marks: "2 marks",
        imp: true,
        repetitions: [{ year: "2025", exam: "Exam 1" }],
        total: 1,
        answer: "",
      },
      {
        question:
          "The electrostatic potential energy of a system of two like charges is positive. Explain.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 1" }],
        total: 1,
        answer: "",
      },
      {
        question: "What are polar molecules? Give an example.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 2" }],
        total: 1,
        answer: "",
      },
      {
        question:
          "What is meant by equipotential surface? Draw equipotential surfaces for an electric dipole.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 3" }],
        total: 1,
        answer: "",
      },
      {
        question:
          "The electrostatic potential energy of a system of two like charges decreases with increase in the distance of separation. Explain the statement using suitable expression.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 5" }],
        total: 1,
        answer: "",
      },
    ],
  },
  {
    sim: "Similar 2",
    items: [
      {
        question:
          "Two point charges $5 \\times 10^{-6}\\text{ C}$ and $-3 \\times 10^{-6}\\text{ C}$ are located 10 cm apart. Find the point between the two charges where potential is zero.",
        difficulty: "easy",
        marks: "2 marks",
        imp: true,
        repetitions: [{ year: "2024", exam: "Exam 1" }],
        total: 1,
        answer: "",
      },
      {
        question:
          "Two capacitors $3\\mu\\text{F}$ and $6\\mu\\text{F}$ are connected in series. Find the equivalent capacitance of the combination.",
        difficulty: "easy",
        marks: "2 marks",
        imp: true,
        repetitions: [{ year: "2024", exam: "Exam 2" }],
        total: 1,
        answer: "",
      },
      {
        question:
          "The potential at a point is given by $V = ax - bx^3$ where a and b are constants. Find the value of electric field at that point.",
        difficulty: "easy",
        marks: "2 marks",
        imp: true,
        repetitions: [{ year: "2024", exam: "Exam 3" }],
        total: 1,
        answer: "",
      },
    ],
  },
];

const ECP_3M = [
  {
    sim: "Similar 1",
    items: [
      {
        question:
          "What is a capacitor? Mention two factors on which the capacitance of a parallel plate capacitor depends.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2027", exam: "Model Paper 1" },
          { year: "2026", exam: "Exam 1" },
        ],
        total: 2,
        answer: "",
      },
      {
        question:
          "Mention any three important results regarding the electrostatics of conductors.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2027", exam: "Model Paper 2" },
          { year: "2026", exam: "Exam 2" },
        ],
        total: 2,
        answer: "",
      },
      {
        question:
          "a) What is meant by an equipotential surface? b) Draw equipotential surfaces for uniform electric field and a point charge.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [{ year: "2025", exam: "Exam 2" }],
        total: 1,
        answer: "",
      },
    ],
  },
  {
    sim: "Similar 2",
    items: [
      {
        question:
          "Derive the expression for the equivalent capacitance of two capacitors connected in parallel. / Obtain an expression for effective capacitance of two capacitors connected in parallel.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2025", exam: "Exam 1" },
          { year: "2025", exam: "Exam 3" },
        ],
        total: 2,
        answer: "",
      },
      {
        question:
          "Derive an expression for the potential energy of a system of two point charges in the absence of external electric field. / Obtain an expression for potential energy of system of two charges in the absence of electric field.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2027", exam: "Model Paper 4" },
          { year: "2024", exam: "Exam 3" },
        ],
        total: 2,
        answer: "",
      },
      {
        question: "Derive the relation between electric field and electric potential.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2027", exam: "Model Paper 5" },
          { year: "2024", exam: "Exam 2" },
        ],
        total: 2,
        answer: "",
      },
      {
        question:
          "Deduce $E = -\\frac{dV}{dx}$, where the terms have usual meaning.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [{ year: "2024", exam: "Exam 1" }],
        total: 1,
        answer: "",
      },
      {
        question:
          "Obtain the expression for equivalent capacitance of two capacitors connected in series.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 3" }],
        total: 1,
        answer: "",
      },
    ],
  },
];

const ECP_NUMERIC = [
  {
    sim: "Similar 1",
    items: [
      {
        question:
          "Two capacitors of capacitances $3\\text{ pF}$ and $7\\text{ pF}$ are connected in series and the combination is connected to a source of emf $10\\text{ V}$. Calculate the effective capacitance of the combination. Also find the potential difference across each capacitor.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2023", exam: "Supplement 1" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} \\text{ For series, } \\frac{1}{C_{eq}} = \\frac{1}{3} + \\frac{1}{7} = \\frac{10}{21}\\text{ pF. So } C_{eq} = 2.1\\text{ pF}. \\\\ \\text{Step 2:} \\text{ Charge on each capacitor } Q = C_{eq} \\times V = 2.1\\text{ pF} \\times 10\\text{ V} = 21\\text{ pC}. \\\\ \\text{Step 3:} V_1 = \\frac{Q}{C_1} = \\frac{21}{3} = \\mathbf{7\\text{ V}}; \\quad V_2 = \\frac{Q}{C_2} = \\frac{21}{7} = \\mathbf{3\\text{ V}}.$$",
      },
      {
        question:
          "Three capacitors of capacitances $2\\text{ pF}$, $3\\text{ pF}$ and $4\\text{ pF}$ are connected in parallel. (a) What is the total capacitance of the combination? (b) Determine the charge on each capacitor, if the combination is connected to a $100\\text{ V}$ supply.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2023", exam: "Supplement 2" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} C_{total} = C_1 + C_2 + C_3 = 2 + 3 + 4 = \\mathbf{9\\text{ pF}}. \\\\ \\text{Step 2:} Q = CV. \\quad Q_1 = 2 \\times 100 = \\mathbf{200\\text{ pC}}; \\quad Q_2 = 3 \\times 100 = \\mathbf{300\\text{ pC}}; \\quad Q_3 = 4 \\times 100 = \\mathbf{400\\text{ pC}}.$$",
      },
      {
        question:
          "A network of four $9\\ \\mu\\text{F}$ capacitors is connected to a $300\\text{ V}$ supply as shown in figure. Determine a) equivalent capacitance of the network and b) the charge on each capacitor.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2025", exam: "Exam 2" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} \\text{ (Assuming the standard diagram: two parallel pairs in series) } \\\\ \\text{Parallel pair 1 } = 9 + 9 = 18\\ \\mu\\text{F}; \\quad \\text{Parallel pair 2 } = 9 + 9 = 18\\ \\mu\\text{F}. \\\\ \\text{Step 2:} \\text{ Series: } \\frac{1}{C_{eq}} = \\frac{1}{18} + \\frac{1}{18} = \\frac{2}{18}. \\quad C_{eq} = \\mathbf{9\\ \\mu\\text{F}}. \\\\ \\text{Step 3:} \\text{ Total } Q = C_{eq} \\times V = 9\\ \\mu\\text{F} \\times 300\\text{ V} = 2700\\ \\mu\\text{C}. \\\\ \\text{Step 4:} \\text{ Voltage across each branch } = 150\\text{ V}. \\text{ Charge on each individual capacitor } = 9\\ \\mu\\text{F} \\times 150\\text{ V} = \\mathbf{1350\\ \\mu\\text{C}}.$$",
      },
      {
        question:
          "Two capacitors of capacitances $3\\ \\mu\\text{F}$ and $6\\ \\mu\\text{F}$ are connected in series and the resulting combination is connected across a $300\\text{ V}$ battery. Calculate i) the effective capacitance of the combination; ii) the charge collected by each capacitor and iii) the energy stored in the $3\\ \\mu\\text{F}$ capacitor.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 5" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} \\frac{1}{C_{eq}} = \\frac{1}{3} + \\frac{1}{6} = \\frac{3}{6} \\Rightarrow C_{eq} = \\mathbf{2\\ \\mu\\text{F}}. \\\\ \\text{Step 2:} Q = C_{eq} \\times V = 2\\ \\mu\\text{F} \\times 300\\text{ V} = \\mathbf{600\\ \\mu\\text{C}}. \\\\ \\text{Step 3:} V \\text{ across } 3\\ \\mu\\text{F} = \\frac{600}{3} = 200\\text{ V}. \\text{ Energy } U = \\frac{1}{2} C V^2 = \\frac{1}{2} \\times 3\\ \\mu\\text{F} \\times (200)^2 = \\mathbf{0.06\\text{ J}} \\text{ (or } 60\\text{ mJ)}.$$",
      },
      {
        question:
          "A parallel plate capacitor has air between the plates. The area of the plates is $4\\text{ cm}^2$ and the distance between them is $2\\text{ mm}$. (a) Calculate the capacitance of the capacitor. (b) If this capacitor is connected to a $100\\text{ V}$ supply, find the magnitude of the charge on each plate and the energy stored in the capacitor. (Given: $\\varepsilon_0 = 8.854 \\times 10^{-12}\\text{ F m}^{-1}$)",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 2" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} A = 4 \\times 10^{-4}\\text{ m}^2; \\quad d = 2 \\times 10^{-3}\\text{ m}. \\\\ C = \\frac{\\varepsilon_0 A}{d} = \\frac{(8.854 \\times 10^{-12} \\times 4 \\times 10^{-4})}{2 \\times 10^{-3}} = \\mathbf{1.77 \\times 10^{-12}\\text{ F}} \\text{ (or } 1.77\\text{ pF)}. \\\\ \\text{Step 2:} Q = CV = 1.77 \\times 10^{-12} \\times 100 = \\mathbf{1.77 \\times 10^{-10}\\text{ C}}. \\\\ \\text{Step 3:} U = \\frac{1}{2} C V^2 = \\frac{1}{2} \\times 1.77 \\times 10^{-12} \\times (100)^2 = \\mathbf{8.85 \\times 10^{-9}\\text{ J}}.$$",
      },
    ],
  },
  {
    sim: "Similar 2",
    items: [
      {
        question:
          "Three point charges $+4\\ \\mu\\text{C}$, $-6\\ \\mu\\text{C}$ and $+8\\ \\mu\\text{C}$ are placed at the corners A, B and C respectively of a square ABCD of side $10\\text{ cm}$. Calculate the work done to transfer a point charge $+3\\ \\mu\\text{C}$ from the corner D to the centre O of the square. (Given $\\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^{9}\\text{ Nm}^2/\\text{C}^2$)",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2026", exam: "Exam 2" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} \\text{ Distance } AO = BO = CO = \\frac{0.1\\sqrt{2}}{2} = 0.05\\sqrt{2}\\text{ m}. \\\\ \\text{Step 2:} \\text{ Potential at D } (V_D): k \\times \\frac{(4 - 6 + 8)}{0.1} = 9 \\times 10^{9} \\times 10^{-6} \\times 60 = 5.4 \\times 10^{5}\\text{ V}. \\\\ \\text{Step 3:} \\text{ Potential at O } (V_O): k \\times \\frac{(4 - 6 + 8)}{0.05\\sqrt{2}} = 9 \\times 10^{9} \\times 10^{-6} \\times 84.85 = 7.64 \\times 10^{5}\\text{ V}. \\\\ \\text{Step 4:} \\text{ Work done } = q \\times (V_O - V_D) = 3 \\times 10^{-6} \\times (7.64 \\times 10^{5} - 5.4 \\times 10^{5}) = \\mathbf{0.67\\text{ J}}.$$",
      },
      {
        question:
          "Three point charges $3\\text{ nC}$, $-2\\text{ nC}$ and $4\\text{ nC}$ are placed at the vertices A, B and C of an equilateral triangle ABC of sides $0.2\\text{ m}$. Calculate the potential energy of the system. Also calculate the amount of work required to place the same charges at the vertices of an equilateral triangle of side $0.1\\text{ m}$. (Take: $\\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^{9}\\text{ Nm}^2\\text{C}^{-2}$)",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 3" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} U = \\frac{k}{r} \\times (q_1q_2 + q_2q_3 + q_3q_1). \\text{ Sum } = (-6 - 8 + 12) = -2\\text{ nC}^2. \\\\ \\text{Step 2:} U_i (r=0.2\\text{m}) = \\frac{9 \\times 10^{9}}{0.2} \\times (-2 \\times 10^{-18}) = \\mathbf{-9 \\times 10^{-8}\\text{ J}}. \\\\ \\text{Step 3:} U_f (r=0.1\\text{m}) = \\frac{9 \\times 10^{9}}{0.1} \\times (-2 \\times 10^{-18}) = \\mathbf{-18 \\times 10^{-8}\\text{ J}}. \\\\ \\text{Step 4:} \\text{ Work required } = U_f - U_i = -18 \\times 10^{-8} - (-9 \\times 10^{-8}) = \\mathbf{-9 \\times 10^{-8}\\text{ J}}.$$",
      },
    ],
  },
  {
    sim: "Similar 3",
    items: [
      {
        question:
          "Charges $2\\ \\mu\\text{C}$, $4\\ \\mu\\text{C}$ and $6\\ \\mu\\text{C}$ are placed at the three corners A, B and C respectively of a square ABCD of side $X\\text{ metre}$. Find the charge that must be placed at the fourth corner so that the total potential at the centre of the square is zero.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2023", exam: "Main Exam" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} \\text{ Distance from center to each corner } = \\frac{X}{\\sqrt{2}}\\text{ m}. \\\\ \\text{Step 2:} \\text{ Potential at center } V = \\frac{k}{X/\\sqrt{2}} \\times (Q_A + Q_B + Q_C + Q_D) = 0. \\\\ \\text{Step 3:} \\text{ Therefore, } (2 + 4 + 6) + Q_D = 0 \\Rightarrow \\mathbf{Q_D = -12\\ \\mu\\text{C}}.$$",
      },
      {
        question:
          "Two charges $5 \\times 10^{-8}\\text{ C}$ and $-3 \\times 10^{-8}\\text{ C}$ are located $16\\text{ cm}$ apart in vacuum. Find the positions along the line passing through the two charges where the electric potential is zero.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2026", exam: "Exam 1" }],
        total: 1,
        answer:
          "$$\\text{Step 1:} \\text{ Point between charges: Let } x \\text{ be distance from } 5 \\times 10^{-8}. \\quad k \\times \\left( \\frac{5}{x} - \\frac{3}{0.16 - x} \\right) = 0. \\\\ \\text{Step 2:} 5(0.16 - x) = 3x \\Rightarrow 0.8 - 5x = 3x \\Rightarrow 8x = 0.8 \\Rightarrow x = \\mathbf{0.1\\text{ m (10 cm)}} \\text{ from } 5\\ \\mu\\text{C}. \\\\ \\text{Step 3:} \\text{ Point outside (to the right of } -3\\ \\mu\\text{C): } \\frac{5}{x} = \\frac{3}{x - 0.16} \\Rightarrow 5x - 0.8 = 3x \\Rightarrow 2x = 0.8 \\Rightarrow \\mathbf{x = 0.4\\text{ m (40 cm)}} \\text{ from } 5\\ \\mu\\text{C}.$$",
      },
    ],
  },
];

const ECF_2M = [
  {
    sim: "Similar 1",
    items: [
      {
        question: "State and explain Gauss's law in electrostatics.",
        difficulty: "easy",
        marks: "2 marks",
        imp: true,
        repetitions: [
          { year: "2024", exam: "Exam 1" },
          { year: "2024", exam: "Exam 2" },
          { year: "2024", exam: "Exam 3" },
        ],
        total: 3,
        answer:
          "It states that the total electric flux through a closed surface is equal to $\\frac{1}{\\varepsilon_0}$ times the net charge enclosed by that surface.\n\nFormula: $\\Phi = \\frac{Q_{\\text{enclosed}}}{\\varepsilon_0}$.",
      },
      {
        question: "Write/Give any two properties of electric field lines.",
        difficulty: "easy",
        marks: "2 marks",
        imp: true,
        repetitions: [
          { year: "2025", exam: "Exam 2" },
          { year: "2026", exam: "Exam 1" },
        ],
        total: 2,
        answer:
          "1. Electric field lines start from positive charges and terminate on negative charges.\n2. Two electric field lines never intersect each other.",
      },
      {
        question: "State and explain Coulomb's law in electrostatics.",
        difficulty: "easy",
        marks: "2 marks",
        imp: true,
        repetitions: [{ year: "2025", exam: "Exam 3" }],
        total: 1,
        answer:
          "The electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them.\n\nFormula: $F = \\frac{k q_1 q_2}{r^2}$.",
      },
      {
        question: "What is electrostatic shielding? Mention one use of it.",
        difficulty: "easy",
        marks: "2 marks",
        imp: true,
        repetitions: [{ year: "2026", exam: "Exam 1" }],
        total: 1,
        answer:
          "Electrostatic shielding is the phenomenon where the electric field inside a hollow conductor is zero, so no external electric field can penetrate it.\n\nOne use is to protect sensitive electronic circuits and instruments from external electric fields.",
      },
      {
        question: "Define electric field at a point. What is meant by 'source charge'?",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 1" }],
        total: 1,
        answer:
          "Electric field at a point is defined as the force experienced per unit positive test charge placed at that point ($E = \\frac{F}{q_0}$).\nA 'source charge' is the charge which is producing the electric field in the surrounding space.",
      },
      {
        question: "Sketch the electric field lines for (a) a positive point charge and (b) an electric dipole.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 2" }],
        total: 1,
        answer:
          "(a) For a positive point charge, the field lines point radially outward from the charge.\n(b) For an electric dipole, field lines emanate from the positive charge and terminate on the negative charge, forming a curved pattern.",
      },
      {
        question: "Mention two factors on which electric field at a point due to a point charge depends.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 5" }],
        total: 1,
        answer:
          "1. Magnitude of the source charge ($q$).\n2. Distance ($r$) from the source charge to the point.\n\n(Formula: $E = \\frac{kq}{r^2}$)",
      },
      {
        question: "Define electric flux through an area element. Mention its SI unit.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 3" }],
        total: 1,
        answer:
          "Electric flux is the scalar product of the electric field vector and the area vector ($\\Delta \\Phi = \\mathbf{E} \\cdot \\Delta \\mathbf{S}$).\nIts SI unit is $\\text{N m}^2/\\text{C}$ (or $\\text{V m}$).",
      },
      {
        question: "Define the term 'linear charge density'. Mention its SI unit.",
        difficulty: "easy",
        marks: "2 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 4" }],
        total: 1,
        answer:
          "Linear charge density is defined as the amount of electric charge per unit length ($\\lambda = \\frac{q}{l}$).\nIts SI unit is Coulomb per meter ($\\text{C/m}$).",
      },
    ],
  },
  {
    sim: "Similar 2",
    items: [
      {
        question: "Two identical point charges are separated by a distance 0.2 m in air repel each other with a force 9 × 10³ N. Find the magnitude of each charge.",
        difficulty: "easy",
        marks: "2 marks",
        imp: true,
        repetitions: [{ year: "2026", exam: "Exam 2" }],
        total: 1,
        answer:
          "$F = \\frac{kq^2}{r^2}$.\n$9 \\times 10^3 = \\frac{9 \\times 10^9 \\cdot q^2}{(0.2)^2}$.\n$q^2 = \\frac{9 \\times 10^3 \\cdot 0.04}{9 \\times 10^9} = 4 \\times 10^{-8}$.\n$q = 2 \\times 10^{-4} \\, \\text{C}$.",
      },
      {
        question: "Find the force on a point charge 2 × 10⁻⁶ C, placed at a point in a uniform electric field of 0.8 NC⁻¹.",
        difficulty: "easy",
        marks: "2 marks",
        imp: true,
        repetitions: [{ year: "2025", exam: "Exam 2" }],
        total: 1,
        answer:
          "$F = qE$.\n$F = (2 \\times 10^{-6} \\, \\text{C}) \\times (0.8 \\, \\text{NC}^{-1})$.\n$F = 1.6 \\times 10^{-6} \\, \\text{N}$.",
      },
    ],
  },
];

const ECF_3M = [
  {
    sim: "Similar 1",
    items: [
      {
        question: "Mention/Write any three properties of electric field lines.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2023", exam: "Main Exam" },
          { year: "2023", exam: "Supplement" },
          { year: "2024", exam: "Exam 1" },
          { year: "2025", exam: "Exam 1" },
          { year: "2025", exam: "Exam 3" },
          { year: "2027", exam: "Model Paper 5" },
        ],
        total: 6,
        answer:
          "1. Field lines start from positive charges and end on negative charges.\n2. Two field lines never intersect each other.\n3. The tangent to a field line at a point gives the direction of the electric field at that point, and the density of lines represents the strength of the field.",
      },
      {
        question: "Mention any three basic properties of electric charges.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2024", exam: "Exam 2" },
          { year: "2024", exam: "Exam 3" },
        ],
        total: 2,
        answer:
          "1. Electric charge is quantized ($q = ne$, where $n$ is an integer).\n2. Charge is conserved (it can neither be created nor destroyed, only transferred).\n3. Charge is additive (the total charge of a system is the algebraic sum of individual charges).",
      },
      {
        question: "Derive an expression for torque acting on an electric dipole placed in a uniform electric field.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2026", exam: "Exam 2" },
          { year: "2027", exam: "Model Paper 1" },
        ],
        total: 2,
        answer:
          "When a dipole (charges $+q$ and $-q$ separated by distance $2a$) is placed at an angle $\\theta$ to a uniform field $E$, the two forces ($+qE$ and $-qE$) form a couple.\n\nTorque $\\tau = \\text{Force} \\times \\text{perpendicular distance} = qE \\times (2a \\sin\\theta) = (q \\times 2a) E \\sin\\theta = pE \\sin\\theta$.\n\nIn vector form: $\\tau = \\mathbf{p} \\times \\mathbf{E}$.",
      },
      {
        question: "Give Coulomb's law in vector form and explain the terms. Define SI unit of charge using Coulomb's law.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [
          { year: "2026", exam: "Exam 1" },
          { year: "2027", exam: "Model Paper 2" },
        ],
        total: 2,
        answer:
          "Vector form: $\\mathbf{F}_{12} = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{q_1 q_2}{r^2} \\hat{\\mathbf{r}}_{12}$.\n\nTerms: $q_1, q_2$ are charges, $r$ is distance, $\\hat{\\mathbf{r}}$ is unit vector, $\\varepsilon_0$ is permittivity of free space.\n\nSI unit of charge is Coulomb (C). Defined as the charge that repels an identical charge placed 1 meter away in vacuum with a force of $9 \\times 10^9 \\, \\text{N}$.",
      },
      {
        question: "State and explain Coulomb's law of electrostatics.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [{ year: "2023", exam: "Supplement (Set 2)" }],
        total: 1,
        answer:
          "The electrostatic force between two stationary point charges is directly proportional to the product of their magnitudes and inversely proportional to the square of the distance between them.\n\nFormula: $F = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{q_1 q_2}{r^2}$.\n\nThe force acts along the line joining the two charges.",
      },
      {
        question: "Define linear charge density. Mention the expression for electric field at a point due to an infinitely long uniformly charged wire and explain the terms.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 3" }],
        total: 1,
        answer:
          "Linear charge density ($\\lambda$) is the charge per unit length ($\\lambda = \\frac{q}{l}$).\n\nExpression for E-field of an infinite line charge: $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$.\n\nTerms: $\\lambda$ is linear charge density, $\\varepsilon_0$ is permittivity of free space, and $r$ is the perpendicular distance from the wire to the point.",
      },
      {
        question: "Show that the total electric flux through the surface of a sphere enclosing a point charge q at its centre is q/ε₀.",
        difficulty: "easy",
        marks: "3 marks",
        repetitions: [{ year: "2027", exam: "Model Paper 4" }],
        total: 1,
        answer:
          "The electric field at any point on the sphere is $E = \\frac{q}{4\\pi\\varepsilon_0 r^2}$, pointing radially outward.\n\nTotal flux $\\Phi = \\int \\mathbf{E} \\cdot d\\mathbf{S} = E \\times 4\\pi r^2$ (since $E$ is parallel to $d\\mathbf{S}$).\n\n$\\Phi = \\left[ \\frac{q}{4\\pi\\varepsilon_0 r^2} \\right] \\times 4\\pi r^2 = \\frac{q}{\\varepsilon_0}$.",
      },
    ],
  },
];

const RF_5M_SIMILARITY = [
  {
    sim: "Similar 1",
    items: [
      {
        question: "Let $f: N \\to Y$ be a function defined as $f(x) = 4x + 3$, where $Y = \\{y \\in N : y = 4x + 3 \\text{ for some } x \\in N\\}$. Show that $f$ is invertible. Find the inverse of $f$. (Note: In 2026 Exam 1 and 2027 Model 2, the domain and codomain are $R \\to R$ instead of $N \\to Y$).",
        difficulty: "medium",
        marks: "5 marks",
        imp: true,
        repetitions: [
          { year: "2023", exam: "Main" },
          { year: "2023", exam: "Supplement" },
          { year: "2024", exam: "Exam 1" },
          { year: "2024", exam: "Exam 2" },
          { year: "2024", exam: "Exam 3" },
          { year: "2026", exam: "Exam 1" },
          { year: "2027", exam: "Model 2" },
        ],
        total: 7,
        answer: "One-One (Injective):\nLet $x_1, x_2 \\in N$ (or $R$) such that $f(x_1) = f(x_2)$.\n$\\Rightarrow 4x_1 + 3 = 4x_2 + 3 \\Rightarrow 4x_1 = 4x_2 \\Rightarrow x_1 = x_2$.\nTherefore, $f$ is one-one.\n\nOnto (Surjective):\nFor the $N \\to Y$ version: $Y$ is the set of all images of $x \\in N$, so every element of $Y$ has a pre-image in $N$. Hence $f$ is onto.\nFor the $R \\to R$ version: Let $y \\in R$. Then $4x + 3 = y \\Rightarrow x = \\frac{y-3}{4} \\in R$. Thus $f$ is onto.\n\nConclusion: Since $f$ is one-one and onto, it is invertible.\n\nInverse: Let $y = 4x + 3 \\Rightarrow x = \\frac{y-3}{4}$. Therefore $f^{-1}(y) = \\frac{y-3}{4}$.",
      },
    ],
  },
  {
    sim: "Similar 2",
    items: [
      {
        question: "Let $A = R - \\{3\\}$ and $B = R - \\{1\\}$. Consider the function $f: A \\to B$ defined by $f(x) = \\frac{x-2}{x-3}$. Is $f$ one-one and onto? Justify your answer. (Note: 2025 Exam 3 also asks to find $f^{-1}$).",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [
          { year: "2025", exam: "Exam 1" },
          { year: "2025", exam: "Exam 3" },
          { year: "2027", exam: "Model 5" },
        ],
        total: 3,
        answer: "One-One: Let $f(x_1) = f(x_2) \\Rightarrow \\frac{x_1-2}{x_1-3} = \\frac{x_2-2}{x_2-3}$. Cross-multiplying and simplifying gives $x_1 = x_2$. So $f$ is one-one.\n\nOnto: Let $y \\in B$ ($y \\neq 1$). Then $y = \\frac{x-2}{x-3} \\Rightarrow x = \\frac{3y-2}{y-1}$, which is defined since $y \\neq 1$, and $x \\neq 3$. So $f$ is onto.\n\nConclusion: $f$ is one-one and onto.\n\n$f^{-1}(y) = \\frac{3y-2}{y-1}$.",
      },
    ],
  },
  {
    sim: "Similar 3",
    items: [
      {
        question: "State whether the function $f: R \\to R$ defined by $f(x) = 3 - 4x$ is one-one, onto or bijective. Justify your answer.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [
          { year: "2025", exam: "Exam 2" },
          { year: "2027", exam: "Model 1" },
        ],
        total: 2,
        answer: "One-One: $f(x_1) = f(x_2) \\Rightarrow 3 - 4x_1 = 3 - 4x_2 \\Rightarrow x_1 = x_2$. So $f$ is one-one.\n\nOnto: Let $y \\in R$. Then $3 - 4x = y \\Rightarrow x = \\frac{3-y}{4} \\in R$. So $f$ is onto.\n\nConclusion: $f$ is bijective.",
      },
    ],
  },
  {
    sim: "Similar 4",
    items: [
      {
        question: "Consider $f: R \\to R$ defined by $f(x) = 10x + 7$. Show that $f$ is invertible. Also write the inverse of $f$.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2026", exam: "Exam 2" }],
        total: 1,
        answer: "One-One: $f(x_1) = f(x_2) \\Rightarrow 10x_1 + 7 = 10x_2 + 7 \\Rightarrow x_1 = x_2$. So $f$ is one-one.\n\nOnto: Let $y \\in R$. Then $10x + 7 = y \\Rightarrow x = \\frac{y-7}{10} \\in R$. So $f$ is onto.\n\nConclusion: $f$ is invertible, and $f^{-1}(y) = \\frac{y-7}{10}$.",
      },
    ],
  },
  {
    sim: "Similar 5",
    items: [
      {
        question: "If $f: R \\to R$ is defined by $f(x) = 1 + x^2$, then show that $f$ is neither one-one nor onto.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2027", exam: "Model 3" }],
        total: 1,
        answer: "Not One-One: $f(1) = 1 + 1 = 2$ and $f(-1) = 1 + 1 = 2$, but $1 \\neq -1$. So $f$ is not one-one.\n\nNot Onto: Since $x^2 \\ge 0$, $f(x) = 1 + x^2 \\ge 1$, so range $= [1, \\infty) \\neq R$ (e.g. no $x$ gives $f(x) = 0$). So $f$ is not onto.\n\nConclusion: $f$ is neither one-one nor onto.",
      },
    ],
  },
  {
    sim: "Similar 6",
    items: [
      {
        question: "Show that the function $f: R_* \\to R_*$ defined by $f(x) = \\frac{1}{x}$ is one-one and onto, where $R_*$ is the set of all non-zero real numbers.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2027", exam: "Model 4" }],
        total: 1,
        answer: "One-One: $f(x_1) = f(x_2) \\Rightarrow \\frac{1}{x_1} = \\frac{1}{x_2} \\Rightarrow x_1 = x_2$. So $f$ is one-one.\n\nOnto: Let $y \\in R_*$ ($y \\neq 0$). Then $\\frac{1}{x} = y \\Rightarrow x = \\frac{1}{y} \\in R_*$. So $f$ is onto.\n\nConclusion: $f(x) = \\frac{1}{x}$ is one-one and onto.",
      },
    ],
  },
];

const MATRICES_5M_SIMILARITY = [
  {
    sim: "Similar 1",
    items: [
      {
        question: "If $A = \\begin{bmatrix} -2 \\\\ 4 \\\\ 5 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & 3 & -6 \\end{bmatrix}$, verify that $(AB)' = B'A'$.",
        difficulty: "medium",
        marks: "5 marks",
        imp: true,
        repetitions: [
          { year: "2027", exam: "Model 2" },
          { year: "2027", exam: "Model 3" },
          { year: "2026", exam: "Exam 1" },
          { year: "2026", exam: "Exam 2" },
          { year: "2025", exam: "Exam 1" },
        ],
        total: 5,
        answer: "Calculate AB:\n$AB = \\begin{bmatrix} -2 \\\\ 4 \\\\ 5 \\end{bmatrix} \\begin{bmatrix} 1 & 3 & -6 \\end{bmatrix} = \\begin{bmatrix} -2 & -6 & 12 \\\\ 4 & 12 & -24 \\\\ 5 & 15 & -30 \\end{bmatrix}$\n\nFind (AB)':\n$(AB)' = \\begin{bmatrix} -2 & 4 & 5 \\\\ -6 & 12 & 15 \\\\ 12 & -24 & -30 \\end{bmatrix}$\n\nCalculate B'A':\n$B' = \\begin{bmatrix} 1 \\\\ 3 \\\\ -6 \\end{bmatrix}$ and $A' = \\begin{bmatrix} -2 & 4 & 5 \\end{bmatrix}$\n$B'A' = \\begin{bmatrix} 1 \\\\ 3 \\\\ -6 \\end{bmatrix} \\begin{bmatrix} -2 & 4 & 5 \\end{bmatrix} = \\begin{bmatrix} -2 & 4 & 5 \\\\ -6 & 12 & 15 \\\\ 12 & -24 & -30 \\end{bmatrix}$\n\nConclusion: Since $(AB)' = B'A'$, it is verified.",
      },
    ],
  },
  {
    sim: "Similar 2",
    items: [
      {
        question: "If $A = \\begin{bmatrix} 0 & 6 & 7 \\\\ -6 & 0 & 8 \\\\ 7 & -8 & 0 \\end{bmatrix}$, $B = \\begin{bmatrix} 0 & 1 & 1 \\\\ 1 & 0 & 2 \\\\ 1 & 2 & 0 \\end{bmatrix}$ and $C = \\begin{bmatrix} 2 \\\\ -2 \\\\ 3 \\end{bmatrix}$, calculate $AC, BC$ and $(A+B)C$. Also verify that $(A+B)C = AC + BC$.",
        difficulty: "medium",
        marks: "5 marks",
        imp: true,
        repetitions: [
          { year: "2027", exam: "Model 1" },
          { year: "2025", exam: "Exam 2" },
          { year: "2023", exam: "Main" },
        ],
        total: 3,
        answer: "Calculate AC:\n$AC = \\begin{bmatrix} 9 \\\\ 12 \\\\ 30 \\end{bmatrix}$\n\nCalculate BC:\n$BC = \\begin{bmatrix} 1 \\\\ 8 \\\\ -2 \\end{bmatrix}$\n\nCalculate (A+B)C:\n$A+B = \\begin{bmatrix} 0 & 7 & 8 \\\\ -5 & 0 & 10 \\\\ 8 & -6 & 0 \\end{bmatrix}$, so $(A+B)C = \\begin{bmatrix} 10 \\\\ 20 \\\\ 28 \\end{bmatrix}$\n\nVerify: $AC + BC = \\begin{bmatrix} 9 \\\\ 12 \\\\ 30 \\end{bmatrix} + \\begin{bmatrix} 1 \\\\ 8 \\\\ -2 \\end{bmatrix} = \\begin{bmatrix} 10 \\\\ 20 \\\\ 28 \\end{bmatrix}$.\nSince $(A+B)C = AC + BC$, it is verified.",
      },
    ],
  },
  {
    sim: "Similar 3",
    items: [
      {
        question: "If $A = \\begin{bmatrix} 1 & 2 & -3 \\\\ 5 & 0 & 2 \\\\ 1 & -1 & 1 \\end{bmatrix}$, $B = \\begin{bmatrix} 3 & -1 & 2 \\\\ 4 & 2 & 5 \\\\ 2 & 0 & 3 \\end{bmatrix}$, $C = \\begin{bmatrix} 4 & 1 & 2 \\\\ 0 & 3 & 2 \\\\ 1 & -2 & 3 \\end{bmatrix}$, then compute $(A+B)$ and $(B-C)$. Also verify that $A + (B-C) = (A+B) - C$.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [
          { year: "2024", exam: "Exam 1" },
          { year: "2024", exam: "Exam 2" },
          { year: "2023", exam: "Supplement" },
        ],
        total: 3,
        answer: "Compute A+B:\n$A+B = \\begin{bmatrix} 4 & 1 & -1 \\\\ 9 & 2 & 7 \\\\ 3 & -1 & 4 \\end{bmatrix}$\n\nCompute B-C:\n$B-C = \\begin{bmatrix} -1 & -2 & 0 \\\\ 4 & -1 & 3 \\\\ 1 & 2 & 0 \\end{bmatrix}$\n\nCompute A+(B-C):\n$A+(B-C) = \\begin{bmatrix} 0 & 0 & -3 \\\\ 9 & -1 & 5 \\\\ 2 & 1 & 1 \\end{bmatrix}$\n\nCompute (A+B)-C:\n$(A+B)-C = \\begin{bmatrix} 0 & 0 & -3 \\\\ 9 & -1 & 5 \\\\ 2 & 1 & 1 \\end{bmatrix}$\n\nConclusion: Since $A + (B-C) = (A+B) - C$, it is verified.",
      },
    ],
  },
  {
    sim: "Similar 4",
    items: [
      {
        question: "If $A = \\begin{bmatrix} 3 & \\sqrt{3} & 2 \\\\ 4 & 2 & 0 \\end{bmatrix}$ and $B = \\begin{bmatrix} 2 & -1 & 2 \\\\ 1 & 2 & 4 \\end{bmatrix}$, then verify that $(A+B)' = A' + B'$.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [
          { year: "2027", exam: "Model 5" },
          { year: "2024", exam: "Exam 3" },
        ],
        total: 2,
        answer: "Compute A+B:\n$A+B = \\begin{bmatrix} 5 & \\sqrt{3}-1 & 4 \\\\ 5 & 4 & 4 \\end{bmatrix}$\n\nCompute (A+B)':\n$(A+B)' = \\begin{bmatrix} 5 & 5 \\\\ \\sqrt{3}-1 & 4 \\\\ 4 & 4 \\end{bmatrix}$\n\nCompute A' + B':\n$A' = \\begin{bmatrix} 3 & 4 \\\\ \\sqrt{3} & 2 \\\\ 2 & 0 \\end{bmatrix}$ and $B' = \\begin{bmatrix} 2 & 1 \\\\ -1 & 2 \\\\ 2 & 4 \\end{bmatrix}$, so $A' + B' = \\begin{bmatrix} 5 & 5 \\\\ \\sqrt{3}-1 & 4 \\\\ 4 & 4 \\end{bmatrix}$\n\nConclusion: Since $(A+B)' = A' + B'$, it is verified.",
      },
    ],
  },
  {
    sim: "Similar 5",
    items: [
      {
        question: "If $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 3 & -2 & 1 \\\\ 4 & 2 & 1 \\end{bmatrix}$, then show that $A^3 - 23A - 40I = O$.",
        difficulty: "medium",
        marks: "5 marks",
        imp: true,
        repetitions: [{ year: "2027", exam: "Model 4" }],
        total: 1,
        answer: "Calculate $A^2$:\n$A^2 = \\begin{bmatrix} 19 & 4 & 8 \\\\ 1 & 12 & 8 \\\\ 14 & 6 & 15 \\end{bmatrix}$\n\nCalculate $A^3$:\n$A^3 = \\begin{bmatrix} 63 & 46 & 69 \\\\ 69 & -6 & 23 \\\\ 92 & 46 & 63 \\end{bmatrix}$\n\nCalculate 23A:\n$23A = \\begin{bmatrix} 23 & 46 & 69 \\\\ 69 & -46 & 23 \\\\ 92 & 46 & 23 \\end{bmatrix}$\n\nThen $A^3 - 23A = \\begin{bmatrix} 40 & 0 & 0 \\\\ 0 & 40 & 0 \\\\ 0 & 0 & 40 \\end{bmatrix} = 40I$.\n\nConclusion: $A^3 - 23A - 40I = 40I - 40I = O$. Hence shown.",
      },
    ],
  },
  {
    sim: "Similar 6",
    items: [
      {
        question: "If $A = \\begin{bmatrix} 0 & 6 & 7 \\\\ -6 & 0 & 8 \\\\ 7 & -8 & 0 \\end{bmatrix}$, $B = \\begin{bmatrix} 0 & 1 & 1 \\\\ 1 & 0 & 2 \\\\ 1 & 2 & 0 \\end{bmatrix}$ and $C = \\begin{bmatrix} 2 \\\\ -2 \\\\ 3 \\end{bmatrix}$, calculate $AC, BC$ and $(A-B)C$. Also verify that $(A-B)C = AC - BC$.",
        difficulty: "easy",
        marks: "5 marks",
        repetitions: [{ year: "2025", exam: "Exam 3" }],
        total: 1,
        answer: "Calculate AC:\n$AC = \\begin{bmatrix} 9 \\\\ 12 \\\\ 30 \\end{bmatrix}$\n\nCalculate BC:\n$BC = \\begin{bmatrix} 1 \\\\ 8 \\\\ -2 \\end{bmatrix}$\n\nCalculate (A-B)C:\n$A-B = \\begin{bmatrix} 0 & 5 & 6 \\\\ -7 & 0 & 6 \\\\ 6 & -10 & 0 \\end{bmatrix}$, so $(A-B)C = \\begin{bmatrix} 8 \\\\ 4 \\\\ 32 \\end{bmatrix}$\n\nVerify: $AC - BC = \\begin{bmatrix} 9 \\\\ 12 \\\\ 30 \\end{bmatrix} - \\begin{bmatrix} 1 \\\\ 8 \\\\ -2 \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ 4 \\\\ 32 \\end{bmatrix}$.\nSince $(A-B)C = AC - BC$, it is verified.",
      },
    ],
  },
];

// Merge multiple similar-groups into ONE group ("Similar 1") listing every
// question one-by-one (used for RF 5M and Matrices 5M).
const mergeToOne = (groups) => [
  { sim: "Similar 1", items: (groups || []).flatMap((g) => g.items || []) },
];

// Custom Matrices 5M grouping:
//  - Similar 1: remaining questions (2nd, 3rd, 6th)
//  - Similar 2: 1st and 4th questions
//  - Similar 3: 5th question
const regroupMatrices = (groups) => {
  const it = (groups || []).flatMap((g) => g.items || []);
  return [
    { sim: "Similar 1", items: [it[1], it[2], it[5]].filter(Boolean) },
    { sim: "Similar 2", items: [it[0], it[3]].filter(Boolean) },
    { sim: "Similar 3", items: [it[4]].filter(Boolean) },
  ];
};

export const SIMILARITY_BANK = {
  "Determinants:6p4m": DETERMINANTS_SIMILARITY,
  "Linear Programming:6p4m": LINEAR_PROGRAMMING_SIMILARITY,
  "Matrices:5m": regroupMatrices(MATRICES_5M_SIMILARITY),
  "Matrices:5M": regroupMatrices(MATRICES_5M_SIMILARITY),
  "Relations and Functions:5m": mergeToOne(RF_5M_SIMILARITY),
  "Relations and Functions:5M": mergeToOne(RF_5M_SIMILARITY),
  "Electric Charges and Fields:numeric": ECF_NUMERIC,
  "Electric Charges & Fields:numeric": ECF_NUMERIC,
  "Electric Charges and Fields:5m": ECF_5M_THEORY,
  "Electric Charges & Fields:5m": ECF_5M_THEORY,
  "Electric Charges and Fields:2m": ECF_2M,
  "Electric Charges & Fields:2m": ECF_2M,
  "Electric Charges and Fields:3m": ECF_3M,
  "Electric Charges & Fields:3m": ECF_3M,
  "Electrostatic Potential and Capacitance:5m": ECP_5M_THEORY,
  "Electrostatic Potential & Capacitance:5m": ECP_5M_THEORY,
  "Electrostatic Potential and Capacitance:2m": ECP_2M,
  "Electrostatic Potential & Capacitance:2m": ECP_2M,
  "Electrostatic Potential and Capacitance:3m": ECP_3M,
  "Electrostatic Potential & Capacitance:3m": ECP_3M,
  "Electrostatic Potential and Capacitance:numeric": ECP_NUMERIC,
  "Electrostatic Potential & Capacitance:numeric": ECP_NUMERIC,
};

export function resolveSimilarity({ chapterName, mark }) {
  if (!chapterName) return null;
  return (
    SIMILARITY_BANK[`${chapterName}:${mark}`] ||
    SIMILARITY_BANK[`${chapterName}:numeric`] ||
    null
  );
}
