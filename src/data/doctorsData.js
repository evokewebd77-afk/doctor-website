import { RI } from './realisticIcons'

export const DOCTORS_HERO_BG =
  'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782905713/ChatGPT_Image_Jul_1_2026_05_04_52_PM_an3tvz.png'

export const DOCTORS_HERO_AVATAR =
  'https://res.cloudinary.com/dwnnakrrh/video/upload/v1782802173/d4797f1a981d490a87d4b242ede82d97_afgwsr.webm'

export const DOCTORS_LIST = [
  {
    name: 'Dr. Gurvinder Singh',
    qualifications: 'MD Physician, FICM, ICCMID',
    specialty: 'General Medicine',
    rating: '4.9',
    bio: 'Expert in diabetes, hypertension, infectious diseases, thyroid disorders and chronic disease management for adults and families.',
    image: 'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782807406/ChatGPT_Image_Jun_30_2026_01_04_44_PM_3_sgbwrb.png',
    highlights: [
      { text: '15+ Years of Experience', icon: RI.calendar },
      { text: 'Diabetes & Hypertension Care', icon: RI.heart },
      { text: 'Preventive Health Checkups', icon: RI.shield },
      { text: 'Chronic Disease Management', icon: RI.stethoscope },
    ],
  },
  {
    name: 'Dr. Pooja Jafra',
    qualifications: 'MBBS, MS, DNB (Obs & Gynae)',
    specialty: 'Obstetrics & Gynaecology',
    rating: '4.9',
    bio: "Specialist in pregnancy care, high-risk pregnancy, infertility evaluation and comprehensive women's health at every life stage.",
    image: 'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782807406/ChatGPT_Image_Jun_30_2026_01_04_44_PM_2_gjy2cd.png',
    highlights: [
      { text: '12+ Years of Experience', icon: RI.calendar },
      { text: 'Pregnancy & Maternity Care', icon: RI.baby },
      { text: "Women's Health Specialist", icon: RI.woman },
      { text: 'High-Risk Pregnancy Care', icon: RI.heart },
    ],
  },
  {
    name: 'Dr. Bikramjit Singh Jafra',
    qualifications: 'MBBS, DNB Pediatrics, FIAP Neonatology',
    specialty: 'Pediatrics & Neonatology',
    rating: '4.8',
    bio: 'Dedicated to child care, newborn care, immunization, growth monitoring and compassionate treatment for infants and adolescents.',
    image: 'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782807405/ChatGPT_Image_Jun_30_2026_01_04_43_PM_1_dqytyw.png',
    highlights: [
      { text: '10+ Years of Experience', icon: RI.calendar },
      { text: 'Newborn & Child Care', icon: RI.baby },
      { text: 'Vaccination & Immunization', icon: RI.syringe },
      { text: 'Growth & Development', icon: RI.verified },
    ],
  },
]

export const DOCTORS_WHY_CHOOSE = [
  {
    title: 'Experienced & Qualified',
    desc: 'Board-certified specialists with years of clinical expertise across multiple disciplines.',
    icon: RI.doctor,
  },
  {
    title: 'Patient-Centered Care',
    desc: 'We listen, explain, and tailor every treatment plan to your unique health needs.',
    icon: RI.handHeart,
  },
  {
    title: 'Ethical & Transparent',
    desc: 'Honest guidance, clear communication, and care you can trust at every visit.',
    icon: RI.shield,
  },
  {
    title: 'Timely & Accessible',
    desc: 'Easy appointments, same-day consultations, and support when you need it most.',
    icon: RI.clock,
  },
]
