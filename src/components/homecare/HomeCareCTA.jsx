import { Calendar, Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE, CLINIC_PHONE_DISPLAY } from '../../data/constants'
import { HOME_CARE_CTA_IMAGE } from '../../data/homeCareData'

export default function HomeCareCTA() {
  return (
    <section id="book-appointment" className={`${PAGE_MAX} py-6 sm:py-10 w-full scroll-mt-20`}>
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[200px] sm:h-[240px] lg:h-[270px] bg-[#050a18]">
        <img
          src={HOME_CARE_CTA_IMAGE}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Content centered */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10">
          <h2 className="font-serif-display text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-white mb-2 sm:mb-3 leading-tight max-w-xl">
            Healthcare That Comes to You
          </h2>
          <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-md">
            Professional care, personal touch, right at your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-white text-[#102a5e] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-4 h-4 text-blue-600" />
              Book Home Care
            </button>
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CLINIC_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
