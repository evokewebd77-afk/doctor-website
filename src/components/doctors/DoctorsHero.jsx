import { Calendar, Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE } from '../../data/constants'
import { DOCTORS_HERO_VIDEO } from '../../data/doctorsData'
import Header from '../Header'

export default function DoctorsHero() {
  return (
    <section className="relative w-full bg-[#f8fafe]">
      <Header variant="solid" />

      <div className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-[70%_center] sm:object-right pointer-events-none"
            aria-hidden
          >
            <source src={DOCTORS_HERO_VIDEO} type="video/mp4" />
          </video>
        </div>

        <div className={`relative z-10 ${PAGE_MAX} flex flex-col justify-center min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] py-10 sm:py-14 lg:py-16`}>
          <div className="w-full max-w-[520px] lg:max-w-[48%] space-y-4 sm:space-y-5">
            <span className="inline-block bg-[#e8f1fd] text-blue-600 font-bold tracking-[0.12em] text-[10px] sm:text-[11px] uppercase px-4 py-1.5 rounded-full">
              Our Doctors
            </span>

            <h1 className="font-serif-display text-[1.75rem] sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.65rem] font-bold text-[#102a5e] leading-[1.12]">
              Expert Care. For You and Your Family.
            </h1>

            <p className="text-gray-500 text-[13px] sm:text-[15px] leading-relaxed max-w-lg">
              Our team of experienced doctors is committed to providing personalized, compassionate healthcare —
              guiding you and your loved ones through every step of your health journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
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
      </div>
    </section>
  )
}
