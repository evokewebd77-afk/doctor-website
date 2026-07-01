import { PAGE_MAX } from '../../data/constants'
import { ABOUT_STATS } from '../../data/aboutData'
import RealisticIcon from '../RealisticIcon'

export default function AboutStatsBar() {
  return (
    <section className="w-full bg-[#e8f1fd]/70 border-y border-blue-100/60 py-8 sm:py-10">
      <div className={`${PAGE_MAX} grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8`}>
        {ABOUT_STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-blue-100 shadow-sm flex items-center justify-center mb-3">
              <RealisticIcon src={stat.icon} alt={stat.label} size="xs" />
            </div>
            <p className="font-bold text-[#102a5e] text-xl sm:text-2xl lg:text-[1.65rem] leading-none mb-1.5">
              {stat.value}
            </p>
            <p className="text-gray-500 text-[10px] sm:text-xs font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
