import { PAGE_MAX } from '../../data/constants'
import { HOME_CARE_FEATURES } from '../../data/homeCareData'
import RealisticIcon from '../RealisticIcon'

export default function HomeCareFeaturesBar() {
  return (
    <section className={`${PAGE_MAX} py-6 sm:py-10 w-full`}>
      <div className="bg-[#e8f1fd] rounded-2xl sm:rounded-3xl px-4 py-6 sm:px-8 sm:py-8">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:hidden" style={{ scrollbarWidth: 'none' }}>
          {HOME_CARE_FEATURES.map((item) => (
            <div key={item.label} className="snap-start shrink-0 flex items-center gap-3 w-[220px]">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <RealisticIcon src={item.icon} alt={item.label} size="xs" />
              </div>
              <div>
                <p className="text-[#102a5e] font-bold text-xs leading-tight">{item.label}</p>
                <p className="text-gray-500 text-[10px] mt-0.5 leading-snug">{item.sublabel}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {HOME_CARE_FEATURES.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <RealisticIcon src={item.icon} alt={item.label} size="xs" />
              </div>
              <div>
                <p className="text-[#102a5e] font-bold text-sm leading-tight">{item.label}</p>
                <p className="text-gray-500 text-xs mt-0.5 leading-snug">{item.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
