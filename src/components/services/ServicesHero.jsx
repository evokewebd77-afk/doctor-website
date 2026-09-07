import { ArrowRight, Calendar } from 'lucide-react'
import { PAGE_MAX } from '../../data/constants'
import { SERVICES_HERO_IMAGE, SERVICES_HERO_FEATURES } from '../../data/servicesData'
import Header from '../Header'
import RealisticIcon from '../RealisticIcon'
import CloudinaryImage from '../media/CloudinaryImage'

export default function ServicesHero() {
  return (
    <section className="relative w-full bg-[#f8fafe]">
      <Header />

      <div className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[580px]">
        <div className="absolute inset-0 overflow-hidden">
          <CloudinaryImage
            src={SERVICES_HERO_IMAGE}
            alt=""
            aria-hidden
            variant="hero"
            className="w-full h-full object-cover object-[80%_top] sm:object-[80%_top] lg:object-right-top pointer-events-none select-none"
          />
          {/* Mobile gradient (top-down) for text contrast */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-white via-white/90 to-transparent h-[90%] sm:h-[80%] w-full" />
          {/* Desktop gradient (left-to-right) */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-[75%]" />
        </div>

        <div className={`relative z-10 ${PAGE_MAX} flex flex-col justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] pt-5 sm:pt-10 lg:pt-12 pb-28 sm:pb-36`}>
          <div className="w-full lg:max-w-[44%] space-y-3.5 sm:space-y-5">
            <span className="inline-block bg-[#e8f1fd] text-blue-600 font-bold tracking-[0.12em] text-[10px] uppercase px-3.5 py-1 rounded-full">
              Our Services
            </span>

            <h1 className="font-serif-display text-[1.65rem] leading-[1.15] sm:text-[clamp(1.9rem,3.5vw,3rem)] font-bold text-[#102a5e]">
              Comprehensive Care for{' '}
              <span className="text-blue-600">Every Stage</span> of Life
            </h1>

            <p className="text-gray-500 text-[13px] sm:text-[15px] leading-relaxed">
              Exceptional care, advanced technology, and compassionate experts — all under one roof, for you and your
              family.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3 pt-0.5">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm w-full sm:w-auto"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-5 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 z-30 ${PAGE_MAX} translate-y-1/2`}>
          <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(16,42,94,0.12)] border border-gray-100 px-3 py-4 sm:px-6 sm:py-6 lg:px-10">
            {/* Mobile: horizontal scroll row */}
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:hidden -mx-1 px-1" style={{ scrollbarWidth: 'none' }}>
              {SERVICES_HERO_FEATURES.map((item) => (
                <div
                  key={item.label}
                  className="snap-start shrink-0 flex flex-col items-center text-center w-[78px] gap-1.5"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <RealisticIcon src={item.icon} alt={item.label} size="xs" />
                  </div>
                  <p className="text-[#102a5e] font-bold text-[9px] leading-tight">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Desktop: 4-column grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 lg:gap-y-0">
              {SERVICES_HERO_FEATURES.map((item) => (
                <div key={item.label} className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <RealisticIcon src={item.icon} alt={item.label} size="xs" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#102a5e] font-bold text-sm leading-tight">{item.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5 leading-snug">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
