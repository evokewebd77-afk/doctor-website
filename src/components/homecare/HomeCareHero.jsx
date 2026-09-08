import { Link } from 'react-router-dom'
import { Calendar, Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE } from '../../data/constants'
import { HOME_CARE_HERO_IMAGE, HOME_CARE_HERO_FEATURES } from '../../data/homeCareData'
import Header from '../Header'
import RealisticIcon from '../RealisticIcon'
import CloudinaryImage from '../media/CloudinaryImage'

export default function HomeCareHero() {
  return (
    <section className="relative w-full bg-[#f8fafe]">
      <Header />

      <div className="relative w-full min-h-[500px] sm:min-h-[540px] lg:min-h-[600px]">
        {/* Full hero image background */}
        <div className="absolute inset-0 overflow-hidden">
          <CloudinaryImage
            src={HOME_CARE_HERO_IMAGE}
            alt="Family Cure Clinic home care nurse providing compassionate care to patient"
            variant="hero"
            className="w-full h-full object-cover object-[100%_20%] pointer-events-none select-none"
          />
          {/* Mobile gradient (top-down) with reduced opacity so image is clearly visible */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#f8fafe]/75 via-[#f8fafe]/40 via-50% to-transparent pointer-events-none" />
          {/* Desktop gradient (left-to-right) */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#f8fafe] via-[#f8fafe]/85 to-transparent w-full md:w-[55%] lg:w-[48%]" />
        </div>

        {/* Content on the left */}
        <div className={`relative z-10 ${PAGE_MAX} flex flex-col justify-center min-h-[440px] sm:min-h-[480px] lg:min-h-[540px] py-10 sm:py-14 lg:py-16`}>
          <div className="w-full max-w-[500px] lg:max-w-[45%] space-y-4 sm:space-y-5">
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

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-[#102a5e] text-white px-5 py-3.5 rounded-xl font-semibold hover:bg-blue-900 transition-colors text-sm w-full sm:w-auto shadow-[0_4px_16px_rgba(16,42,94,0.2)]"
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
      </div>

      {/* Feature bar placed cleanly after hero banner */}
      <div className={`${PAGE_MAX} py-6 sm:py-8`}>
        <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(16,42,94,0.08)] border border-gray-100 px-4 py-4 sm:px-8 sm:py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {HOME_CARE_HERO_FEATURES.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <RealisticIcon src={item.icon} alt={item.label} size="xs" />
                </div>
                <div>
                  <p className="text-[#102a5e] font-bold text-xs sm:text-sm">{item.label}</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">{item.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
