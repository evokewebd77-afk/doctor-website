import { Calendar, Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE } from '../../data/constants'
import { DOCTORS_HERO_BG, DOCTORS_HERO_AVATAR } from '../../data/doctorsData'
import Header from '../Header'
import CloudinaryImage from '../media/CloudinaryImage'
import CloudinaryVideo from '../media/CloudinaryVideo'

export default function DoctorsHero() {
  return (
    <section className="relative w-full bg-[#f8fafe] overflow-x-hidden min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col">
      <div className="absolute inset-0 z-0">
        <CloudinaryImage
          src={DOCTORS_HERO_BG}
          alt=""
          aria-hidden
          variant="hero"
          className="w-full h-full min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] object-cover object-center"
        />
      </div>

      <Header />

      <div
        className={`relative z-10 flex-1 ${PAGE_MAX} pt-8 sm:pt-10 lg:pt-12 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-end`}
      >
        <div className="space-y-4 sm:space-y-5 order-1 pb-8 sm:pb-10 lg:pb-12 self-center lg:self-end">
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

        <div className="order-2 flex justify-center lg:justify-end items-end self-end overflow-visible">
          <CloudinaryVideo
            src={DOCTORS_HERO_AVATAR}
            variant="avatar"
            fit="contain"
            blendMode="screen"
            className="h-[min(400px,58vh)] sm:h-[min(460px,64vh)] lg:h-[min(540px,calc(560px-5rem))] w-auto max-w-full scale-105 sm:scale-110 lg:scale-[1.15] origin-bottom lg:origin-bottom-right object-bottom pointer-events-none drop-shadow-[0_12px_32px_rgba(16,42,94,0.12)]"
            aria-label="Doctor at Family Cure Clinic"
          />
        </div>
      </div>
    </section>
  )
}
