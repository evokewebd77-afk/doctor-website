import { useState } from 'react'
import { ArrowRight, Home } from 'lucide-react'
import { PAGE_MAX } from '../../data/constants'
import { HOME_CARE_SERVICES } from '../../data/homeCareData'
import RealisticIcon from '../RealisticIcon'

const MOBILE_PREVIEW_COUNT = 6

export default function HomeCareServicesGrid() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className={`${PAGE_MAX} pt-16 sm:pt-24 lg:pt-28 pb-4 sm:pb-8 w-full`}>
      <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-10 px-1">
        <p className="text-blue-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-2">We Come to You</p>
        <h2 className="font-serif-display text-lg sm:text-3xl lg:text-[2.25rem] font-bold text-[#102a5e] mb-2 flex items-center justify-center gap-2">
          <Home className="w-5 h-5 sm:w-7 sm:h-7 text-blue-500" strokeWidth={1.5} />
          Our Home Care Services
        </h2>
        <p className="text-gray-500 text-[11px] sm:text-sm leading-relaxed px-2">
          Professional care and support for a healthier and more comfortable life at home.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-7">
        {HOME_CARE_SERVICES.map((service, index) => (
          <div
            key={service.title}
            className={`relative bg-white rounded-xl sm:rounded-2xl shadow-[0_2px_16px_rgba(16,42,94,0.07)] border border-gray-100 ${
              !showAll && index >= MOBILE_PREVIEW_COUNT ? 'hidden lg:block' : ''
            }`}
          >
            <div className="relative h-[110px] sm:h-[170px] lg:h-[180px] overflow-hidden m-2 sm:m-0 sm:rounded-t-2xl rounded-lg">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-lg sm:rounded-t-2xl sm:rounded-b-none" />
              <div className="absolute -bottom-3 left-3 sm:-bottom-4 sm:left-4 z-10 w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-blue-100">
                <RealisticIcon src={service.icon} alt={service.title} size="xs" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            </div>

            <div className="px-2.5 sm:px-5 pt-6 sm:pt-9 pb-3 sm:pb-5 text-left">
              <h3 className="font-bold text-[#102a5e] text-[11px] sm:text-[15px] mb-1 leading-snug line-clamp-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-[9px] sm:text-[12px] leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3 sm:min-h-[52px]">
                {service.desc}
              </p>
              <a href="#" className="text-[9px] sm:text-[12px] font-semibold text-blue-600 inline-flex items-center gap-0.5 hover:underline">
                Learn More
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="mt-5 text-center lg:hidden">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="text-blue-600 font-bold text-[11px] inline-flex items-center gap-1 hover:underline uppercase tracking-wide"
          >
            View All Services
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </section>
  )
}
