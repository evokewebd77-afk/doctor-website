import { RI } from './realisticIcons'
import { DOCTORS_LIST } from './doctorsData'

export const SERVICES_HERO_IMAGE =
  'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782882460/ChatGPT_Image_Jul_1_2026_10_37_20_AM_ypqpjb.png'

export const SERVICES_CTA_IMAGE =
  'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782884401/ChatGPT_Image_Jul_1_2026_11_09_37_AM_gfpqkz.png'

export const SERVICES_HERO_FEATURES = [
  { label: 'Expert Doctors', sublabel: 'Experienced & Caring', icon: RI.doctor },
  { label: 'Advanced Technology', sublabel: 'Accurate & Reliable', icon: RI.hospital },
  { label: 'Personalized Care', sublabel: 'Treatment For You', icon: RI.heart },
  { label: 'Trusted by Families', sublabel: 'Your Health, Our Priority', icon: RI.users },
]

export const MEDICAL_SERVICES = [
  {
    title: 'General Medicine',
    desc: 'Treatment for common diseases, infections, fever, vaccine, diabetes, & preventive care.',
    icon: RI.stethoscope,
    image: 'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782882927/ChatGPT_Image_Jul_1_2026_10_42_59_AM_1_umpvau.png',
    to: '/services/general-medicine',
  },
  {
    title: 'Obstetrics & Gynecology',
    desc: "Complete women's healthcare including pregnancy care, maternal health & fertility.",
    icon: RI.woman,
    image: '/obgyn.jpg',
    imagePosition: 'object-[center_25%]',
    to: '/services/obstetrics-gynaecology',
  },
  {
    title: 'Pediatrics & Neonatology',
    desc: 'Expert newborn, infant, child & adolescent care with compassionate treatment.',
    icon: RI.baby,
    image: '/child.png',
    to: '/services/pediatrics-neonatology',
  },
  {
    title: 'Diagnostics & Lab Services',
    desc: 'Advanced blood tests, imaging & advanced diagnostics for precise results.',
    icon: RI.lab,
    image: 'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782882905/ChatGPT_Image_Jul_1_2026_10_43_01_AM_4_bczefa.png',
    to: '/lab-services',
  },
  {
    title: 'Physiotherapy',
    desc: 'Pain management, mobility improvement, strength restoration & post-surgery rehabilitation.',
    icon: RI.activity,
    image: 'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782897437/ChatGPT_Image_Jul_1_2026_02_46_40_PM_2_qqddzi.png',
    to: '/home-care',
  },
  {
    title: 'Health Packages',
    desc: 'Preventive health checkups and wellness packages for complete care.',
    icon: RI.package,
    image: 'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782882906/ChatGPT_Image_Jul_1_2026_10_43_05_AM_8_fcn0um.png',
    to: '/contact',
  },
]

export const SERVICES_EXTRA = [
  { label: 'Pharmacy & Medicines', icon: RI.pill },
  { label: 'Nursing & Home Care', icon: RI.handHeart },
  { label: 'Home Visit Consultation', icon: RI.housePlus },
  { label: 'Teleconsultation', icon: RI.video },
  { label: 'Vaccination Services', icon: RI.syringe },
  { label: 'Emergency Care 24/7', icon: RI.siren },
  { label: 'Ambulance Support', icon: RI.ambulance },
]

export const SERVICES_STATS = [
  { value: '50K+', label: 'Happy Patients', icon: RI.users },
  { value: '20+', label: 'Expert Doctors', icon: RI.stethoscope },
  { value: '15+', label: 'Specialities', icon: RI.hospital },
  { value: '₹2L+', label: 'Lab Tests Done', icon: RI.lab },
  { value: '24/7', label: 'Care & Support', icon: RI.clock },
]

export const SERVICES_DOCTORS = DOCTORS_LIST.map(({ name, qualifications, specialty, rating, image }) => ({
  name,
  qualifications,
  specialty,
  rating,
  image,
}))
