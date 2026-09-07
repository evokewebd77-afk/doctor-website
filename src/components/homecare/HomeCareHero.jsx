import { Link } from 'react-router-dom'
import { Calendar, Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE } from '../../data/constants'
import { HOME_CARE_HERO_VIDEO, HOME_CARE_HERO_FEATURES } from '../../data/homeCareData'
import Header from '../Header'
import RealisticIcon from '../RealisticIcon'
import CloudinaryVideo from '../media/CloudinaryVideo'

export default function HomeCareHero() {
  return (
    <section className="relative w-full bg-[#f8fafe]">
      <Header />

      <div className="relative w-full min-h-[480px] sm:min-h-[520px] lg:min-h-[560px]">
        {/* Full hero video background */}
        <div className="absolute inset-0 overflow-hidden">
          <CloudinaryVideo
            src={HOME_CARE_HERO_VIDEO}
            className="absolute inset-0 w-full h-full object-center pointer-events-none"
            aria-hidden
          />
        </div>

        {/* Content on the left */}
        <div className={`relative z-10 ${PAGE_MAX} flex flex-col justify-center min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] pt-6 sm:pt-10 pb-28 sm:pb-32`}>
          <div className="w-full max-w-[520px] lg:max-w-[50%] space-y-4 sm:space-y-5">
            <span className="inline-block bg-white text-blue-600 font-bold tracking-[0.12em] text-[10px] sm:text-[11px] uppercase px-4 py-1.5 rounded-full border border-blue-200 shadow-sm">
              Home Care Services
            </span>

            <h1 className="font-serif-display text-[1.65rem] sm:text-[2.35rem] lg:text-[2.65rem] font-bold text-[#102a5e] leading-[1.12]">
              Quality Healthcare, Right at
              <br />
              <span className="text-blue-600">Your Home</span>
            </h1>

            <p className="text-gray-500 text-[13px] sm:text-[15px] leading-relaxed max-w-lg">
              Compassionate and professional care delivered in the comfort of your home for you and your loved ones.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 pt-1">
              {HOME_CARE_HERO_FEATURES.map((item) => (
                <div key={item.label} className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <RealisticIcon src={item.icon} alt={item.label} size="xs" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#102a5e] font-bold text-sm leading-tight">{item.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-[#102a5e] text-white px-5 py-3.5 rounded-xl font-semibold hover:bg-blue-900 transition-colors text-sm w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                Book Home Care
              </Link>
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="flex items-center justify-center gap-2 bg-white text-[#102a5e] border-2 border-[#102a5e] px-5 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                Call for Assistance
              </a>
            </div>
          </div>
        </div>

        {/* Feature bar overlapping bottom */}
        <div className={`absolute bottom-0 left-0 right-0 z-30 ${PAGE_MAX} translate-y-1/2`}>
          <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(16,42,94,0.12)] border border-gray-100 px-4 py-4 sm:px-8 sm:py-6">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:hidden" style={{ scrollbarWidth: 'none' }}>
              {HOME_CARE_HERO_FEATURES.map((item) => (
                <div key={item.label} className="snap-start shrink-0 flex items-center gap-2.5 w-[200px]">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <RealisticIcon src={item.icon} alt={item.label} size="xs" />
                  </div>
                  <div>
                    <p className="text-[#102a5e] font-bold text-xs leading-tight">{item.label}</p>
                    <p className="text-gray-400 text-[10px] mt-0.5">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {HOME_CARE_HERO_FEATURES.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <RealisticIcon src={item.icon} alt={item.label} size="xs" />
                  </div>
                  <div>
                    <p className="text-[#102a5e] font-bold text-sm">{item.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.sublabel}</p>
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
