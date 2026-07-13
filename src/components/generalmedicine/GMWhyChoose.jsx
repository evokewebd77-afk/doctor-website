import { PAGE_MAX } from '../../data/constants'
import { GM_WHY_CHOOSE } from '../../data/generalMedicineData'
import { GM_ACCENT_RING } from './gmAccentStyles'
import RealisticIcon from '../RealisticIcon'

export default function GMWhyChoose() {
  return (
    <section className="bg-white border-y border-gray-100 py-10 sm:py-12 lg:py-14 w-full">
      <div className={PAGE_MAX}>
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif-display text-xl sm:text-2xl lg:text-[1.85rem] font-bold text-[#102a5e]">
            Why Choose Family Cure Clinic?
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {GM_WHY_CHOOSE.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(16,42,94,0.07)] px-4 py-5 sm:px-5 sm:py-6 flex flex-col items-center text-center"
            >
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-3.5 ${GM_ACCENT_RING[item.accent]}`}>
                <RealisticIcon src={item.icon} alt={item.title} size="sm" />
              </div>
              <h3 className="font-bold text-[#102a5e] text-xs sm:text-sm mb-1.5 leading-snug">{item.title}</h3>
              <p className="text-gray-500 text-[10px] sm:text-[11px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
