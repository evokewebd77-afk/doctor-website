import { PAGE_MAX } from '../../data/constants'
import { ABOUT_MISSION_VISION } from '../../data/aboutData'
import RealisticIcon from '../RealisticIcon'

export default function AboutMissionVision() {
  return (
    <section className={`${PAGE_MAX} pb-8 sm:pb-10 w-full`}>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(16,42,94,0.08)] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {ABOUT_MISSION_VISION.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center px-6 py-8 sm:py-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                <RealisticIcon src={item.icon} alt={item.title} size="sm" />
              </div>
              <h3 className="font-bold text-[#102a5e] text-sm sm:text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
