// Physics — chapter questions grouped by mark type and year.
// Same shape as RF_5M_PAGES. Rendered by <MathText/> (KaTeX).
// In JS strings backslashes are doubled: `\\times`, `\\mu`, `\\dfrac`, etc.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });

// ================= 5 Mark (Part D) =================
const POT_CAP_5M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model Paper 1", qno: "Q37", marks: 5, text: "Derive an expression for electric potential at a point due to a point charge." },
      { tag: "Model Paper 4", qno: "Q37", marks: 5, text: "Derive an expression for the capacitance of a parallel plate capacitor with air between the plates. Also write the general expression for the capacitance of a parallel plate capacitor with a dielectric medium." },
    ]),
  ],
  [
    P("2025", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q37", marks: 5, text: "Derive the expression for the electric potential at a point due to a point charge." },
      { tag: "Exam 3", qno: "Q37", marks: 5, text: "Define electrostatic potential. Obtain an expression for electrostatic potential at a point due to an isolated point charge." },
    ]),
  ],
  [
    P("2024", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q39", marks: 5, text: "a) What are polar and non-polar molecules? (2) b) Derive the expression for the capacitance of a parallel plate capacitor. (3)" },
      { tag: "Exam 2", qno: "Q39", marks: 5, text: "Obtain an expression for electrostatic potential at a point due to an isolated point charge." },
      { tag: "Exam 3", qno: "Q39", marks: 5, text: "a) Derive an expression for equivalent capacitance of two capacitors connected in series. (3) b) Write any two properties of the equipotential surface. (2)" },
    ]),
  ],
];

// ================= Numericals (numeric) =================
const POT_CAP_NUMERIC = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model Paper 2", qno: "Q42", marks: 5, text: "A parallel plate capacitor has air between the plates. The area of the plates is $4\\,\\text{cm}^2$ and the distance between them is $2\\,\\text{mm}$. (a) Calculate the capacitance of the capacitor. (b) If this capacitor is connected to a $100\\,\\text{V}$ supply, find the magnitude of the charge on each plate and the energy stored in the capacitor. (Given: $\\epsilon_0 = 8.854 \\times 10^{-12}\\,\\text{F m}^{-1}$)" },
      { tag: "Model Paper 3", qno: "Q42", marks: 5, text: "Three point charges $3\\,\\text{nC}$, $-2\\,\\text{nC}$ and $4\\,\\text{nC}$ are placed at the vertices A, B and C of an equilateral triangle ABC of sides $0.2\\,\\text{m}$. Calculate the potential energy of the system. Also calculate the amount of work required to place the same charges at the vertices of an equilateral triangle of side $0.1\\,\\text{m}$. (Take: $\\dfrac{1}{4\\pi\\epsilon_0} = 9 \\times 10^{9}\\,\\text{Nm}^2\\text{C}^{-2}$)" },
      { tag: "Model Paper 5", qno: "Q42", marks: 5, text: "Two capacitors of capacitances $3\\,\\mu\\text{F}$ and $6\\,\\mu\\text{F}$ are connected in series and the resulting combination is connected across a $300\\,\\text{V}$ battery. Calculate i) the effective capacitance of the combination; ii) the charge collected by each capacitor and iii) the energy stored in the $3\\,\\mu\\text{F}$ capacitor." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q42", marks: 5, text: "Two charges $5 \\times 10^{-8}$ C and $-3 \\times 10^{-8}$ C are located 16 cm apart in vacuum. Find the positions along the line passing through the two charges where the electric potential is zero." },
      { tag: "Exam 2", qno: "Q42", marks: 5, text: "Three point charges $+4\\,\\mu C$, $-6\\,\\mu C$ and $+8\\,\\mu C$ are placed at the corners A, B and C respectively of a square ABCD of side 10 cm. Calculate the work done to transfer a point charge $+3\\,\\mu C$ from the corner D to the centre O of the square. (Given $\\dfrac{1}{4\\pi\\epsilon_0} = 9 \\times 10^{9}\\ \\text{Nm}^2/\\text{C}^2$)" },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 2", qno: "Q42", marks: 5, text: "A network of four $9\\,\\mu F$ capacitors is connected to a 300 V supply as shown in figure. Determine a) equivalent capacitance of the network and b) the charge on each capacitor." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q45", marks: 5, text: "Charges $2\\,\\mu\\text{C}$, $4\\,\\mu\\text{C}$ and $6\\,\\mu\\text{C}$ are placed at the three corners A, B and C respectively of a square ABCD of side $X$ metre. Find the charge that must be placed at the fourth corner so that the total potential at the centre of the square is zero." },
      { tag: "Supplement 1", qno: "Q45", marks: 5, text: "Two capacitors of capacitances $3\\,\\text{pF}$ and $7\\,\\text{pF}$ are connected in series and the combination is connected to a source of emf $10\\,\\text{V}$. Calculate the effective capacitance of the combination. Also find the potential difference across each capacitor." },
      { tag: "Supplement 2", qno: "Q45", marks: 5, text: "Three capacitors of capacitances $2\\,\\text{pF}$, $3\\,\\text{pF}$ and $4\\,\\text{pF}$ are connected in parallel. (a) What is the total capacitance of the combination? (b) Determine the charge on each capacitor, if the combination is connected to a $100\\,\\text{V}$ supply." },
    ]),
  ],
];

// ---- Electric Charges and Fields (5 Mark theory + Numericals) ----
const ECF_5M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model Paper 2", qno: "Q24", marks: 5, text: "Derive an expression for the intensity of electric field at a point on the axial line of a dipole." },
      { tag: "Model Paper 3", qno: "Q37", marks: 5, text: "Derive an expression for the electric field at a point on the axis of an electric dipole." },
      { tag: "Model Paper 5", qno: "Q37", marks: 5, text: "State Gauss law in electrostatics. Using it, derive the expression for the electric field at a point due to an infinitely long, straight, uniformly charged wire." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q37", marks: 5, text: "Arrive at the expression for the electric field at a point due to an infinitely long uniformly charged straight wire using Gauss's law." },
      { tag: "Exam 2", qno: "Q37", marks: 5, text: "State Gauss's law in electrostatics. Using it arrive at the expression for the electric field due to an infinitely long uniformly-charged conducting wire." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 2", qno: "Q37", marks: 5, text: "Deduce an expression for electric field at a point outside a thin uniformly-charged spherical shell using Gauss's law." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q39", marks: 5, text: "State Gauss's law in electrostatics. Derive an expression for the electric field at a point due to an infinitely long thin charged straight wire using Gauss's law." },
      { tag: "Supplement", qno: "Q39", marks: 5, text: "Derive the expression for the electric field at a point on the equatorial line of an electric dipole." },
      { tag: "Supplement (2nd Set)", qno: "Q39", marks: 5, text: "Derive an expression for the electric field at a point due to an infinitely long thin charged straight wire using Gauss's law." },
    ]),
  ],
];

const ECF_NUMERIC = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model Paper 1", qno: "Q42", marks: 5, text: "A positively charged spherical conductor of radius $0.1\\,\\text{m}$ produces an electric field of $1.8 \\times 10^{3}\\,\\text{N C}^{-1}$ at a point P distant $0.2\\,\\text{m}$ from its centre. Calculate the magnitude of the charge present on the spherical conductor. Also find the new charge on the charged spherical conductor if $5 \\times 10^{10}$ more electrons are removed from it." },
      { tag: "Model Paper 4", qno: "Q42", marks: 5, text: "A pendulum bob of mass $80\\,\\text{mg}$ and carrying charge $2 \\times 10^{-8}\\,\\text{C}$ is at rest at a certain angle with the vertical in a horizontal uniform electric field of $20{,}000\\,\\text{V m}^{-1}$. Find the tension in the thread of the pendulum and the angle it makes with the vertical." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q42", marks: 5, text: "A uniformly charged spherical shell of radius 10 cm has a surface charge density of $16\\,\\mu C/m^{2}$. Find the electric field due to the shell at a distance of (a) 20 cm from the centre of the shell, (b) 5 cm from the centre of the shell." },
      { tag: "Exam 3", qno: "Q42", marks: 5, text: "Two point charges $2\\,\\mu C$ and $3\\,\\mu C$ are placed at the two corners A and B of an equilateral triangle ABC of side 0.2 m. Calculate the magnitude of resultant electric field at the corner C of that triangle." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q45", marks: 5, text: "Two point charges $+15\\,\\mu C$ and $-10\\,\\mu C$ are separated by a distance of 20 cm in air. Calculate the electric field at the mid point of the line joining two charges. If a point charge of 20 mC is placed at that mid point, what is the magnitude of electric force experienced by it?" },
      { tag: "Exam 2", qno: "Q45", marks: 5, text: "The electrostatic force on a small sphere of charge $0.4\\,\\mu C$ due to another small sphere of charge $-0.8\\,\\mu C$ in air separated by a distance $d$ is 0.2 N. (a) Find the distance between the two spheres. (b) What is the magnitude and nature of force on the second sphere due to the first?" },
      { tag: "Exam 3", qno: "Q45", marks: 5, text: "The electrostatic force on a metal sphere of charge $0.5\\,\\mu C$ due to another identical metal sphere of charge $-1.2\\,\\mu C$ is $45 \\times 10^{-3}$ N. Find the distance between two spheres. Also find the force between the same two spheres when they are brought into contact and then placed at their initial position." },
    ]),
  ],
];

// ================= 3 Mark (Part C) =================
const ECF_3M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model Paper 1", qno: "Q29", marks: 3, text: "Derive an expression for torque acting on an electric dipole placed in a uniform electric field." },
      { tag: "Model Paper 2", qno: "Q29", marks: 3, text: "Give Coulomb's law in vector form and explain the terms. Define SI unit of charge using Coulomb's law." },
      { tag: "Model Paper 3", qno: "Q29", marks: 3, text: "Define linear charge density. Mention the expression for electric field at a point due to an infinitely long uniformly charged wire and explain the terms." },
      { tag: "Model Paper 4", qno: "Q29", marks: 3, text: "Show that the total electric flux through the surface of a sphere enclosing a point charge $q$ at its centre is $\\dfrac{q}{\\epsilon_0}$." },
      { tag: "Model Paper 5", qno: "Q29", marks: 3, text: "Mention three properties of electric field lines." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q29", marks: 3, text: "Give Coulomb's law in vector form and explain the terms. Define SI unit of charge." },
      { tag: "Exam 2", qno: "Q29", marks: 3, text: "Derive an expression for the torque experienced by an electric dipole placed in a uniform electric field." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q29", marks: 3, text: "Mention three properties of electric field lines." },
      { tag: "Exam 3", qno: "Q29", marks: 3, text: "Write three properties of electric field lines." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q30", marks: 3, text: "Mention any three properties of the electric field lines." },
      { tag: "Exam 2", qno: "Q30", marks: 3, text: "Mention three basic properties of electric charges." },
      { tag: "Exam 3", qno: "Q30", marks: 3, text: "Mention any three basic properties of electric charge." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q30", marks: 3, text: "Write any three properties of electric field lines." },
      { tag: "Supplement", qno: "Q30", marks: 3, text: "Mention three properties of electric field lines." },
      { tag: "Supplement (Set 2)", qno: "Q30", marks: 3, text: "State and explain Coulomb's law of electrostatics." },
    ]),
  ],
];

const POT_CAP_3M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model Paper 1", qno: "Q30", marks: 3, text: "What is a capacitor? Mention two factors on which capacitance of a parallel plate capacitor depends." },
      { tag: "Model Paper 2", qno: "Q30", marks: 3, text: "Mention any three important results regarding the electrostatics of conductors." },
      { tag: "Model Paper 3", qno: "Q30", marks: 3, text: "Obtain the expression for equivalent capacitance of two capacitors connected in series." },
      { tag: "Model Paper 4", qno: "Q30", marks: 3, text: "Derive an expression for the potential energy of a system of two point charges in the absence of external electric field." },
      { tag: "Model Paper 5", qno: "Q30", marks: 3, text: "Derive the relation between electric field and electric potential." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q30", marks: 3, text: "What is a capacitor? Mention any two factors on which capacitance of a parallel plate capacitor depends." },
      { tag: "Exam 2", qno: "Q30", marks: 3, text: "List out the three important results regarding electrostatics of conductors." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q30", marks: 3, text: "Derive the expression for the equivalent capacitance of two capacitors connected in parallel." },
      { tag: "Exam 2", qno: "Q29", marks: 3, text: "a) What is meant by an equipotential surface? b) Draw equipotential surfaces for uniform electric field and a point charge." },
      { tag: "Exam 3", qno: "Q30", marks: 3, text: "Obtain an expression for effective capacitance of two capacitors connected in parallel." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q31", marks: 3, text: "Deduce $E = -\\dfrac{dV}{dx}$, where the terms have usual meaning." },
      { tag: "Exam 2", qno: "Q31", marks: 3, text: "Derive the relation between electric field and electric potential in a uniform electric field." },
      { tag: "Exam 3", qno: "Q31", marks: 3, text: "Obtain an expression for potential energy of system of two charges in the absence of electric field." },
    ]),
  ],
];

// ================= 2 Mark (Part B) =================
const ECF_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model Paper 1", qno: "Q21", marks: 2, text: "Define electric field at a point. What is meant by 'source charge'?" },
      { tag: "Model Paper 2", qno: "Q21", marks: 2, text: "Sketch the electric field lines for (a) a positive point charge and (b) an electric dipole." },
      { tag: "Model Paper 3", qno: "Q21", marks: 2, text: "Define electric flux through an area element. Mention its SI unit." },
      { tag: "Model Paper 4", qno: "Q21", marks: 2, text: "Define the term 'linear charge density'. Mention its SI unit." },
      { tag: "Model Paper 5", qno: "Q21", marks: 2, text: "Mention two factors on which electric field at a point due to a point charge depends." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q21", marks: 2, text: "Write any two properties of electric field lines." },
      { tag: "Exam 1", qno: "Q22", marks: 2, text: "What is electrostatic shielding? Mention one use of it." },
      { tag: "Exam 2", qno: "Q21", marks: 2, text: "Two identical point charges are separated by a distance 0.2 m in air repel each other with a force $9 \\times 10^{3}$ N. Find the magnitude of each charge." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 2", qno: "Q21", marks: 2, text: "Give any two properties of electric field lines." },
      { tag: "Exam 2", qno: "Q22", marks: 2, text: "Find the force on a point charge $2 \\times 10^{-6}$ C, placed at a point in a uniform electric field of $0.8\\ \\text{NC}^{-1}$." },
      { tag: "Exam 3", qno: "Q21", marks: 2, text: "State and explain Coulomb's law in electrostatics." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q21", marks: 2, text: "State and explain Gauss's law in electrostatics." },
      { tag: "Exam 2", qno: "Q21", marks: 2, text: "State and explain Gauss's law in electrostatics." },
      { tag: "Exam 3", qno: "Q21", marks: 2, text: "State and explain Gauss's law in electrostatics." },
    ]),
  ],
];

const POT_CAP_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Model Paper 1", qno: "Q22", marks: 2, text: "The electrostatic potential energy of a system of two like charges is positive. Explain." },
      { tag: "Model Paper 2", qno: "Q22", marks: 2, text: "What are polar molecules? Give an example." },
      { tag: "Model Paper 3", qno: "Q22", marks: 2, text: "What is meant by equipotential surface? Draw equipotential surfaces for an electric dipole." },
      { tag: "Model Paper 4", qno: "Q22", marks: 2, text: "Write two properties of equipotential surfaces." },
      { tag: "Model Paper 5", qno: "Q22", marks: 2, text: "The electrostatic potential energy of a system of two like charges decreases with increase in the distance of separation. Explain the statement using suitable expression." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 2", qno: "Q22", marks: 2, text: "Name any two factors on which the capacitance of a parallel plate capacitor depends." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q21", marks: 2, text: "Define electric potential energy of a system of charges. What happens to the potential energy of a system of two unlike charges when the distance between them is increased (assume there is no external electric field)?" },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q22", marks: 2, text: "Two point charges $5 \\times 10^{-6}$ C and $-3 \\times 10^{-6}$ C are located 10 cm apart. Find the point between the two charges where potential is zero." },
      { tag: "Exam 2", qno: "Q22", marks: 2, text: "Two capacitors $3\\,\\mu F$ and $6\\,\\mu F$ are connected in series. Find the equivalent capacitance of the combination." },
      { tag: "Exam 3", qno: "Q22", marks: 2, text: "The potential at a point is given by $V = ax - bx^{2}$ where $a$ and $b$ are constants. Find the value of electric field at that point." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q21", marks: 2, text: "On what factors does the capacitance of a parallel plate capacitor depend?" },
      { tag: "Supplement 1", qno: "Q21", marks: 2, text: "Mention two properties of equipotential surfaces." },
      { tag: "Supplement 2", qno: "Q21", marks: 2, text: "Mention two properties of equipotential surfaces." },
    ]),
  ],
];

export const PHYSICS_5M = {
  "Electric Charges and Fields": ECF_5M,
  "Electrostatic Potential and Capacitance": POT_CAP_5M,
};
export const PHYSICS_NUMERIC = {
  "Electric Charges and Fields": ECF_NUMERIC,
  "Electrostatic Potential and Capacitance": POT_CAP_NUMERIC,
};
export const PHYSICS_3M = {
  "Electric Charges and Fields": ECF_3M,
  "Electrostatic Potential and Capacitance": POT_CAP_3M,
};
export const PHYSICS_2M = {
  "Electric Charges and Fields": ECF_2M,
  "Electrostatic Potential and Capacitance": POT_CAP_2M,
};
