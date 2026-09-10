// Physics — additional 3 Mark (Part C) questions by chapter, grouped by year.
// Rendered by <MathText/> (KaTeX). Backslashes doubled in JS strings.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });
const Q = (tag, qno, text) => ({ tag, qno, marks: 3, text });

const CURRENT_ELECTRICITY_3M = [
  [P("2024", "Exam", "sky", [
    Q("Exam 1", "Q32", "Give any three limitations of Ohm's law."),
    Q("Exam 2", "Q32", "State and explain Kirchhoff's rules of electrical network."),
    Q("Exam 3", "Q32", "Mention any three factors on which resistance of a conductor depends."),
  ])],
  [P("2023", "Exam", "violet", [
    Q("Main Exam", "Q31", "Draw a labelled Wheatstone's bridge and hence write the balancing condition in terms of resistances."),
    Q("Supplement", "Q31", "Derive the expression $J = \\sigma E$."),
    Q("Supplement", "Q37", "Mention three limitations of Ohm's law."),
  ])],
];

const MOVING_CHARGES_3M = [
  [P("2026", "Exam", "blue", [
    Q("Exam 1", "Q31", "With the help of a circuit diagram, explain how to convert a galvanometer into a voltmeter."),
    Q("Exam 2", "Q31", "State and explain Biot-Savart law with relevant diagram."),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q31", "Explain with a circuit diagram, how a galvanometer can be converted into voltmeter."),
    Q("Exam 2", "Q30", "Derive an expression for magnetic field due to a straight infinite conductor carrying current using Ampere's circuital law."),
    Q("Exam 3", "Q31", "A square coil of side $10$ cm, $50$ turns, carrying a current of $10$ A is placed in a uniform magnetic field of $0.80$ T in such a way that the normal drawn to the plane of the coil makes an angle $30^\\circ$ with the direction of magnetic field. Find the magnitude of torque experienced by the coil."),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q33", "Explain, how a galvanometer is converted into a voltmeter?"),
    Q("Exam 2", "Q33", "With a circuit diagram explain conversion of galvanometer to voltmeter."),
    Q("Exam 3", "Q33", "Explain the conversion of given galvanometer into an ammeter."),
    Q("Exam 3", "Q34", "Write any three properties of magnetic field lines."),
  ])],
  [P("2023", "Exam", "violet", [
    Q("Main Exam", "Q32", "How would you convert a galvanometer into an ammeter? Explain."),
    Q("Supplement", "Q32", "Explain the conversion of galvanometer into an ammeter with a circuit diagram."),
    Q("Supplement", "Q33", "Mention any three properties of magnetic field lines."),
    Q("Supplement", "Q38", "With a circuit diagram, explain how a galvanometer can be converted into a voltmeter."),
  ])],
];

const MAGNETISM_MATTER_3M = [
  [P("2026", "Exam", "blue", [
    Q("Exam 1", "Q32", "Differentiate between diamagnetic and ferromagnetic materials."),
    Q("Exam 2", "Q32", "Write the three differences between diamagnetic and ferromagnetic materials."),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q32", "Define the terms: a) Magnetization b) Magnetic permeability and c) Magnetic susceptibility."),
    Q("Exam 2", "Q31", "Define a) magnetic susceptibility and b) magnetic relative permeability and write an expression relating them."),
    Q("Exam 3", "Q32", "Distinguish between diamagnetic and paramagnetic materials."),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q34", "Mention any three properties of paramagnetic materials."),
    Q("Exam 2", "Q34", "Write any three differences between diamagnetic and ferromagnetic substances."),
  ])],
  [P("2023", "Exam", "violet", [
    Q("Main Exam", "Q33", "Write three differences between diamagnetic and paramagnetic materials."),
    Q("Supplement", "Q39", "Define the terms: (i) magnetisation, (ii) magnetic intensity and (iii) magnetic susceptibility."),
  ])],
];

const EMI_3M = [
  [P("2026", "Exam", "blue", [
    Q("Exam 2", "Q33", "Describe the coil and bar magnet experiment to demonstrate the phenomenon of electromagnetic induction."),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q33", "Derive the expression for motional emf induced in a rod moving in a uniform magnetic field."),
    Q("Exam 2", "Q32", "a) What is meant by electromagnetic induction? b) State and explain Faraday's law of electromagnetic induction."),
    Q("Exam 3", "Q33", "Derive the expression for motional emf induced in a straight conductor moving perpendicular to the uniform magnetic field."),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q35", "Lenz's law is the consequence of law of conservation of energy. Explain."),
    Q("Exam 3", "Q35", "Describe the coil and magnet experiment of electromagnetic induction."),
  ])],
  [P("2023", "Exam", "violet", [
    Q("Main Exam", "Q34", "Derive an expression for motional e.m.f. induced in a conductor moving perpendicular to the uniform magnetic field."),
    Q("Supplement", "Q34", "Derive an expression for motional emf induced in a straight conductor moving perpendicular to a uniform magnetic field."),
  ])],
];

const RAY_OPTICS_3M = [
  [P("2026", "Exam", "blue", [
    Q("Exam 1", "Q34", "A refracting telescope has an objective lens of focal length $144$ cm and the length of the tube is $150$ cm. Calculate the magnification due to the telescope."),
    Q("Exam 2", "Q34", "Give the three Cartesian sign conventions used in spherical mirrors."),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 2", "Q34", "Write the two conditions for total internal reflection of light and mention its one technological application."),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q36", "Write Cartesian sign conventions adopted for measuring distances in reflection of light at spherical mirrors."),
    Q("Exam 2", "Q36", "Draw a ray diagram of refraction of monochromatic light through a prism. Mention the expression for deviation in a thin prism."),
    Q("Exam 3", "Q36", "Write two conditions for total internal reflection of light and hence define critical angle."),
  ])],
  [P("2023", "Exam", "violet", [
    Q("Supplement", "Q35", "What is meant by total internal reflection? Mention two uses of optical fibres."),
    Q("Supplement", "Q41", "Draw a ray diagram for the formation of image at the near point by a simple microscope. Write the expression for magnification produced by it."),
  ])],
];

const DUAL_NATURE_3M = [
  [P("2026", "Exam", "blue", [
    Q("Exam 1", "Q35", "Write the experimental observations of photoelectric effect."),
    Q("Exam 2", "Q35", "The work function of Caesium is $2.14$ eV. When light of frequency $6 \\times 10^{14}$ Hz is incident on the Caesium surface, find the maximum kinetic energy of photoelectrons emitted. (Given: Planck's constant $h = 6.63 \\times 10^{-34}$ Js and $e = 1.6 \\times 10^{-19}$ C)."),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q34", "When a light radiation of energy $3$ eV falls on a metal surface, photoelectrons with a maximum kinetic energy $1$ eV are emitted from the surface. Find the threshold frequency for the metal surface. (Given: Planck's constant $h = 6.63 \\times 10^{-34}$ Js; charge on the electron $e = 1.6 \\times 10^{-19}$ C)."),
    Q("Exam 3", "Q34", "Write three experimental observations of photoelectric effect."),
  ])],
];

const ATOMS_3M = [
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q35", "State the postulates of Bohr's hydrogen atom model."),
    Q("Exam 2", "Q35", "Deduce an expression for total energy of electron in an orbit of hydrogen atom in terms of radius of orbit."),
    Q("Exam 3", "Q35", "State the three postulates of Bohr's atomic model."),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q37", "Write three postulates of Bohr's atom model."),
    Q("Exam 2", "Q37", "Deduce an expression for energy of electron in hydrogen atom in terms of radius of the orbit."),
    Q("Exam 3", "Q37", "Give any three limitations of Bohr's atom model of hydrogen."),
  ])],
  [P("2023", "Exam", "violet", [
    Q("Supplement", "Q42", "Write Bohr's postulates for the hydrogen atom model."),
  ])],
];

const NUCLEI_3M = [
  [P("2026", "Exam", "blue", [
    Q("Exam 1", "Q36", "List three conclusions drawn from observations of binding energy per nucleon versus mass number curve."),
    Q("Exam 2", "Q36", "Mention the three features of nuclear force."),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q36", "Write any three properties of nuclear force."),
    Q("Exam 2", "Q36", "a) What is meant by nuclear fusion? Explain. b) Why is it called a thermonuclear reaction?"),
    Q("Exam 3", "Q36", "Mention the characteristic features of nuclear force."),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q38", "Mass defect of $_{7}N^{14}$ is $0.11236$ u. Calculate the binding energy and binding energy per nucleon in MeV."),
    Q("Exam 2", "Q38", "Calculate binding energy of oxygen nucleus $\\left(_{8}^{16}\\text{O}\\right)$ in MeV using the following data: Mass of oxygen nucleus $= 15.99053$ u, Mass of a proton $= 1.00727$ u, Mass of a neutron $= 1.00866$ u."),
    Q("Exam 3", "Q38", "Determine the radius of nucleus of mass number 125. [Given $R_0 = 1.2 \\times 10^{-15}$ m]."),
  ])],
  [P("2023", "Exam", "violet", [
    Q("Supplement", "Q43", "A radioactive isotope has a half-life of $T$ years. How long will it take the activity to reduce to $3.125\\%$?"),
  ])],
];

export const PHYSICS_3M_EXTRA = {
  "Current Electricity": CURRENT_ELECTRICITY_3M,
  "Moving Charges and Magnetism": MOVING_CHARGES_3M,
  "Magnetism and Matter": MAGNETISM_MATTER_3M,
  "Electromagnetic Induction": EMI_3M,
  "Ray Optics and Optical Instruments": RAY_OPTICS_3M,
  "Dual Nature of Radiation and Matter": DUAL_NATURE_3M,
  "Atoms": ATOMS_3M,
  "Nuclei": NUCLEI_3M,
};
