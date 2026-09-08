import { Calendar, ClipboardList } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PAGE_MAX } from '../../data/constants'
import { LAB_CTA_IMAGE } from '../../data/labServicesData'
import CloudinaryImage from '../media/CloudinaryImage'

export default function LabCTA() {
  return (
    <section id="book-appointment" className={`${PAGE_MAX} py-6 sm:py-10 w-full scroll-mt-20`}>
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#071738] shadow-[0_16px_40px_rgba(7,23,56,0.25)] border border-[#162d59]">
        {/* Background image & gradient overlays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <CloudinaryImage
            src={LAB_CTA_IMAGE}
            alt=""
            aria-hidden
            variant="hero"
            className="w-full h-full object-cover object-right opacity-40 sm:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071738] via-[#071738]/95 sm:via-[#071738]/80 to-transparent" />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 p-5 sm:p-8 lg:px-12 py-6 sm:py-8">
          <div className="max-w-lg space-y-2.5 sm:space-y-3">
            {/* Mobile Pill Badge */}
            <div className="sm:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              24/7 Lab Support Available
            </div>

            <h2 className="font-serif-display text-xl sm:text-2xl lg:text-[1.85rem] font-bold text-white leading-tight">
              Need a Lab Test?
            </h2>

            <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-md">
              Book your test online or walk-in to our center for quick sample collection and reliable results.
            </p>

            <div className="flex flex-row flex-wrap gap-2.5 sm:gap-3 pt-1.5 sm:pt-3">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Book Appointment
              </Link>
              <a
                href="#lab-services"
                className="flex items-center justify-center gap-2 bg-white text-[#102a5e] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-colors shadow-sm"
              >
                <ClipboardList className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                View Test List
              </a>
            </div>
          </div>

          {/* 24/7 badge — desktop right side */}
          <div className="hidden sm:flex flex-col items-center justify-center shrink-0 bg-[#14284d]/90 backdrop-blur-md rounded-2xl border border-white/15 px-6 lg:px-8 py-5 text-center shadow-lg">
            <p className="text-white text-2xl lg:text-3xl font-bold leading-none">24/7</p>
            <p className="text-white/85 text-xs font-medium mt-1.5 whitespace-nowrap">Lab Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
