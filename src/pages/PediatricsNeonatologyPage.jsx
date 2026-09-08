import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  Phone,
  User,
} from 'lucide-react'
import Header from '../components/Header'
import CloudinaryImage from '../components/media/CloudinaryImage'
import RealisticIcon from '../components/RealisticIcon'
import {
  PAGE_MAX,
  CLINIC_PHONE,
  CLINIC_PHONE_DISPLAY_FULL,
  CLINIC_WHATSAPP_URL,
  TRUST_BANNER_IMAGE,
} from '../data/constants'
import { RI } from '../data/realisticIcons'
import { DOCTORS_LIST } from '../data/doctorsData'

const PEDIATRIC_DOCTOR = DOCTORS_LIST.find((d) => d.specialty === 'Pediatrics & Neonatology')

const HERO_BG =
  'https://res.cloudinary.com/j6lurplk/image/upload/v1783917530/ChatGPT_Image_Jul_13_2026_10_06_21_AM_vjgsas.png'

const HERO_IMAGE =
  'https://res.cloudinary.com/drm8wdb7m/image/upload/f_auto,q_90,dpr_auto,w_3200,c_limit/v1784623570/ChatGPT_Image_Jul_21_2026_02_15_30_PM_pigbcq.png'

const NEWBORN_IMAGE =
  'https://res.cloudinary.com/j6lurplk/image/upload/v1783917525/c00bde35-b54e-4235-bd58-bc4a1566a248_ut8xis.png'

const CHILD_IMAGE =
  'https://res.cloudinary.com/j6lurplk/image/upload/v1783917516/326adf79-3eba-4cb1-9ca0-e501b8d251da_p899ro.png'

const HERO_FEATURES = [
  { label: 'Newborn Care', sublabel: 'Gentle care for healthy newborns.', icon: RI.baby, accent: 'pink' },
  { label: 'Immunization', sublabel: 'Safe & timely vaccinations.', icon: RI.syringe, accent: 'purple' },
  { label: 'Growth & Development', sublabel: 'Monitor growth & achieve milestones.', icon: RI.verified, accent: 'blue' },
  { label: 'Illness Treatment', sublabel: 'Expert care for common illnesses.', icon: RI.stethoscope, accent: 'yellow' },
  { label: 'Nutrition Guidance', sublabel: 'Balanced nutrition for healthy growth.', icon: RI.heart, accent: 'red' },
  { label: 'Adolescent Health', sublabel: 'Support for teens & young adults.', icon: RI.users, accent: 'cyan' },
]

const CONDITIONS = [
  'Newborn and neonatal care',
  'Infant and child health check-ups',
  'Fever, cough, cold & infections',
  'Vaccination and immunization',
  'Growth and development monitoring',
  'Nutrition and feeding guidance',
  'Respiratory problems, asthma and allergies',
  'Stomach problems and digestion issues',
  'Adolescent health concerns',
  'Anemia, weakness and fatigue',
]

const TREATMENT_CARDS = [
  {
    title: 'Newborn & Infant Care',
    desc: 'Specialized care for newborns including feeding support, healthy growth tracking, vaccination and early nutrition guidance for a strong start.',
    icon: RI.baby,
    image: NEWBORN_IMAGE,
    accent: 'pink',
  },
  {
    title: 'Child & Adolescent Care',
    desc: 'Comprehensive healthcare for growing children and teens — from routine checkups and illness management to mental wellness and preventive care.',
    icon: RI.users,
    image: CHILD_IMAGE,
    accent: 'purple',
  },
]

const WHY_CHOOSE = [
  { title: 'Experienced Pediatric Specialists', desc: 'Qualified doctors with expertise in child and newborn care.', icon: RI.doctor, accent: 'pink' },
  { title: 'Gentle & Child-Friendly Care', desc: 'A warm, comforting environment designed for young patients.', icon: RI.heart, accent: 'purple' },
  { title: 'Complete Age-Wise Care', desc: 'From newborns to adolescents — care at every stage of growth.', icon: RI.baby, accent: 'blue' },
  { title: 'Preventive & Wellness Focus', desc: 'Vaccinations, screenings and guidance to keep children healthy.', icon: RI.shield, accent: 'yellow' },
  { title: 'Timely Follow-Up & Support', desc: 'Continuous monitoring and guidance for parents and children.', icon: RI.clock, accent: 'cyan' },
]

const DOCTOR_HIGHLIGHTS = [
  { text: 'Neonatal & Newborn Care', icon: RI.baby },
  { text: 'Child & Adolescent Health', icon: RI.users },
  { text: 'Vaccination & Immunization', icon: RI.syringe },
  { text: 'Growth & Development Monitoring', icon: RI.verified },
]

const DOCTOR_STATS = [
  { value: '10+', label: 'Years Experience', icon: RI.calendar },
  { value: '5000+', label: 'Happy Patients', icon: RI.users },
  { value: '98%', label: 'Patient Satisfaction', icon: RI.verified },
]

const INFO_ITEMS = [
  { title: 'Insurance Accepted', desc: 'Cashless & reimbursement support available.', icon: RI.shield },
  { title: 'Online Consultation', desc: 'Consult our specialists from the comfort of your home.', icon: RI.video },
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

const CONSULTATION_FEE = '₹600'

const TIME_SLOTS = {
  Morning: ['9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'],
  Evening: ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'],
}

const STEP_LABELS = ['Pick Date', 'Select Time', 'Appointment Summary']
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const ACCENT_STYLES = {
  pink: 'bg-pink-50 border-pink-100',
  purple: 'bg-purple-50 border-purple-100',
  blue: 'bg-blue-50 border-blue-100',
  teal: 'bg-teal-50 border-teal-100',
  amber: 'bg-amber-50 border-amber-100',
  green: 'bg-green-50 border-green-100',
}

function buildCalendarDays(year, month) {
  const first = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < first; i += 1) cells.push(null)
  for (let day = 1; day <= total; day += 1) cells.push(day)
  return cells
}

export default function PediatricsNeonatologyPage() {
  const [activeTab, setActiveTab] = useState('doctor')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())
  const [selectedDay, setSelectedDay] = useState(today.getDate())
  const [selectedSlot, setSelectedSlot] = useState('9:30 AM')
  const [activeStep, setActiveStep] = useState(1)

  const monthLabel = new Date(year, month).toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  })
  const calendarDays = buildCalendarDays(year, month)

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear((y) => y - 1) } else setMonth((m) => m - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear((y) => y + 1) } else setMonth((m) => m + 1)
  }

  if (!PEDIATRIC_DOCTOR) return null

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
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.72)_42%,rgba(255,255,255,0.25)_100%)]" />
        </div>
        <Header />

        <div className={`${PAGE_MAX} relative z-10 pt-4 sm:pt-5 pb-8 sm:pb-10`}>
          <div className="mb-5 flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs text-gray-400">
            <Link to="/" className="hover:text-pink-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-pink-500 transition-colors">Services</Link>
            <span>/</span>
            <span className="font-medium text-[#102a5e]">Pediatrics & Neonatology</span>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-pink-500 sm:text-[11px]">
                  Pediatrics & Neonatology
                </span>
              </div>

              <h1 className="font-serif-display text-[1.85rem] font-bold leading-[1.1] text-[#102a5e] sm:text-[2.35rem] lg:text-[2.65rem]">
                Specialized Care for Newborns, Infants, Children & Adolescents
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-gray-500 sm:text-[15px]">
                Compassionate, expert pediatric care for every stage of your child&apos;s growth — from newborn
                wellness and vaccinations to illness treatment and adolescent health support.
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

            <div className="relative w-full aspect-[16/10.5] sm:aspect-auto sm:min-h-[380px] lg:min-h-[430px]">
              <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-[28px] border border-white/80 bg-white shadow-[0_18px_56px_rgba(16,42,94,0.14)]">
                <CloudinaryImage
                  src={HERO_IMAGE}
                  alt="Pediatric doctor examining a baby with parents"
                  variant="hero"
                  className="h-full w-full object-cover object-[center_20%]"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-[0_8px_32px_rgba(16,42,94,0.08)]">
            <div className="grid grid-cols-2 divide-y divide-gray-100 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-y-0">
              {HERO_FEATURES.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 px-3 py-4 text-center sm:px-4 sm:py-5">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full border ${ACCENT_STYLES[item.accent]}`}>
                    <RealisticIcon src={item.icon} alt={item.label} size="xs" />
                  </div>
                  <p className="text-[11px] font-bold leading-tight text-[#102a5e] sm:text-xs">{item.label}</p>
                  <p className="text-[9px] leading-snug text-gray-400 sm:text-[10px]">{item.sublabel}</p>
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
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-sm">
                  <Check className="h-3 w-3 stroke-[3] text-white" />
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
                    className="h-auto max-h-[130px] w-full object-contain object-center sm:max-h-[145px]"
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

      <section id="book-appointment" className={`${PAGE_MAX} pt-10 sm:pt-12 lg:pt-14 pb-4 sm:pb-5 scroll-mt-20`}>
        <div className="overflow-hidden rounded-3xl border border-[#1a3468] bg-[#0b1f45] shadow-[0_20px_60px_rgba(11,31,69,0.4)]">
          <div className="grid lg:grid-cols-[minmax(280px,36%)_1fr]">
            <div className="relative flex flex-col overflow-hidden border-b border-[#1a3468] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.18),transparent_55%),radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.12),transparent_50%)]" />

              <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <CloudinaryImage
                  src={PEDIATRIC_DOCTOR.image}
                  alt={PEDIATRIC_DOCTOR.name}
                  variant="portrait"
                  className="h-[260px] w-full object-cover object-top sm:h-[300px]"
                />
              </div>

              <div className="relative text-center lg:text-left">
                <span className="mb-3 inline-flex rounded-full border border-pink-400/35 bg-pink-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-pink-300">
                  Our Specialist
                </span>
                <h3 className="text-xl font-bold text-white sm:text-2xl">{PEDIATRIC_DOCTOR.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/65">{PEDIATRIC_DOCTOR.qualifications}</p>
                <p className="mt-1 text-sm font-medium text-white/80">{PEDIATRIC_DOCTOR.specialty}</p>
              </div>

              <ul className="relative mt-4 space-y-2">
                {DOCTOR_HIGHLIGHTS.map((item) => (
                  <li key={item.text} className="flex items-center gap-2 text-[11px] text-white/70">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <Check className="h-2.5 w-2.5 stroke-[3] text-emerald-400" />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>

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

            <div className="p-5 sm:p-7 lg:p-8">
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
                    <span className={`text-sm font-medium ${activeStep === index + 1 ? 'text-white' : 'text-white/45'}`}>
                      {step}
                    </span>
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-[#1e3d72] bg-[#091a38] p-4 sm:p-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                  <div>
                    <div className="mb-4 flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-[11px] font-bold text-white">1</span>
                      <span className="text-sm font-semibold text-white">Select Date</span>
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                      <button type="button" onClick={prevMonth} className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white" aria-label="Previous month">
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <span className="text-sm font-semibold text-white">{monthLabel}</span>
                      <button type="button" onClick={nextMonth} className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white" aria-label="Next month">
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mb-1.5 grid grid-cols-7 gap-1 text-center text-[10px] font-medium text-white/40">
                      {DAYS.map((d) => <span key={d} className="py-1">{d}</span>)}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {calendarDays.map((day, i) => (
                        <button
                          key={i}
                          type="button"
                          disabled={!day}
                          onClick={() => { if (day) { setSelectedDay(day); setActiveStep(2) } }}
                          className={`aspect-square rounded-lg text-xs font-medium transition-colors ${
                            !day ? 'invisible' : selectedDay === day
                              ? 'bg-pink-500 text-white shadow-[0_0_10px_rgba(236,72,153,0.4)]'
                              : 'text-white/85 hover:bg-white/10'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-[11px] font-bold text-white">2</span>
                        <span className="text-sm font-semibold text-white">Select Time</span>
                      </div>
                      <p className="shrink-0 text-right text-[11px] text-white/55 sm:text-xs">
                        Consultation Fee <span className="font-bold text-pink-400">{CONSULTATION_FEE}</span>
                      </p>
                    </div>
                    <div className="space-y-3.5">
                      {Object.entries(TIME_SLOTS).map(([period, slots]) => (
                        <div key={period}>
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">{period}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {slots.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => { setSelectedSlot(slot); setActiveStep(3) }}
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
                  {monthLabel.split(' ')[0]} {selectedDay}, {selectedSlot} with {PEDIATRIC_DOCTOR.name}
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

      <section className={`${PAGE_MAX} space-y-3 pb-4 sm:space-y-4 sm:pb-6`}>
        <img
          src={TRUST_BANNER_IMAGE}
          alt="Your Child's Health, Our Priority"
          loading="lazy"
          decoding="async"
          className="media-hd block h-auto w-full max-h-[150px] object-contain object-center sm:max-h-[170px] lg:max-h-[190px]"
        />

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-4">
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4 lg:col-span-3">
            {INFO_ITEMS.map((item) => (
              <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-[0_4px_20px_rgba(16,42,94,0.06)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-pink-100 bg-pink-50">
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
            <div className="mb-3 flex items-center gap-2">
              <RealisticIcon src={RI.headset} alt="" size="xs" className="opacity-90" />
              <h3 className="text-sm font-bold text-white sm:text-base">Need Help?</h3>
            </div>
            <p className="mb-3 text-[11px] leading-relaxed text-white/60 sm:text-xs">
              Call us for appointment booking or questions.
            </p>
            <a
              href={CLINIC_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-red-300 px-3 py-1.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 sm:text-base"
            >
              {CLINIC_PHONE_DISPLAY_FULL}
            </a>
            <p className="mt-2 text-[10px] text-white/60">Morning: 9:30 AM – 1:00 PM | Evening: 5:00 PM – 8:00 PM</p>
            <p className="text-[10px] text-amber-300">Sunday: By Appointment</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#233f7a] bg-[#0d2147] shadow-[0_12px_40px_rgba(13,33,71,0.24)]">
          <div className="flex flex-wrap divide-y divide-white/10 sm:flex-nowrap sm:divide-x sm:divide-y-0">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex w-1/2 flex-1 flex-col items-center gap-1.5 px-4 py-4 text-center sm:w-auto sm:py-5"
              >
                <RealisticIcon src={stat.icon} alt={stat.label} size="xs" className="opacity-90" />
                <p className="text-[24px] font-bold leading-none text-white sm:text-[28px]">{stat.value}</p>
                <p className="text-[10px] text-white/60 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${PAGE_MAX} pt-4 pb-10 sm:pb-12`}>
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
