import { Phone, MessageCircle } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE, CLINIC_PHONE_DISPLAY_FULL, CLINIC_WHATSAPP_URL } from '../../data/constants'
import { CONTACT_URGENT_BG } from '../../data/contactData'
import CloudinaryImage from '../media/CloudinaryImage'

export default function ContactUrgentCTA() {
  return (
    <section className={`${PAGE_MAX} pb-16 sm:pb-16 w-full`}>
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#081e4a] shadow-[0_16px_40px_rgba(8,30,74,0.25)] border border-[#16336e]">
        {/* Background illustration & gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <CloudinaryImage
            src={CONTACT_URGENT_BG}
            alt=""
            aria-hidden
            variant="hero"
            className="w-full h-full object-cover object-top sm:object-left opacity-30 sm:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#081e4a] via-[#081e4a]/90 sm:via-[#081e4a]/85 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6 p-6 sm:p-8 lg:px-12 py-7 sm:py-9">
          <div className="max-w-md sm:max-w-lg space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              24/7 Available Support
            </span>
            <h2 className="font-serif-display text-xl sm:text-2xl lg:text-[1.85rem] font-bold text-white leading-tight">
              Need Immediate Assistance?
            </h2>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              For urgent medical help, appointment booking, or quick support — our team is available around the clock.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="flex items-center justify-center gap-2.5 bg-white text-[#102a5e] px-6 py-3.5 rounded-xl sm:rounded-full font-bold text-xs sm:text-sm hover:bg-blue-50 transition-colors shadow-lg active:scale-95 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-blue-600" strokeWidth={2.5} />
              Call Now: <span className="text-blue-600">{CLINIC_PHONE_DISPLAY_FULL}</span>
            </a>
            <a
              href={CLINIC_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-6 py-3.5 rounded-xl sm:rounded-full font-bold text-xs sm:text-sm hover:bg-[#20bd5a] transition-colors shadow-lg active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
