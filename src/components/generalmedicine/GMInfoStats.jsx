import { Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE, CLINIC_PHONE_DISPLAY } from '../../data/constants'
import { GM_INFO_ITEMS, GM_STATS } from '../../data/generalMedicineData'
import RealisticIcon from '../RealisticIcon'

export default function GMInfoStats() {
  return (
    <section className={`${PAGE_MAX} pb-10 sm:pb-12 lg:pb-14 w-full space-y-5 sm:space-y-6`}>
      <div className="grid lg:grid-cols-4 gap-4 sm:gap-5">
        <div className="lg:col-span-3 grid sm:grid-cols-3 gap-3 sm:gap-4">
          {GM_INFO_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl px-4 py-4 sm:py-5 flex items-center gap-3 border border-gray-100 shadow-[0_4px_20px_rgba(16,42,94,0.06)]"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <RealisticIcon src={item.icon} alt={item.title} size="xs" />
              </div>
              <div>
                <h3 className="font-bold text-[#102a5e] text-xs sm:text-sm">{item.title}</h3>
                <p className="text-gray-500 text-[10px] sm:text-[11px] mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0d2147] rounded-2xl px-5 py-5 sm:py-6 flex flex-col justify-center border border-[#1a3468] shadow-[0_8px_32px_rgba(13,33,71,0.2)]">
          <h3 className="font-bold text-white text-sm sm:text-base mb-1">Need Help?</h3>
          <p className="text-white/60 text-[11px] sm:text-xs mb-3 leading-relaxed">
            Call us for appointment booking or queries
          </p>
          <a
            href={`tel:${CLINIC_PHONE}`}
            className="flex items-center gap-2 text-white font-bold text-base sm:text-lg hover:text-blue-300 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {CLINIC_PHONE_DISPLAY}
          </a>
          <p className="text-white/40 text-[10px] mt-2">Mon – Sat: 9:00 AM – 8:00 PM</p>
        </div>
      </div>

      <div className="bg-[#0d2147] rounded-2xl sm:rounded-3xl border border-[#1a3468] overflow-hidden shadow-[0_12px_40px_rgba(13,33,71,0.25)]">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {GM_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1.5 px-4 py-6 sm:py-7">
              <RealisticIcon src={stat.icon} alt={stat.label} size="xs" className="opacity-90" />
              <p className="text-[24px] sm:text-[28px] font-bold text-white leading-none">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
