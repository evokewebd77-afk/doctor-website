import { RI } from './realisticIcons'

export const LAB_HERO_IMAGE =
  'https://res.cloudinary.com/drm8wdb7m/image/upload/f_auto,q_90,dpr_auto,w_3200,c_limit/v1784780779/ChatGPT_Image_Jul_23_2026_09_55_54_AM_e1nbgz.png'

export const LAB_TECH_IMAGE =
  'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782887401/ChatGPT_Image_Jul_1_2026_11_59_37_AM_ecgrqh.png'

export const LAB_CTA_IMAGE =
  'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782894476/ChatGPT_Image_Jul_1__2026__01_56_39_PM-removebg-preview_xvepxu.png'

export const LAB_HERO_FEATURES = [
  { label: 'Precise Results', sublabel: '100% Accuracy', icon: RI.target },
  { label: 'Advanced Technology', sublabel: 'Modern Equipment', icon: RI.cpu },
  { label: 'Fast Turnaround', sublabel: 'Timely Reporting', icon: RI.clock },
]

export const LAB_STATS = [
  { value: '500+', label: 'Tests Offered', icon: RI.lab },
  { value: '98%', label: 'Accuracy Rate', icon: RI.verified },
  { value: '24/7', label: 'Lab Support', icon: RI.clock },
  { value: '10K+', label: 'Happy Patients', icon: RI.users },
]

export const LAB_SERVICES = [
  {
    title: 'Hematology',
    desc: 'Complete blood count, coagulation studies and anemia profiling with precision.',
    icon: RI.droplets,
    tests: ['Complete Blood Count (CBC)', 'Hemoglobin (Hb)', 'ESR', 'Peripheral Blood Smear', 'Coagulation Profile (PT/INR, aPTT)', 'Platelet Count', 'Reticulocyte Count', 'Iron Studies'],
  },
  {
    title: 'Microbiology',
    desc: 'Culture, sensitivity and infection detection for accurate diagnosis.',
    icon: RI.microscope,
    tests: ['Blood Culture', 'Urine Culture & Sensitivity', 'Sputum Culture', 'Wound Swab Culture', 'Stool Culture', 'Antibiotic Sensitivity Testing', 'AFB Smear & Culture'],
  },
  {
    title: 'Urinalysis',
    desc: 'Comprehensive urine analysis for kidney, metabolic and urinary health.',
    icon: RI.lab,
    tests: ['Routine Urine Examination', 'Urine Microalbumin', '24-Hour Urine Protein', 'Urine Creatinine', 'Urine Culture', 'Urine Drug Screen', 'Urine Pregnancy Test'],
  },
  {
    title: 'Biochemistry',
    desc: 'Liver, kidney, lipid and glucose panels for complete metabolic insight.',
    icon: RI.atom,
    tests: ['Liver Function Test (LFT)', 'Kidney Function Test (KFT)', 'Lipid Profile', 'Blood Sugar (Fasting/PP)', 'HbA1c', 'Electrolytes (Na, K, Cl)', 'Uric Acid', 'Calcium & Phosphorus'],
  },
  {
    title: 'Immunology',
    desc: 'Allergy, autoimmune and immune function testing with advanced assays.',
    icon: RI.shield,
    tests: ['ANA (Antinuclear Antibody)', 'Rheumatoid Factor (RF)', 'CRP & hs-CRP', 'IgE Total & Specific', 'Allergy Panel', 'Complement C3 & C4', 'Anti-dsDNA', 'Immunoglobulin Profile'],
  },
  {
    title: 'Histopathology',
    desc: 'Tissue biopsy analysis and cytology for definitive disease diagnosis.',
    icon: RI.layers,
    tests: ['Tissue Biopsy', 'FNAC (Fine Needle Aspiration)', 'Pap Smear', 'Frozen Section', 'Immunohistochemistry (IHC)', 'Special Stains', 'Cytology'],
  },
  {
    title: 'Serology',
    desc: 'Antibody and antigen detection for infectious and chronic diseases.',
    icon: RI.virus,
    tests: ['HIV Test (ELISA)', 'HBsAg (Hepatitis B)', 'HCV Antibody', 'VDRL/RPR (Syphilis)', 'Widal Test (Typhoid)', 'Dengue NS1 & IgM', 'Malaria Antigen Test', 'COVID-19 Antibody'],
  },
  {
    title: 'Molecular Diagnostics',
    desc: 'PCR and genetic testing for rapid, highly specific results.',
    icon: RI.dna,
    tests: ['RT-PCR (COVID, TB, etc.)', 'HPV DNA Typing', 'Hepatitis B & C Viral Load', 'HIV Viral Load', 'Gene Mutation Analysis', 'Genetic Screening Panels'],
  },
  {
    title: 'Hormone Assays',
    desc: 'Thyroid, reproductive and endocrine hormone level testing.',
    icon: RI.heart,
    tests: ['Thyroid Profile (T3, T4, TSH)', 'Testosterone', 'Estradiol', 'Prolactin', 'FSH & LH', 'Cortisol', 'Insulin Fasting', 'Vitamin D (25-OH)'],
  },
  {
    title: 'Specialized Tests',
    desc: 'Custom panels and rare diagnostics tailored to clinical needs.',
    icon: RI.clipboard,
    tests: ['Tumor Markers (PSA, CA-125, AFP)', 'Autoimmune Panels', 'Drug Monitoring', 'Heavy Metal Testing', 'Karyotyping', 'Flow Cytometry', 'Bone Marrow Biopsy'],
  },
]

export const LAB_TECH_CHECKLIST = [
  'NABL & ISO Certified Lab',
  'Quality Assured Processes',
  'Automated Analyzers & AI-Assisted Reporting',
  'Strict Sample Handling Protocols',
  'Expert Pathologist Review',
]

export const LAB_WHY_CHOOSE = [
  {
    title: 'Expert Pathologists',
    desc: 'Experienced team ensuring accurate interpretation.',
    icon: RI.doctor,
  },
  {
    title: 'Quality Assurance',
    desc: 'Strict quality control and international standards.',
    icon: RI.verified,
  },
  {
    title: 'Timely Reports',
    desc: 'Fast turnaround time for all test results.',
    icon: RI.file,
  },
  {
    title: 'Patient Convenience',
    desc: 'Easy sample collection and online reports.',
    icon: RI.clock,
  },
  {
    title: 'Confidential & Secure',
    desc: 'Your data is safe with high privacy standards.',
    icon: RI.lock,
  },
]
