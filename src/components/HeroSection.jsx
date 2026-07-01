import {
  ArrowRight,
  Clock,
  ChevronRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { HERO_IMAGE, HERO_BG, PAGE_MAX } from '../data/constants'
import { RI } from '../data/realisticIcons'
import Header from './Header'
import RealisticIcon from './RealisticIcon'

const HELP_ITEMS = [
  { title: 'Find a Doctor', sub: 'Book an appointment', icon: RI.stethoscope, to: '/doctors' },
  { title: 'Book a Test', sub: 'Pathology, Radiology & More', icon: RI.lab, to: '/lab-services' },
  { title: 'Diagnostics & Lab Services', sub: 'Accurate. Reliable. Fast.', icon: RI.microscope, to: '/lab-services' },
  { title: 'Home Care Services', sub: 'Nursing, Physiotherapy & More', icon: RI.home, to: '/home-care' },
  { title: 'Emergency Consultation', sub: '24/7 Doctors On Call', icon: RI.ambulance, to: '/services' },
]

function HelpMenu({ className = '', compact = false }) {
  return (
    <div
      className={`bg-white/80 backdrop-blur-xl rounded-[20px] sm:rounded-[22px] shadow-lg border border-white/70 ${
        compact ? 'p-4' : 'p-3.5 sm:p-4'
      } ${className}`}
    >
      <h3 className={`text-gray-600 font-medium mb-3 px-0.5 ${compact ? 'text-[13px]' : 'text-[13px] sm:text-sm'}`}>
        How can we help you today?
      </h3>
      <div className="space-y-2">
        {HELP_ITEMS.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="bg-white rounded-xl px-3 py-2.5 flex items-center justify-between cursor-pointer hover:shadow-sm transition-shadow group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <RealisticIcon
                src={item.icon}
                alt={item.title}
                size="xs"
                className={compact ? 'w-[22px] h-[22px]' : 'w-6 h-6'}
              />
              <div className="min-w-0">
                <h4
                  className={`text-[#102a5e] font-semibold leading-tight ${
                    compact ? 'text-[12px]' : 'text-[12px] sm:text-sm'
                  }`}
                >
                  {item.title}
                </h4>
                <p className={`text-gray-400 leading-tight truncate ${compact ? 'text-[10px]' : 'text-[10px] sm:text-xs'}`}>
                  {item.sub}
                </p>
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-gray-300 group-hover:text-blue-500" />
          </Link>
        ))}
      </div>
      <div className={`mt-3 flex items-center justify-between px-0.5 ${compact ? 'text-[11px]' : 'text-[10px] sm:text-[11px]'}`}>
        <div className="flex items-center gap-1.5 text-gray-500">
          <Clock className="w-3 h-3" />
          <span>24/7 Assistance</span>
        </div>
        <div className="flex items-center gap-1.5 text-green-600 font-medium">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          <span>Online</span>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative w-full z-10">
      <div className="absolute inset-0 z-0">
        <img src={HERO_BG} alt="" className="w-full h-full min-h-[640px] md:min-h-[580px] object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/60 md:bg-gradient-to-r md:from-white/72 md:via-white/38 md:to-transparent md:w-[58%]" />
      </div>

      <Header />

      <div className={`relative z-10 ${PAGE_MAX} pt-2 sm:pt-4 pb-4 md:pb-6`}>
        <div className="flex flex-col md:flex-row md:items-end md:gap-4 lg:gap-6">
          <div className="md:w-[38%] lg:w-[36%] xl:w-[34%] shrink-0 space-y-4 sm:space-y-5 py-2 md:py-5 md:pb-8 self-center md:self-auto">
            <p className="text-red-500 font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-[11px] uppercase">
              Compassionate Care.
            </p>
            <h2 className="font-serif-display text-[clamp(1.55rem,2.5vw,2.75rem)] font-bold text-[#102a5e] leading-[1.2]">
              Compassionate Family Healthcare for Every Generation
            </h2>
            <p className="text-[#4a5568] text-[12px] sm:text-[13px] md:text-sm leading-[1.65] max-w-[28rem]">
              Integrated outpatient care, diagnostics, expert doctors, women&apos;s health, child care & home healthcare — all
              under one roof, for your family&apos;s complete well-being.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 pt-1">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-[#102a5e] text-white px-5 sm:px-6 py-2.5 rounded-full font-semibold hover:bg-blue-900 transition-colors text-[11px] tracking-wide w-full sm:w-auto"
              >
                EXPLORE SERVICES
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-white text-[#102a5e] border border-[#102a5e]/20 px-5 sm:px-6 py-2.5 rounded-full font-semibold hover:border-[#102a5e]/40 transition-colors text-[11px] tracking-wide w-full sm:w-auto"
              >
                BOOK APPOINTMENT
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="md:hidden flex flex-col items-center gap-5 mt-4">
            <HelpMenu className="w-full max-w-md" />
            <img
              src={HERO_IMAGE}
              alt="Doctor with family at Family Cure Clinic"
              className="h-[220px] sm:h-[280px] w-auto max-w-full object-contain object-bottom drop-shadow-md"
            />
          </div>

          <div className="hidden md:flex flex-1 items-end justify-between gap-3 lg:gap-5 min-h-[420px] lg:min-h-[460px] min-w-0 relative z-[5]">
            <div className="shrink-0 w-[220px] lg:w-[250px] xl:w-[272px] self-center mb-6 lg:mb-10 z-20">
              <HelpMenu compact className="bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />
            </div>

            <div className="flex-1 flex justify-end items-end min-w-0 h-full pb-0">
              <img
                src={HERO_IMAGE}
                alt="Doctor with family at Family Cure Clinic"
                className="h-[min(440px,50vh)] lg:h-[min(480px,54vh)] xl:h-[min(520px,56vh)] w-auto max-w-full object-contain object-bottom drop-shadow-[0_10px_24px_rgba(16,42,94,0.1)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}