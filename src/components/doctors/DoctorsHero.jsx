import { Link } from 'react-router-dom'
import { Calendar, Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE } from '../../data/constants'
import { DOCTORS_HERO_IMAGE } from '../../data/doctorsData'
import Header from '../Header'
import CloudinaryImage from '../media/CloudinaryImage'

export default function DoctorsHero() {
  return (
    <section className="relative w-full bg-[#f8fafe] overflow-x-hidden min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] flex flex-col">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <CloudinaryImage
          src={DOCTORS_HERO_IMAGE}
          alt="Family Cure Clinic Doctor Consulting Patient"
          variant="hero"
          className="w-full h-full object-cover object-[85%_70%] md:object-[100%_35%] pointer-events-none select-none"
        />
        {/* Mobile gradient with reduced opacity so image is clearly visible */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#f8fafe]/75 via-[#f8fafe]/40 via-50% to-transparent pointer-events-none" />
        {/* Desktop subtle gradient on left to guarantee text readability without blurring patient */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#f8fafe] via-[#f8fafe]/90 via-45% to-transparent w-full md:w-[65%] lg:w-[50%]" />
      </div>

      <Header />

      <div
        className={`relative z-10 flex-1 ${PAGE_MAX} flex flex-col justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] py-10 sm:py-14 lg:py-16`}
      >
        <div className="w-full max-w-[480px] lg:max-w-[42%] space-y-4 sm:space-y-5">
          <span className="inline-block bg-white text-blue-600 font-bold tracking-[0.14em] text-[10px] sm:text-[11px] uppercase px-4 py-1.5 rounded-full border border-blue-200/80 shadow-sm">
            Our Doctors
          </span>

          <h1 className="font-serif-display text-[1.75rem] sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.65rem] font-bold text-[#102a5e] leading-[1.12] [text-shadow:_0_1px_3px_#fff,_0_0_8px_#fff] md:[text-shadow:none]">
            Expert Care. For You and Your Family.
          </h1>

          <p className="text-[#102a5e] text-[13.5px] sm:text-[15px] font-semibold sm:font-normal leading-relaxed max-w-lg [text-shadow:_0_1px_3px_#fff,_0_0_8px_#fff,_0_0_16px_rgba(255,255,255,0.95)] md:[text-shadow:none]">
            Our team of experienced doctors is committed to providing personalized, compassionate healthcare —
            guiding you and your loved ones through every step of your health journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm w-full sm:w-auto shadow-[0_4px_16px_rgba(37,99,235,0.25)]"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-5 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
