import { Check } from 'lucide-react'
import { PAGE_MAX } from '../../data/constants'
import { GM_CONDITIONS, GM_TREATMENT_CARDS } from '../../data/generalMedicineData'
import { GM_ACCENT_RING } from './gmAccentStyles'
import RealisticIcon from '../RealisticIcon'
import CloudinaryImage from '../media/CloudinaryImage'

export default function GMWhatWeTreat() {
  return (
    <section className={`${PAGE_MAX} py-10 sm:py-12 lg:py-14 w-full`}>
      <h2 className="font-serif-display text-xl sm:text-2xl lg:text-[1.85rem] font-bold text-[#102a5e] text-center mb-8 sm:mb-10">
        What We Treat
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
          {GM_CONDITIONS.map((condition) => (
            <div key={condition} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </span>
              <span className="text-[#102a5e] text-sm font-medium">{condition}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4 sm:space-y-5">
          {GM_TREATMENT_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(16,42,94,0.08)] overflow-hidden flex"
            >
              <div className="flex-1 p-5 sm:p-6 min-w-0">
                <div className="flex items-start gap-3.5">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${GM_ACCENT_RING[card.accent]}`}>
                    <RealisticIcon src={card.icon} alt={card.title} size="xs" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#102a5e] text-sm sm:text-base mb-1.5">{card.title}</h3>
                    <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </div>
              <div className="w-[110px] sm:w-[130px] shrink-0">
                <CloudinaryImage
                  src={card.image}
                  alt={card.title}
                  variant="card"
                  className="w-full h-full min-h-[110px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
