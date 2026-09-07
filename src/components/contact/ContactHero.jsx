import { Calendar, Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE } from '../../data/constants'
import { CONTACT_HERO_VIDEO, CONTACT_CARDS } from '../../data/contactData'
import Header from '../Header'
import RealisticIcon from './RealisticIcon'
import CloudinaryVideo from '../media/CloudinaryVideo'

export default function ContactHero() {
  return (
    <section className="relative w-full bg-[#f8fafe]">
      <Header />

      <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[540px]">
        <div className="absolute inset-0 overflow-hidden">
          <CloudinaryVideo
            src={CONTACT_HERO_VIDEO}
            className="absolute inset-0 w-full h-full object-[65%_center] sm:object-right pointer-events-none"
            objectPosition="65% center"
            aria-hidden
          />
        </div>

        <div className={`relative z-10 ${PAGE_MAX} flex flex-col justify-center min-h-[400px] sm:min-h-[440px] lg:min-h-[480px] pt-6 sm:pt-10 pb-28 sm:pb-32`}>
          <div className="w-full max-w-[520px] lg:max-w-[48%] space-y-4 sm:space-y-5">
            <span className="inline-block bg-[#e8f1fd] text-blue-600 font-bold tracking-[0.12em] text-[10px] sm:text-[11px] uppercase px-4 py-1.5 rounded-full">
              Contact Us
            </span>

            <h1 className="font-serif-display text-[1.65rem] sm:text-[2.2rem] lg:text-[2.5rem] font-bold text-[#102a5e] leading-[1.15]">
              We&apos;re Here to Support Your Family&apos;s Health
            </h1>

            <p className="text-gray-500 text-[13px] sm:text-[15px] leading-relaxed max-w-lg">
              Whether you need an appointment, have an enquiry, want to book a lab test, need home care, or
              prefer a teleconsultation — our team is ready to help you with care and compassion.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="#contact-form"
                className="flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-5 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 z-30 ${PAGE_MAX} translate-y-1/2`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {CONTACT_CARDS.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_32px_rgba(16,42,94,0.1)] px-4 py-5 sm:px-5 sm:py-6 flex flex-col items-center text-center hover:shadow-[0_12px_40px_rgba(16,42,94,0.14)] hover:-translate-y-0.5 transition-all"
              >
                <RealisticIcon src={card.image} alt={card.title} size="md" className="mb-3" />
                <h3 className="font-bold text-[#102a5e] text-xs sm:text-sm mb-0.5">{card.title}</h3>
                <p className="text-gray-600 text-[10px] sm:text-xs font-medium leading-relaxed break-all">{card.value}</p>
                <p className="text-gray-400 text-[9px] sm:text-[10px] mt-1 leading-relaxed">{card.subtext}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
