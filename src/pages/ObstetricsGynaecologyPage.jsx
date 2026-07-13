import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Heart,
  Phone,
} from 'lucide-react'
import Header from '../components/Header'
import CloudinaryImage from '../components/media/CloudinaryImage'
import RealisticIcon from '../components/RealisticIcon'
import {
  PAGE_MAX,
  CLINIC_PHONE,
  CLINIC_PHONE_DISPLAY,
} from '../data/constants'
import { RI } from '../data/realisticIcons'
import { DOCTORS_LIST } from '../data/doctorsData'

const OBGYN_DOCTOR = DOCTORS_LIST.find((doctor) => doctor.specialty === 'Obstetrics & Gynaecology')

const HERO_BG =
  'https://res.cloudinary.com/j6lurplk/image/upload/v1783487760/ChatGPT_Image_Jul_8_2026_10_43_14_AM_lhg6d5.png'

const HERO_IMAGE =
  'https://res.cloudinary.com/j6lurplk/image/upload/v1783419963/ChatGPT_Image_Jul_7_2026_03_55_38_PM_njz9zo.png'

const TREATMENT_IMAGES = [
  'https://res.cloudinary.com/j6lurplk/image/upload/v1783491198/pregnancy_ultrasound_consultation_high_resolution_1_ptscob.png',
  'https://res.cloudinary.com/j6lurplk/image/upload/v1783491205/womens_health_consultation_high_resolution_jpks02.png',
]

const HERO_FEATURES = [
  { label: 'Pregnancy Care', sublabel: 'Complete antenatal support', icon: RI.baby, accent: 'pink' },
  { label: "Women's Wellness", sublabel: 'Holistic care for every stage', icon: RI.woman, accent: 'purple' },
  { label: 'Confidential Consultations', sublabel: 'Private, trusted care', icon: RI.shield, accent: 'blue' },
  { label: 'Continuous Support', sublabel: 'We stay with you throughout', icon: RI.onlineSupport, accent: 'purple' },
]

const CONDITIONS = [
  'Pregnancy & Antenatal Care',
  'Fertility Evaluation & Management',
  'High-Risk Pregnancy Care',
  'Menstrual Disorders',
  'PCOS & Hormonal Issues',
  'Menopause & Perimenopause Care',
  'Cervical & Breast Screening',
  'Gynaecological Infections',
]

const TREATMENT_CARDS = [
  {
    title: 'Pregnancy & Antenatal Care',
    desc: 'Complete maternity care from conception to delivery with regular monitoring, ultrasound guidance and personalized support for every pregnancy.',
    icon: RI.baby,
    image: TREATMENT_IMAGES[0],
    accent: 'pink',
  },
  {
    title: "Women's Health & Preventive Checkups",
    desc: 'Regular screenings, early detection and reproductive health counseling to keep you healthy at every stage of life.',
    icon: RI.shield,
    image: TREATMENT_IMAGES[1],
    accent: 'purple',
  },
]

const WHY_CHOOSE = [
  { title: 'Experienced Specialist', desc: 'Highly qualified women\'s health expert with years of clinical experience.', icon: RI.doctor, accent: 'pink' },
  { title: 'Modern Facilities', desc: 'Advanced technology and woman-friendly spaces.', icon: RI.hospital, accent: 'purple' },
  { title: 'Safe & Hygienic', desc: 'Clean treatment areas with strict hygiene protocols.', icon: RI.shield, accent: 'yellow' },
  { title: 'Patient-Centered Care', desc: 'Your comfort, dignity and well-being are our highest priority.', icon: RI.heart, accent: 'red' },
  { title: 'Confidential & Compassionate Care', desc: 'Private consultations built on trust and understanding.', icon: RI.handHeart, accent: 'blue' },
]

const DOCTOR_STATS = [
  { value: '15+', label: 'Years Experience', icon: RI.calendar },
  { value: '5000+', label: 'Happy Patients', icon: RI.users },
  { value: '98%', label: 'Patient Satisfaction', icon: RI.verified },
]

const INFO_ITEMS = [
  { title: 'Insurance Accepted', desc: 'Cashless & reimbursement support available.', icon: RI.shield },
  { title: 'Online Consultation', desc: 'Talk to our specialist from the comfort of your home.', icon: RI.video },
  { title: 'Affordable Care', desc: 'Transparent pricing and value-driven care.', icon: RI.money },
]

const FEATURE_STRIP = [
  { title: 'Cashless Insurance', desc: 'All major plans accepted', icon: RI.shield },
  { title: 'Online Reports', desc: 'View & download instantly', icon: RI.file },
  { title: 'Home Collection', desc: 'Lab tests at your doorstep', icon: RI.home },
  { title: 'Pharmacy Support', desc: 'Medicines delivered safely', icon: RI.pill },
  { title: 'Patient Support', desc: 'We are here to help', icon: RI.headset },
]

const STATS = [
  { value: '5000+', label: 'Happy Patients', icon: RI.users },
  { value: '15+', label: 'Years Experience', icon: RI.calendar },
  { value: '6 Days', label: 'OPD Available', icon: RI.clock },
  { value: '98%', label: 'Patient Satisfaction', icon: RI.verified },
]

const CONSULTATION_FEE = '₹800'

const TIME_SLOTS = {
  Morning: ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'],
  Afternoon: ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM'],
  Evening: ['5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'],
}

const STEP_LABELS = ['Pick Date', 'Select Time', 'Appointment Summary']
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const ACCENT_STYLES = {
  pink: 'bg-pink-50 border-pink-100',
  purple: 'bg-purple-50 border-purple-100',
  blue: 'bg-blue-50 border-blue-100',
  yellow: 'bg-amber-50 border-amber-100',
  red: 'bg-red-50 border-red-100',
}

function buildCalendarDays(year, month) {
  const first = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < first; i += 1) cells.push(null)
  for (let day = 1; day <= total; day += 1) cells.push(day)
  return cells
}

export default function ObstetricsGynaecologyPage() {
  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())
  const [selectedDay, setSelectedDay] = useState(today.getDate())
  const [selectedSlot, setSelectedSlot] = useState('9:00 AM')
  const [activeStep, setActiveStep] = useState(1)

  const monthLabel = new Date(year, month).toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  })
  const calendarDays = buildCalendarDays(year, month)

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11)
      setYear((value) => value - 1)
    } else {
      setMonth((value) => value - 1)
    }
  }

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0)
      setYear((value) => value + 1)
    } else {
      setMonth((value) => value + 1)
    }
  }

  if (!OBGYN_DOCTOR) return null

  return (
    <>
      <section className="relative w-full overflow-hidden pb-6 sm:pb-8">
        <div className="pointer-events-none absolute inset-0">
          <CloudinaryImage
            src={HERO_BG}
            alt=""
            aria-hidden
            variant="hero"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <Header variant="transparent" />

        <div className={`${PAGE_MAX} relative z-10 pt-4 sm:pt-5 pb-8 sm:pb-10`}>
          <div className="mb-5 flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs text-gray-400">
            <Link to="/" className="hover:text-pink-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-pink-500 transition-colors">Services</Link>
            <span>/</span>
            <span className="font-medium text-[#102a5e]">Obstetrics & Gynaecology</span>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-pink-500 sm:text-[11px]">
                  Obstetrics & Gynaecology
                </span>
              </div>

              <h1 className="font-serif-display text-[1.95rem] font-bold leading-[1.08] text-[#102a5e] sm:text-[2.45rem] lg:text-[2.8rem]">
                Expert Women&apos;s
                <br />
                Health Care for <span className="text-blue-600">Every</span>
                <br />
                Stage of Life
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-gray-500 sm:text-[15px]">
                Comprehensive care for pregnancy, reproductive health, menstrual concerns, fertility guidance and
                menopause support delivered with compassion, privacy and expert attention.
              </p>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <a
                  href="#book-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(37,99,235,0.28)] transition-colors hover:bg-blue-700"
                >
                  Book Appointment
                  <Calendar className="h-4 w-4" />
                </a>
                <a
                  href={`tel:${CLINIC_PHONE}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
                >
                  Call Now
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[430px]">
              <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_18px_56px_rgba(16,42,94,0.14)]">
                <CloudinaryImage
                  src={HERO_IMAGE}
                  alt="Female doctor consulting a pregnant patient during ultrasound"
                  variant="hero"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-[0_8px_32px_rgba(16,42,94,0.08)]">
            <div className="grid grid-cols-2 divide-y divide-gray-100 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {HERO_FEATURES.map((item) => (
                <div key={item.label} className="flex items-center gap-3 px-4 py-4 sm:px-6 sm:py-5">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${ACCENT_STYLES[item.accent]}`}>
                    <RealisticIcon src={item.icon} alt={item.label} size="xs" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold leading-tight text-[#102a5e] sm:text-sm">{item.label}</p>
                    <p className="mt-0.5 text-[10px] text-gray-400 sm:text-[11px]">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${PAGE_MAX} py-10 sm:py-12`}>
        <h2 className="mb-8 font-serif-display text-xl font-bold text-[#102a5e] sm:text-2xl lg:text-[1.85rem]">
          What We Treat
        </h2>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {CONDITIONS.map((condition) => (
              <div key={condition} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-500 shadow-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <span className="text-sm font-medium text-[#102a5e]">{condition}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {TREATMENT_CARDS.map((card) => (
              <div
                key={card.title}
                className="flex items-stretch overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_24px_rgba(16,42,94,0.08)]"
              >
                <div className="flex min-w-0 flex-1 items-center p-5 sm:p-6">
                  <div className="flex items-start gap-3.5">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${ACCENT_STYLES[card.accent]}`}>
                      <RealisticIcon src={card.icon} alt={card.title} size="xs" />
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-sm font-bold text-[#102a5e] sm:text-base">{card.title}</h3>
                      <p className="text-[11px] leading-relaxed text-gray-500 sm:text-xs">{card.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-[42%] max-w-[280px] shrink-0 items-center justify-center bg-[#f8fafe] p-2 sm:w-[240px] sm:p-2.5">
                  <CloudinaryImage
                    src={card.image}
                    alt={card.title}
                    variant="card"
                    className="h-auto max-h-[120px] w-full object-contain object-center sm:max-h-[132px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-10 sm:py-12">
        <div className={PAGE_MAX}>
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="font-serif-display text-xl font-bold text-[#102a5e] sm:text-2xl lg:text-[1.85rem]">
              Why Choose Family Cure Clinic?
            </h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-pink-500" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-[0_4px_20px_rgba(16,42,94,0.07)] sm:px-5 sm:py-6"
              >
                <div className={`mb-3.5 flex h-14 w-14 items-center justify-center rounded-2xl border ${ACCENT_STYLES[item.accent]}`}>
                  <RealisticIcon src={item.icon} alt={item.title} size="sm" />
                </div>
                <h3 className="mb-1.5 text-xs font-bold leading-snug text-[#102a5e] sm:text-sm">{item.title}</h3>
                <p className="text-[10px] leading-relaxed text-gray-500 sm:text-[11px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book-appointment" className={`${PAGE_MAX} py-10 sm:py-12 lg:py-14 scroll-mt-20`}>
        <div className="overflow-hidden rounded-3xl border border-[#1a3468] bg-[#0b1f45] shadow-[0_20px_60px_rgba(11,31,69,0.4)]">
          <div className="grid lg:grid-cols-[minmax(280px,36%)_1fr]">
            {/* Doctor profile */}
            <div className="relative flex flex-col overflow-hidden border-b border-[#1a3468] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.18),transparent_55%),radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.12),transparent_50%)]" />

              <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <CloudinaryImage
                  src={OBGYN_DOCTOR.image}
                  alt={OBGYN_DOCTOR.name}
                  variant="portrait"
                  className="h-[260px] w-full object-cover object-top sm:h-[300px]"
                />
              </div>

              <div className="relative text-center lg:text-left">
                <span className="mb-3 inline-flex rounded-full border border-blue-400/35 bg-blue-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-300">
                  Our Specialist
                </span>
                <h3 className="text-xl font-bold text-white sm:text-2xl">{OBGYN_DOCTOR.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/65">{OBGYN_DOCTOR.qualifications}</p>
                <p className="mt-1 text-sm font-medium text-white/80">{OBGYN_DOCTOR.specialty}</p>
              </div>

              <div className="relative mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                {DOCTOR_STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <RealisticIcon src={stat.icon} alt={stat.label} size="xs" className="mx-auto mb-1.5 opacity-90" />
                    <p className="text-sm font-bold leading-none text-white">{stat.value}</p>
                    <p className="mt-1 text-[9px] leading-tight text-white/45">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking widget */}
            <div className="p-5 sm:p-7 lg:p-8">
              {/* Step tabs */}
              <div className="mb-5 flex flex-wrap items-center gap-4 sm:gap-6">
                {STEP_LABELS.map((step, index) => (
                  <button
                    key={step}
                    type="button"
                    onClick={() => setActiveStep(index + 1)}
                    className="flex items-center gap-2.5"
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                        activeStep === index + 1
                          ? 'bg-blue-500 text-white shadow-[0_0_12px_rgba(59,130,246,0.45)]'
                          : 'border-2 border-white/25 text-white/50'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        activeStep === index + 1 ? 'text-white' : 'text-white/45'
                      }`}
                    >
                      {step}
                    </span>
                  </button>
                ))}
              </div>

              {/* Inner booking panel */}
              <div className="rounded-2xl border border-[#1e3d72] bg-[#091a38] p-4 sm:p-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                  {/* Calendar — dark theme */}
                  <div>
                    <div className="mb-4 flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-[11px] font-bold text-white">
                        1
                      </span>
                      <span className="text-sm font-semibold text-white">Select Date</span>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <button
                        type="button"
                        onClick={prevMonth}
                        className="rounded-lg p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Previous month"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <span className="text-sm font-semibold text-white">{monthLabel}</span>
                      <button
                        type="button"
                        onClick={nextMonth}
                        className="rounded-lg p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Next month"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mb-1.5 grid grid-cols-7 gap-1 text-center text-[10px] font-medium text-white/40">
                      {DAYS.map((day) => (
                        <span key={day} className="py-1">{day}</span>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {calendarDays.map((day, index) => (
                        <button
                          key={`${day}-${index}`}
                          type="button"
                          disabled={!day}
                          onClick={() => {
                            if (day) {
                              setSelectedDay(day)
                              setActiveStep(2)
                            }
                          }}
                          className={`aspect-square rounded-lg text-xs font-medium transition-colors ${
                            !day
                              ? 'invisible'
                              : selectedDay === day
                                ? 'bg-pink-500 text-white shadow-[0_0_10px_rgba(236,72,153,0.4)]'
                                : 'text-white/85 hover:bg-white/10'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time slots */}
                  <div>
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-[11px] font-bold text-white">
                          2
                        </span>
                        <span className="text-sm font-semibold text-white">Select Time</span>
                      </div>
                      <p className="shrink-0 text-right text-[11px] text-white/55 sm:text-xs">
                        Consultation Fee{' '}
                        <span className="font-bold text-pink-400">{CONSULTATION_FEE}</span>
                      </p>
                    </div>

                    <div className="space-y-3.5">
                      {Object.entries(TIME_SLOTS).map(([period, slots]) => (
                        <div key={period}>
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                            {period}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {slots.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => {
                                  setSelectedSlot(slot)
                                  setActiveStep(3)
                                }}
                                className={`rounded-lg border px-2.5 py-1.5 text-[10px] font-medium transition-colors sm:px-3 sm:text-[11px] ${
                                  selectedSlot === slot
                                    ? 'border-pink-500 bg-pink-500 text-white shadow-[0_0_8px_rgba(236,72,153,0.35)]'
                                    : 'border-[#2a4f8f] bg-[#0d2249] text-white/80 hover:border-pink-400/50'
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {activeStep === 3 && (
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/75 sm:text-sm">
                  <span className="font-semibold text-white">Appointment Summary:</span>{' '}
                  {monthLabel.split(' ')[0]} {selectedDay}, {selectedSlot} with {OBGYN_DOCTOR.name}
                </div>
              )}

              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#ff6fa8_0%,#ff4f93_100%)] py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(255,95,150,0.35)] transition-transform hover:-translate-y-px"
              >
                Confirm Appointment
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${PAGE_MAX} space-y-5 pb-4 sm:space-y-6`}>
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-4">
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4 lg:col-span-3">
            {INFO_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-[0_4px_20px_rgba(16,42,94,0.06)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-purple-50">
                  <RealisticIcon src={item.icon} alt={item.title} size="xs" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#102a5e] sm:text-sm">{item.title}</h3>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-gray-500 sm:text-[11px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#233f7a] bg-[#0d2147] px-5 py-5 shadow-[0_8px_32px_rgba(13,33,71,0.2)]">
            <h3 className="text-sm font-bold text-white sm:text-base">Need Help?</h3>
            <p className="mb-3 mt-1 text-[11px] leading-relaxed text-white/60 sm:text-xs">
              Call us for appointment booking or questions.
            </p>
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="flex items-center gap-2 text-base font-bold text-white transition-colors hover:text-pink-300 sm:text-lg"
            >
              <Phone className="h-5 w-5" />
              {CLINIC_PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-[10px] text-white/40">Mon - Sat: 9:00 AM - 8:00 PM</p>
            <p className="text-[10px] text-white/40">Sunday: 10:00 AM - 2:00 PM</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#233f7a] bg-[#0d2147] shadow-[0_12px_40px_rgba(13,33,71,0.24)]">
          <div className="grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 px-4 py-6 text-center sm:py-7">
                <RealisticIcon src={stat.icon} alt={stat.label} size="xs" className="opacity-90" />
                <p className="text-[24px] font-bold leading-none text-white sm:text-[28px]">{stat.value}</p>
                <p className="text-[10px] text-white/60 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${PAGE_MAX} pb-10 sm:pb-12`}>
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
            {FEATURE_STRIP.map((item) => (
              <div key={item.title} className="flex items-start gap-3 px-4 py-4 sm:px-5 sm:py-5">
                <RealisticIcon src={item.icon} alt={item.title} size="xs" className="mt-0.5 shrink-0 drop-shadow-sm" />
                <div>
                  <p className="text-xs font-bold leading-snug text-[#102a5e]">{item.title}</p>
                  <p className="mt-1 text-[10px] leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
