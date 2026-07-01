import { ArrowRight, Check, Calendar, Clock, ChevronDown } from 'lucide-react'
import { PAGE_MAX } from '../data/constants'

const TECH_BG =
  'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782809095/ChatGPT_Image_Jun_30_2026_02_12_55_PM_afg8ih.png'

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
        <div className="relative min-h-[340px] sm:min-h-[400px] md:min-h-[420px] lg:min-h-[460px] xl:min-h-[500px] rounded-2xl overflow-hidden">
          <img src={TECH_BG} alt="Advanced medical technology room" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/40 md:bg-gradient-to-r md:from-white md:via-white/85 md:to-white/20 md:w-[72%]" />
          <div className="relative z-10 h-full flex flex-col justify-center p-5 sm:p-8 lg:p-9 xl:p-10 max-w-full md:max-w-[90%]">
            <h2 className="font-serif-display text-xl sm:text-2xl lg:text-[1.75rem] xl:text-[2rem] font-bold text-[#102a5e] leading-tight mb-2 sm:mb-3">
              Advanced Technology.
              <br />
              Accurate Care.
            </h2>
            <p className="text-gray-600 text-[13px] sm:text-sm leading-relaxed mb-4 sm:mb-5 max-w-sm">
              We use advanced diagnostic technology for precise results and better treatments.
            </p>
            <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-7">
              {TECH_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start sm:items-center gap-2 sm:gap-2.5 text-[#102a5e] text-[13px] sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="self-start flex items-center gap-2 bg-[#102a5e] text-white px-5 sm:px-6 py-2.5 rounded-full font-semibold hover:bg-blue-900 transition-colors text-xs tracking-wide"
            >
              LEARN MORE
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
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

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#f0f2f5] text-[#102a5e] py-3.5 rounded-xl font-bold text-sm hover:bg-white transition-colors mt-1 sm:mt-2 uppercase tracking-wide"
            >
              Confirm Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
