import { Calendar, ClipboardList } from 'lucide-react'
import { PAGE_MAX } from '../../data/constants'
import { LAB_CTA_IMAGE } from '../../data/labServicesData'
import CloudinaryImage from '../media/CloudinaryImage'

export default function LabCTA() {
  return (
    <section id="book-appointment" className={`${PAGE_MAX} py-8 sm:py-10 w-full scroll-mt-20`}>
      <div className="relative w-full rounded-3xl overflow-hidden h-[200px] sm:h-[240px] lg:h-[270px]">
        <CloudinaryImage
          src={LAB_CTA_IMAGE}
          alt=""
          aria-hidden
          variant="hero"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />

        {/* Content — inset from left corner toward center */}
        <div className="absolute inset-y-0 left-[8%] sm:left-[10%] lg:left-[12%] z-10 flex flex-col justify-center w-[82%] sm:w-[48%] lg:w-[44%]">
          <h2 className="font-serif-display text-[1.35rem] sm:text-2xl lg:text-[1.85rem] font-bold text-white mb-2 sm:mb-2.5 leading-tight">
            Need a Lab Test?
          </h2>
          <p className="text-white/85 text-[11px] sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-md">
            Book your test online or walk-in to our center for quick sample collection and reliable results.
          </p>
          <div className="flex flex-row flex-wrap gap-2.5 sm:gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-[11px] sm:text-sm hover:bg-blue-700 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Book Appointment
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-white text-[#102a5e] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-[11px] sm:text-sm hover:bg-gray-100 transition-colors"
            >
              <ClipboardList className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              View Test List
            </button>
          </div>
        </div>

        {/* 24/7 badge — right side, slightly toward center */}
        <div className="absolute right-[8%] sm:right-[10%] lg:right-[11%] top-[58%] sm:top-[60%] -translate-y-1/2 z-20 bg-[#1a2d4d]/85 backdrop-blur-sm rounded-xl px-5 sm:px-6 py-3.5 sm:py-4 text-center min-w-[88px] sm:min-w-[104px]">
          <p className="text-white text-xl sm:text-2xl lg:text-[1.75rem] font-bold leading-none">24/7</p>
          <p className="text-white/90 text-[10px] sm:text-xs font-medium mt-1.5">Lab Support</p>
        </div>
      </div>
    </section>
  )
}
