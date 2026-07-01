import { PAGE_MAX } from '../../data/constants'
import { LAB_WHY_CHOOSE } from '../../data/labServicesData'
import RealisticIcon from '../RealisticIcon'

export default function LabWhyChoose() {
  return (
    <section className={`${PAGE_MAX} py-8 sm:py-12 w-full bg-white`}>
      <h2 className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#102a5e] text-center mb-8 sm:mb-10">
        Trusted Lab. Trusted Care.
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-4">
        {LAB_WHY_CHOOSE.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center gap-2.5 sm:gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center shrink-0">
              <RealisticIcon src={item.icon} alt={item.title} size="sm" />
            </div>
            <h3 className="font-bold text-[#102a5e] text-[11px] sm:text-sm leading-tight">{item.title}</h3>
            <p className="text-gray-500 text-[9px] sm:text-[11px] leading-relaxed max-w-[140px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
