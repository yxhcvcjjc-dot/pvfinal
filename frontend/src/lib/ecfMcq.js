// Electric Charges & Fields — 1 Mark MCQs, grouped by year. Rendered by
// <MathText/> (KaTeX). Options are embedded in the question text (newlines
// preserved). `solution` holds the correct answer, revealed via the toggle.

const P = (year, label, tint, questions, options) => ({ year, label, tint, questions, ...(options ? { options } : {}) });
const M = (tag, text, answer) => ({ tag, qno: "", marks: 1, text, solution: [`Correct answer: ${answer}`] });

export const ECF_MCQ = [
  [P("2026-27", "Model Paper", "teal", [
    M("Model Paper 1", "The electric flux over a closed surface enclosing a charged particle is $-\\frac{q}{6\\epsilon_0}$. The charge of the particle is:\na) $+\\frac{q}{6}$\nb) $+6q$\nc) $-\\frac{q}{6}$\nd) $-6q$", "c) $-\\frac{q}{6}$"),
    M("Model Paper 2", "If a body contains $n_1$ protons and $n_2$ electrons, then the net charge of the body is:\na) $(n_1 + n_2)e$\nb) $(n_1 - n_2)e$\nc) $(n_2 - n_1)e$\nd) $(n_1 n_2)e$", "b) $(n_1 - n_2)e$"),
    M("Model Paper 2", "The electric potential at a point due to a point charge varies with distance from it as:\na) $\\frac{1}{\\text{distance}}$\nb) $\\frac{1}{(\\text{distance})^2}$\nc) $\\frac{1}{(\\text{distance})^3}$\nd) $\\frac{1}{\\sqrt{\\text{distance}}}$", "a) $\\frac{1}{\\text{distance}}$"),
    M("Model Paper 3", "The electrostatic force between a pair of unlike charges and a pair of like charges respectively are:\na) repulsive, attractive\nb) attractive, repulsive\nc) repulsive, repulsive\nd) attractive, attractive", "b) attractive, repulsive"),
    M("Model Paper 3", "The electric potential on the surface of a conducting charged spherical shell of radius $10\\,\\text{cm}$ is $20\\,\\text{V}$. The electric potential at the centre of the shell is:\na) zero\nb) $10\\,\\text{V}$\nc) $20\\,\\text{V}$\nd) $30\\,\\text{V}$", "c) $20\\,\\text{V}$"),
    M("Model Paper 4", "The charge acquired by a neutral body when $6.25 \\times 10^{18}$ electrons are added to it is:\na) $-1$ C\nb) $+1.6$ C\nc) $+1$ C\nd) $-1.6$ C", "a) $-1$ C"),
    M("Model Paper 4", "A and B are two points on the axial line and equatorial plane of a point dipole respectively. If $V_A$ and $V_B$ are the electric potentials corresponding to those two points, then:\na) $V_A = V_B = 0$\nb) $V_A \\neq 0$ and $V_B = 0$\nc) $V_A = 0$ and $V_B \\neq 0$\nd) $V_A \\neq 0$ and $V_B \\neq 0$", "b) $V_A \\neq 0$ and $V_B = 0$"),
    M("Model Paper 5", "The dimensional formula for electric flux is:\na) $[\\mathrm{M}\\mathrm{L}^{-3}\\mathrm{T}^{3}\\mathrm{A}^{-1}]$\nb) $[\\mathrm{M}\\mathrm{L}^{3}\\mathrm{T}^{-3}\\mathrm{A}^{-1}]$\nc) $[\\mathrm{M}\\mathrm{L}^{3}\\mathrm{T}^{-3}\\mathrm{A}]$\nd) $[\\mathrm{M}\\mathrm{L}^{-3}\\mathrm{T}^{3}\\mathrm{A}]$", "b) $[\\mathrm{M}\\mathrm{L}^{3}\\mathrm{T}^{-3}\\mathrm{A}^{-1}]$"),
    M("Model Paper 5", "Consider the following two statements regarding electrostatics of conductors.\nStatement - I: Inside a conductor, electrostatic field is zero.\nStatement - II: At the surface of a charged conductor, electrostatic field must be normal to the surface at every point.\nBetween the two statements:\na) both the statements are correct.\nb) statement- I is correct and statement- II is wrong.\nc) both the statements are wrong.\nd) statement- II is correct and statement- I is wrong.", "a) both the statements are correct."),
  ])],
  [P("2026", "Exam", "blue", [
    M("Exam 1", "Which one of the following charge cannot exist on a body?\na) $2e$\nb) $3e$\nc) $3.5e$\nd) $-4e$", "c) $3.5e$"),
    M("Exam 1", "The equipotential surfaces of an isolated point charge are:\na) Coaxial cylindrical surfaces\nb) Plane surfaces parallel to each other\nc) Concentric spherical surfaces centred at the charge\nd) Spherical surfaces but not centred on the charge", "c) Concentric spherical surfaces centred at the charge"),
    M("Exam 2", "Which of the following is not a basic property of electric charge?\na) Charge is quantised\nb) Charge is conserved\nc) Charge is vector\nd) Charge is additive", "c) Charge is vector"),
    M("Exam 2", "The values of electric field (E) and electric potential (V) at any point on the equatorial plane of an electric dipole are such that\na) $E = 0$ and $V = 0$\nb) $E \\neq 0$ and $V = 0$\nc) $E = 0$ and $V \\neq 0$\nd) $E \\neq 0$ and $V \\neq 0$", "b) $E \\neq 0$ and $V = 0$"),
  ])],
  [P("2025", "Exam", "sky", [
    M("Exam 1", "A point charge $q_1$ exerts a force $F$ on another point charge $q_2$ when placed at a fixed distance. If another point charge $q_3$ is brought near $q_2$, the force on $q_2$ due to $q_1$:\na) increases\nb) decreases\nc) may increase or decrease\nd) does not change", "d) does not change"),
    M("Exam 1", "Equipotential surfaces for an isolated point charge are ______ in shape.\na) spherical\nb) planar\nc) cylindrical\nd) conical", "a) spherical"),
    M("Exam 2", "According to Coulomb's law, electrostatic force $F$ between two point charges separated by the distance $r$ varies as\na) $F \\propto \\frac{1}{r}$\nb) $F \\propto r$\nc) $F \\propto \\frac{1}{r^2}$\nd) $F \\propto r^2$", "c) $F \\propto \\frac{1}{r^2}$"),
    M("Exam 2", "The maximum electric field that a dielectric medium can withstand without breakdown of dielectric property is\na) dielectric constant\nb) dielectric strength\nc) dielectric polarization\nd) electrical susceptibility", "b) dielectric strength"),
    M("Exam 3", "The total charge of an electric dipole is\na) Infinity\nb) Zero\nc) $+e$\nd) $-e$", "b) Zero"),
    M("Exam 3", "Identify the 'WRONG' statement regarding electrostatics of conductors.\na) Electric field inside a charged conductor is zero\nb) There is no excess charge inside a charged conductor\nc) Electric potential is constant throughout the volume of a conductor\nd) Electric field is tangential at all points on the surface of a charged conductor", "d) Electric field is tangential at all points on the surface of a charged conductor"),
  ])],
  [P("2024", "Exam", "indigo", [
    M("Exam 1", "The electric dipole placed in uniform electric field is unstable, if the angle between electric field and dipole moment is\na) $0^\\circ$\nb) $60^\\circ$\nc) $90^\\circ$\nd) $180^\\circ$", "d) $180^\\circ$"),
    M("Exam 2", "Water molecule is a polar molecule because\na) the centres of positive and negative charges coincide\nb) the centres of positive and negative charges do not coincide\nc) it does not have permanent dipole moment\nd) in an external electric field it does not induce charges", "b) the centres of positive and negative charges do not coincide"),
    M("Exam 3", "The electric dipole placed in uniform electric field experiences\na) Only force\nb) Only torque\nc) Force and torque\nd) Neither force nor torque", "b) Only torque"),
    M("Exam 3", "A sphere has charge $Q$. Relative to $V = 0$ at infinity, the electrostatic potential $V$ and electric field $E$ inside the sphere are\na) $V = 0$ and $E \\neq 0$\nb) $V \\neq 0$ and $E \\neq 0$\nc) $V \\neq 0$ and $E = 0$\nd) $V = 0$ and $E = 0$", "c) $V \\neq 0$ and $E = 0$"),
  ])],
  [P("Fill in the Blanks", "1 Mark", "amber", [
    M("FBK 1", "Polar molecules have permanent ______.", "electric dipole moment"),
    M("FBK 2", "In a charge distribution, the ratio of electric charge to the length is ______ charge density.", "linear"),
    M("FBK 3", "According to Gauss's law in magnetism, magnetic ______ are not known to exist.", "monopoles"),
    M("FBK 4", "An electric dipole placed in a uniform electric field experiences a net ______.", "torque"),
    M("FBK 5", "The mutual inductance of a solenoid can be decreased by ______ the number of turns per unit length either in inner or outer solenoid.", "decreasing"),
    M("FBK 6", "______ is equal to work done to transfer unit positive test charge from infinity to a point in electric field opposite to field.", "electrostatic potential"),
  ], ["torque", "linear", "monopoles", "electric dipole moment", "electrostatic potential", "decreasing"])],
];
