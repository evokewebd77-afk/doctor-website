import { ArrowRight, Check, Calendar, Clock, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CLINIC_WHATSAPP_URL, PAGE_MAX } from '../data/constants'
import CloudinaryImage from './media/CloudinaryImage'

const TECH_BG =
  'https://res.cloudinary.com/drm8wdb7m/image/upload/f_auto,q_90,dpr_auto,w_3200,c_limit/v1784607521/ChatGPT_Image_Jul_21_2026_09_46_06_AM_autbvi.png'

const TECH_FEATURES = [
  'Digital X-Ray, Ultrasound & ECG',
  'Advanced Pathology & Biochemistry Lab',
  '4D Ultrasound & Fetal Monitoring',
  'Modern Treatment & Comfortable Care',
]

export default function TechnologyAppointmentSection() {
  return (
    <section id="book-appointment" className={`${PAGE_MAX} py-6 sm:py-8 lg:py-10 w-full scroll-mt-20`}>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div className="relative min-h-[360px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[480px] xl:min-h-[520px] rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_24px_rgba(16,42,94,0.06)]">
          <CloudinaryImage src={TECH_BG} alt="Advanced medical technology room" variant="hero" className="absolute inset-0 w-full h-full object-cover object-right-center" />
          
          {/* High contrast gradient backdrop protecting the left text area */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-50% to-transparent w-full md:w-[82%] pointer-events-none" />

          <div className="relative z-10 h-full flex flex-col justify-center p-6 sm:p-8 lg:p-9 xl:p-10 max-w-full md:max-w-[85%]">
            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#0a1f47] leading-tight mb-2 sm:mb-3">
              Advanced Technology.
              <br />
              <span className="text-blue-700">Accurate Care.</span>
            </h2>

            <p className="text-slate-700 font-medium text-[13.5px] sm:text-[14.5px] leading-relaxed mb-4 sm:mb-5 max-w-sm">
              We use advanced diagnostic technology for precise results and better treatments.
            </p>

            <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-7">
              {TECH_FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-[10px] bg-white/90 backdrop-blur-xs border border-blue-100/80 shadow-2xs text-[#0a1f47] font-semibold text-[12px] sm:text-[13px]"
                >
                  <span className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" strokeWidth={3} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/services"
              className="self-start inline-flex items-center gap-2 bg-[#0b1f45] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#102a5e] transition-all text-xs tracking-wider uppercase shadow-sm hover:shadow-md active:scale-95"
            >
              <span>LEARN MORE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="bg-[#102a5e] rounded-2xl p-5 sm:p-8 lg:p-9 xl:p-10 flex flex-col justify-center min-h-0 md:min-h-[420px] lg:min-h-[460px] xl:min-h-[500px]">
          <h2 className="font-serif-display text-xl sm:text-2xl xl:text-[1.75rem] font-bold text-white mb-1">
            Book an Appointment
          </h2>
          <p className="text-white/75 text-[13px] sm:text-sm mb-5 sm:mb-7">Fast, Easy & Hassle-Free</p>

          <form className="space-y-3 sm:space-y-3.5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 text-sm placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 text-sm placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="relative">
              <select
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-400 text-sm appearance-none outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="" disabled>
                  Select Department
                </option>
                <option>General Medicine</option>
                <option>Obstetrics & Gynaecology</option>
                <option>Pediatrics</option>
                <option>Diagnostics & Lab</option>
                <option>Home Care</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-300"
                />
                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative">
                <input
                  type="time"
                  className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-300"
                />
                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <textarea
              rows={3}
              placeholder="Message (optional)"
              className="w-full resize-none px-4 py-3 rounded-xl bg-white text-gray-800 text-sm placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
            />

            <button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4a017] via-[#f5c842] to-[#eab308] py-3.5 text-sm font-bold uppercase tracking-wide text-[#0b1f45] shadow-[0_8px_24px_rgba(212,160,23,0.35)] transition-all hover:brightness-105 sm:mt-2"
            >
              Confirm Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <a
            href={CLINIC_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-center text-xs font-medium text-white/80 transition-colors hover:text-[#f5c842] sm:text-sm"
          >
            Prefer WhatsApp? <span className="font-semibold underline underline-offset-2">Chat with us</span>
          </a>
        </div>
      </div>
    </section>
  )
}
