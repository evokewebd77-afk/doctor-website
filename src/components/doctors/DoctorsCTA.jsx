import { Calendar, Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE } from '../../data/constants'
import { RI } from '../../data/realisticIcons'
import RealisticIcon from '../RealisticIcon'

export default function DoctorsCTA() {
  return (
    <section className={`${PAGE_MAX} pb-8 sm:pb-10 w-full`}>
      <div className="bg-[#102a5e] rounded-2xl sm:rounded-3xl px-5 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
            <RealisticIcon src={RI.phone} alt="" size="md" className="drop-shadow-lg" />
          </div>
          <div>
            <h2 className="font-bold text-white text-lg sm:text-xl leading-snug">We&apos;re Here for You</h2>
            <p className="text-white/70 text-xs sm:text-sm mt-1 leading-relaxed">
              Have questions or need help? Our team is ready to assist you.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_PHONE}`}
            className="flex items-center justify-center gap-2 bg-white text-[#102a5e] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-4 h-4" strokeWidth={2} />
            Call Us Now
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
