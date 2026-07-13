import { Link } from 'react-router-dom'
import { Calendar, Heart, Phone, Shield } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE } from '../../data/constants'
import { GM_HERO_BG, GM_HERO_IMAGE, GM_HERO_BOTTOM_FEATURES } from '../../data/generalMedicineData'
import { GM_ACCENT_RING } from './gmAccentStyles'
import Header from '../Header'
import RealisticIcon from '../RealisticIcon'
import CloudinaryImage from '../media/CloudinaryImage'

const HERO_HIGHLIGHTS = [
  {
    title: 'Patient First Approach',
    desc: 'Compassionate care tailored to your unique health needs.',
    icon: Heart,
    iconClass: 'text-red-500 fill-red-500',
    ring: 'bg-red-50 border-red-100',
  },
  {
    title: 'Trusted Care',
    desc: 'Reliable treatment you and your family can count on.',
    icon: Shield,
    iconClass: 'text-amber-500 fill-amber-400',
    ring: 'bg-amber-50 border-amber-100',
  },
]

export default function GMHero() {
  return (
    <section className="relative w-full overflow-hidden pb-6 sm:pb-8">
      <div className="absolute inset-0 pointer-events-none">
        <CloudinaryImage
          src={GM_HERO_BG}
          alt=""
          aria-hidden
          variant="hero"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <Header />

      <div className={`relative z-10 ${PAGE_MAX} pt-2 sm:pt-4`}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span className="text-red-500 font-bold tracking-[0.12em] text-[10px] sm:text-[11px] uppercase">
                General Medicine
              </span>
            </div>

            <h1 className="font-serif-display text-[1.85rem] sm:text-[2.35rem] lg:text-[2.65rem] font-bold text-[#102a5e] leading-[1.1]">
              Comprehensive Primary Care for{' '}
              <span className="text-blue-600">Adults</span>
            </h1>

            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-lg">
              Expert diagnosis and treatment for everyday health concerns, chronic conditions, and preventive care —
              helping you stay healthy at every stage of life.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                to="#book-appointment"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors shadow-[0_4px_16px_rgba(37,99,235,0.3)]"
              >
                Book Appointment
                <Calendar className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                Call Now
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {HERO_HIGHLIGHTS.map(({ title, desc, icon: Icon, iconClass, ring }) => (
                <div
                  key={title}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(16,42,94,0.07)] px-4 py-3.5 flex items-start gap-3"
                >
                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 ${ring}`}>
                    <Icon className={`w-4 h-4 ${iconClass}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[#102a5e] text-xs sm:text-sm leading-tight">{title}</p>
                    <p className="text-gray-500 text-[10px] sm:text-[11px] leading-relaxed mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(16,42,94,0.15)] border border-white/80">
              <CloudinaryImage
                src={GM_HERO_IMAGE}
                alt="General medicine doctor consulting a patient at Family Cure Clinic"
                variant="hero"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_32px_rgba(16,42,94,0.08)] border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {GM_HERO_BOTTOM_FEATURES.map((item) => (
              <div key={item.label} className="flex items-center gap-3 px-4 py-4 sm:px-6 sm:py-5">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${GM_ACCENT_RING[item.accent]}`}>
                  <RealisticIcon src={item.icon} alt={item.label} size="xs" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#102a5e] font-bold text-xs sm:text-sm leading-tight">{item.label}</p>
                  <p className="text-gray-400 text-[10px] sm:text-[11px] mt-0.5">{item.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
