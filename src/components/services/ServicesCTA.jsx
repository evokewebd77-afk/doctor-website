import { Calendar, Phone, Heart } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE, CLINIC_PHONE_DISPLAY } from '../../data/constants'
import { SERVICES_CTA_IMAGE } from '../../data/servicesData'
import CloudinaryImage from '../media/CloudinaryImage'

export default function ServicesCTA() {
  return (
    <section id="book-appointment" className={`${PAGE_MAX} py-5 sm:py-8 w-full scroll-mt-20`}>
      <div className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(16,42,94,0.15)]">
        {/* Mobile layout */}
        <div className="md:hidden bg-[#102a5e] relative overflow-hidden">
          <Heart
            className="absolute right-4 top-8 w-20 h-20 text-white/[0.06] pointer-events-none"
            strokeWidth={1}
            fill="currentColor"
          />
          <div className="flex items-end justify-center pt-4 px-4">
            <CloudinaryImage
              src={SERVICES_CTA_IMAGE}
              alt=""
              aria-hidden
              variant="portrait"
              className="w-28 h-auto object-contain"
            />
          </div>
          <div className="px-5 pb-5 pt-2 text-center relative z-10">
            <h2 className="font-serif-display text-lg font-bold text-white mb-2 leading-snug">
              We're Here for You & Your Family
            </h2>
            <p className="text-white/75 text-xs mb-4">
              Book an appointment today and experience care you can count on.
            </p>
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-white text-[#102a5e] py-3.5 rounded-xl font-bold text-sm w-full"
              >
                <Calendar className="w-4 h-4 text-blue-600" />
                Book Appointment
              </button>
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="flex items-center justify-center gap-2 bg-transparent text-white py-3.5 rounded-xl font-bold text-sm border-2 border-white/40 w-full"
              >
                <Phone className="w-4 h-4" />
                {CLINIC_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex flex-row">
          <div className="bg-[#dce8f8] shrink-0 flex items-end justify-center w-[140px] md:w-[160px] lg:w-[180px] px-2">
            <CloudinaryImage src={SERVICES_CTA_IMAGE} alt="" aria-hidden variant="portrait" className="w-full h-auto object-contain object-bottom" />
          </div>
          <div className="relative flex-1 bg-[#102a5e] px-8 lg:px-10 py-8 flex flex-row items-center justify-between gap-8">
            <Heart
              className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 text-white/[0.06] pointer-events-none"
              strokeWidth={1}
              fill="currentColor"
            />
            <div className="relative z-10">
              <h2 className="font-serif-display text-2xl lg:text-[1.65rem] font-bold text-white mb-2 leading-snug">
                We're Here for You & Your Family
              </h2>
              <p className="text-white/75 text-sm max-w-md">
                Book an appointment today and experience care you can count on.
              </p>
            </div>
            <div className="relative z-10 flex flex-row items-center gap-3 shrink-0">
              <button
                type="button"
                className="flex items-center gap-2 bg-white text-[#102a5e] px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors"
              >
                <Calendar className="w-4 h-4 text-blue-600" />
                Book Appointment
              </button>
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-xl font-bold text-sm border-2 border-white/40 hover:bg-white/5 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {CLINIC_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
