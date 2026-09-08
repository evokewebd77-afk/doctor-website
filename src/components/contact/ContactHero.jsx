import { Calendar, Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE } from '../../data/constants'
import { CONTACT_HERO_IMAGE, CONTACT_CARDS } from '../../data/contactData'
import Header from '../Header'
import RealisticIcon from './RealisticIcon'
import CloudinaryImage from '../media/CloudinaryImage'

export default function ContactHero() {
  return (
    <section className="relative w-full bg-[#f8fafe]">
      <Header />

      <div className="relative w-full min-h-[500px] sm:min-h-[540px] lg:min-h-[600px]">
        <div className="absolute inset-0 overflow-hidden">
          <CloudinaryImage
            src={CONTACT_HERO_IMAGE}
            alt="Family Cure Clinic contact and front desk team"
            variant="hero"
            className="w-full h-full object-cover object-[75%_20%] sm:object-[100%_20%] lg:object-[100%_20%] pointer-events-none select-none"
          />
          {/* Mobile gradient (top-down) ensuring crisp contrast for white text while keeping image visible */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 via-55% to-transparent pointer-events-none" />
          {/* Desktop gradient (left-to-right) */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#f8fafe] via-[#f8fafe]/85 to-transparent w-full md:w-[70%] lg:w-[58%]" />
        </div>

        <div className={`relative z-10 ${PAGE_MAX} flex flex-col justify-center min-h-[420px] sm:min-h-[460px] lg:min-h-[520px] py-10 sm:py-14 lg:py-16`}>
          <div className="w-full max-w-[520px] lg:max-w-[48%] space-y-4 sm:space-y-5">
            <span className="inline-block bg-blue-600 text-white md:bg-[#e8f1fd] md:text-blue-600 font-bold tracking-[0.12em] text-[10px] sm:text-[11px] uppercase px-4 py-1.5 rounded-full shadow-sm">
              Contact Us
            </span>

            <h1 className="font-serif-display text-[1.65rem] sm:text-[2.2rem] lg:text-[2.5rem] font-bold text-white md:text-[#102a5e] leading-[1.15] [text-shadow:_0_2px_8px_rgba(0,0,0,0.85)] md:[text-shadow:none]">
              We&apos;re Here to Support Your Family&apos;s Health
            </h1>

            <p className="text-white/95 md:text-gray-500 text-[13.5px] sm:text-[15px] font-medium sm:font-normal leading-relaxed max-w-lg [text-shadow:_0_1px_6px_rgba(0,0,0,0.85)] md:[text-shadow:none]">
              Whether you need an appointment, have an enquiry, want to book a lab test, need home care, or
              prefer a teleconsultation — our team is ready to help you with care and compassion.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm w-full sm:w-auto shadow-md"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="#contact-form"
                className="flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-white md:border-blue-600 px-5 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm w-full sm:w-auto shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards - placed after hero section */}
      <div className={`${PAGE_MAX} py-8 sm:py-10`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {CONTACT_CARDS.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.external ? '_blank' : undefined}
              rel={card.external ? 'noopener noreferrer' : undefined}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_32px_rgba(16,42,94,0.08)] px-4 py-5 sm:px-5 sm:py-6 flex flex-col items-center text-center hover:shadow-[0_12px_40px_rgba(16,42,94,0.14)] hover:-translate-y-0.5 transition-all"
            >
              <RealisticIcon src={card.image} alt={card.title} size="md" className="mb-3" />
              <h3 className="font-bold text-[#102a5e] text-xs sm:text-sm mb-0.5">{card.title}</h3>
              <p className="text-gray-600 text-[10px] sm:text-xs font-medium leading-relaxed break-all">{card.value}</p>
              <p className="text-gray-400 text-[9px] sm:text-[10px] mt-1 leading-relaxed">{card.subtext}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
