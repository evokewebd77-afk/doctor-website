import { RI } from './realisticIcons'
import {
  CLINIC_PHONE,
  CLINIC_PHONE_DISPLAY_FULL,
  CLINIC_WHATSAPP_URL,
  CLINIC_MAPS_URL,
  CLINIC_ADDRESS_LINE1,
  CLINIC_ADDRESS_LINE2,
  CLINIC_FACILITIES,
  CLINIC_EMAIL,
} from './constants'

export const CONTACT_HERO_IMAGE = '/contact.png'

export const CONTACT_HERO_VIDEO =
  'https://res.cloudinary.com/dwnnakrrh/video/upload/v1782899968/AQNk-ty4JTAQN-kQ3aaNQA_PnlZ1r-ZlkM8FnflXtXVQAyz_fbgiQU9zBb9eqUBsE9tLxOt9WjQUWm2hgA4GTz13JkC0is0i3paEPCwo1rbrv9FsTL3Tk1x4Nmz8tq8b.mp4_uqkq3v.mp4'

export const CONTACT_URGENT_BG =
  'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782902185/ChatGPT_Image_Jul_1__2026__04_03_52_PM-removebg-preview_4_djc4zn.png'

export const CONTACT_CARDS = [
  {
    title: 'Call Us',
    value: CLINIC_PHONE_DISPLAY_FULL,
    subtext: 'Mon - Sun | 24x7 Support',
    href: `tel:${CLINIC_PHONE}`,
    image: RI.phone,
  },
  {
    title: 'WhatsApp Support',
    value: CLINIC_PHONE_DISPLAY_FULL,
    subtext: 'Quick Replies & Assistance',
    href: CLINIC_WHATSAPP_URL,
    image: RI.whatsapp,
    external: true,
  },
  {
    title: 'Email Us',
    value: CLINIC_EMAIL,
    subtext: 'We respond within 24 hours',
    href: `mailto:${CLINIC_EMAIL}`,
    image: RI.email,
  },
  {
    title: 'Visit Clinic',
    value: 'Find our clinic location',
    subtext: 'Get directions on map',
    href: CLINIC_MAPS_URL,
    image: RI.location,
    external: true,
  },
]

export const CONTACT_FORM_SERVICES = [
  'General Consultation',
  'Lab Test / Diagnostics',
  'Home Care',
  'Teleconsultation',
  'ECG / Nebulizer',
  'Day Care Facility',
  'Other',
]

export const CONTACT_INFO_ROWS = [
  {
    image: RI.location,
    title: 'Clinic Address',
    lines: ['Family Cure Clinic', CLINIC_ADDRESS_LINE1, CLINIC_ADDRESS_LINE2, CLINIC_FACILITIES],
    facilitiesLine: CLINIC_FACILITIES,
    thumbnail:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=160&h=100&q=80',
    badge: null,
  },
  {
    image: RI.clock,
    title: 'Working Hours',
    lines: ['Morning: 9:30 AM – 1:00 PM', 'Evening: 5:00 PM – 8:00 PM', 'Sunday: By Appointment'],
    badge: null,
  },
  {
    image: RI.ambulance,
    title: 'Emergency / 24x7 Support',
    lines: ["For medical emergencies, we're available 24x7 for immediate assistance."],
    badge: { label: CLINIC_PHONE_DISPLAY_FULL, href: CLINIC_WHATSAPP_URL, style: 'border-red-300 text-red-600' },
  },
  {
    image: RI.video,
    title: 'Teleconsultation',
    lines: ['Consult with our doctors from the comfort of your home via Video Consultation.'],
    badge: { label: 'Available Daily', style: 'border-blue-300 text-blue-600' },
  },
  {
    image: RI.home,
    title: 'Home Care Service Area',
    lines: ['We provide home care services within 10-15 km from our clinic location.'],
    badge: { label: 'Mohali & Nearby', style: 'border-green-300 text-green-600' },
  },
]

export const WHY_REACH_US = [
  {
    title: 'Easy Appointment Booking',
    desc: 'Book appointments quickly online, by call or WhatsApp.',
    image: RI.planner,
    accent: 'bg-blue-50',
  },
  {
    title: 'Fast Patient Support',
    desc: 'Our team is always ready to assist you with care.',
    image: RI.headset,
    accent: 'bg-violet-50',
  },
  {
    title: 'Lab Assistance',
    desc: 'Information, bookings and reports — all support in one place.',
    image: RI.lab,
    accent: 'bg-green-50',
  },
  {
    title: 'Home Care Coordination',
    desc: 'We help you with professional care at your doorstep.',
    image: RI.home,
    accent: 'bg-amber-50',
  },
]

export const CONTACT_QUICK_HELP = [
  {
    title: 'Appointment Help',
    desc: 'Need help booking an appointment with the right doctor?',
    link: 'Contact Our Team',
    image: RI.calendar,
  },
  {
    title: 'Insurance & Billing Queries',
    desc: "Have questions about insurance or billing? We're here to help.",
    link: 'Get Assistance',
    image: RI.shield,
  },
  {
    title: 'Teleconsultation Support',
    desc: 'Facing issues joining a video call or need guidance?',
    link: 'Get Support',
    image: RI.video,
  },
]

export const CONTACT_SECTION_ICONS = {
  form: RI.mail,
  map: RI.location,
  whyReach: RI.star,
  send: RI.send,
  facilities: RI.stethoscope,
}
