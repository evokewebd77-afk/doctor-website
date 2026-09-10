import { RI } from './realisticIcons'
import { DOCTORS_LIST } from './doctorsData'

export const GM_HERO_BG =
  'https://res.cloudinary.com/j6lurplk/image/upload/v1783404356/hero_bg_no_doctor_clean_medical_sw5wnb.png'

export const GM_HERO_IMAGE = '/gen-hero.png'

export const GM_HERO_BOTTOM_FEATURES = [
  { label: 'Expert Physicians', sublabel: 'Experienced & Caring', icon: RI.doctor, accent: 'blue' },
  { label: 'Insurance Accepted', sublabel: 'All Major Plans', icon: RI.shield, accent: 'green' },
  { label: 'Personalized Care', sublabel: 'Tailored For You', icon: RI.heart, accent: 'red' },
  { label: 'Continuous Support', sublabel: 'Follow-Up & Guidance', icon: RI.onlineSupport, accent: 'purple' },
]

export const GM_CONDITIONS = [
  'Fever & Infections',
  'Diabetes Management',
  'Hypertension (BP)',
  'Thyroid Disorders',
  'Respiratory Issues',
  'Gastric Problems',
  'Fatigue & Weakness',
  'Seasonal Illnesses',
  'Preventive Health Checkups',
  'Vaccination & Immunization',
]

export const GM_TREATMENT_CARDS = [
  {
    title: 'Chronic Disease Management',
    desc: 'Long-term care plans for diabetes, hypertension, thyroid & other chronic conditions with regular monitoring.',
    icon: RI.heart,
    image: 'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782882906/ChatGPT_Image_Jul_1_2026_10_43_01_AM_5_jythjo.png',
    accent: 'red',
  },
  {
    title: 'Preventive Care & Health Checkups',
    desc: 'Routine screenings, wellness exams & early detection to keep you healthy at every stage of life.',
    icon: RI.shield,
    image: 'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782803298/ChatGPT_Image_Jun_30_2026_12_28_40_PM_ivxuql.png',
    accent: 'yellow',
  },
]

export const GM_WHY_CHOOSE = [
  { title: 'Experienced Doctors', desc: 'Qualified physicians with years of clinical expertise.', icon: RI.doctor, accent: 'blue' },
  { title: 'Modern Facilities', desc: 'ECG, nebulizer, diagnostics & day care on-site.', icon: RI.hospital, accent: 'green' },
  { title: 'Safe & Hygienic', desc: 'Clean, comfortable environment for every visit.', icon: RI.shield, accent: 'yellow' },
  { title: 'Patient-Centered Care', desc: 'We listen, explain & tailor treatment to your needs.', icon: RI.heart, accent: 'red' },
  { title: 'Convenient & Timely', desc: 'Easy appointments & same-day consultations available.', icon: RI.clock, accent: 'purple' },
]

export const GM_DOCTOR = DOCTORS_LIST.find((d) => d.specialty === 'General Medicine')

export const GM_DOCTOR_STATS = [
  { value: '20+', label: 'Experience', icon: RI.calendar },
  { value: '5000+', label: 'Happy Patients', icon: RI.users },
  { value: '98%', label: 'Satisfaction', icon: RI.verified },
]

export const GM_OPD_TIMINGS = 'Morning: 9:30 AM – 1:00 PM | Evening: 5:00 PM – 8:00 PM | Sun: By Appointment'

export const GM_BOOKING_STEPS = ['Pick Date', 'Select Time', 'Appointment Summary']

export const GM_TIME_SLOTS = {
  Morning: ['9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'],
  Evening: ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'],
}

export const GM_INFO_ITEMS = [
  { title: 'Insurance Accepted', desc: 'Cashless & reimbursement support', icon: RI.shield },
  { title: 'Online Consultation', desc: 'Teleconsultation available', icon: RI.video },
  { title: 'Affordable Care', desc: 'Transparent & fair pricing', icon: RI.money },
]

export const GM_STATS = [
  { value: '5000+', label: 'Happy Patients', icon: RI.users },
  { value: '20+', label: 'Years Experience', icon: RI.calendar },
  { value: '6 Days', label: 'OPD Available', icon: RI.clock },
  { value: '98%', label: 'Patient Satisfaction', icon: RI.verified },
]
