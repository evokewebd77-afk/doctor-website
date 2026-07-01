import { Calendar, Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE, CLINIC_PHONE_DISPLAY_FULL } from '../../data/constants'

export default function AboutCTA() {
  return (
    <section className={`${PAGE_MAX} pb-10 sm:pb-14 w-full`}>
      <div className="bg-[#102a5e] rounded-2xl sm:rounded-3xl px-5 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="font-bold text-white text-base sm:text-lg lg:text-xl leading-snug">
              We&apos;re Here to Care for You and Your Family
            </h2>
            <p className="text-white/65 text-xs sm:text-sm mt-1">
              Your health is our priority — reach out anytime for appointments or support.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_PHONE}`}
            className="flex items-center justify-center gap-2 bg-white text-[#102a5e] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-4 h-4" strokeWidth={2} />
            Call Now
            <span className="text-blue-600 hidden sm:inline">{CLINIC_PHONE_DISPLAY_FULL}</span>
          </a>
          <button
            type="button"
            className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-white/10 transition-colors"
          >
            <Calendar className="w-4 h-4" strokeWidth={2} />
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  )
}
