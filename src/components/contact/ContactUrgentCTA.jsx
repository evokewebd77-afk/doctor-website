import { Phone, MessageCircle } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE, CLINIC_PHONE_DISPLAY_FULL, CLINIC_WHATSAPP_URL } from '../../data/constants'
import { CONTACT_URGENT_BG } from '../../data/contactData'

export default function ContactUrgentCTA() {
  return (
    <section className={`${PAGE_MAX} pb-10 sm:pb-14 w-full`}>
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]">
        <img
          src={CONTACT_URGENT_BG}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-left pointer-events-none select-none"
        />

        <div className="relative z-10 flex flex-col justify-center min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-10 ml-auto w-full sm:w-[72%] lg:w-[62%] xl:w-[58%]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-8">
            <div className="max-w-md">
              <h2 className="font-serif-display text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-white mb-2">
                Need Immediate Assistance?
              </h2>
              <p className="text-white/75 text-sm leading-relaxed">
                For urgent medical help, appointment booking, or quick support — our team is available around the clock.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="flex items-center justify-center gap-2.5 bg-white text-[#102a5e] px-5 sm:px-6 py-3.5 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
              >
                <Phone className="w-4 h-4" strokeWidth={2} />
                Call Now
                <span className="text-blue-600">{CLINIC_PHONE_DISPLAY_FULL}</span>
              </a>
              <a
                href={CLINIC_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-green-500 text-white px-5 sm:px-6 py-3.5 rounded-full font-bold text-sm hover:bg-green-600 transition-colors shadow-lg whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
