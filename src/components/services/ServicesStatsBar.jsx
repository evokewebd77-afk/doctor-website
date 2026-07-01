import { PAGE_MAX } from '../../data/constants'
import { SERVICES_STATS } from '../../data/servicesData'
import RealisticIcon from '../RealisticIcon'

export default function ServicesStatsBar() {
  return (
    <section className={`${PAGE_MAX} py-4 sm:py-0`}>
      <div className="bg-[#102a5e] rounded-t-[20px] sm:rounded-none py-5 sm:py-10 px-2 sm:px-0">
        <div className="grid grid-cols-5 gap-1 sm:gap-4">
          {SERVICES_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-0.5 sm:gap-2 min-w-0">
              <RealisticIcon src={stat.icon} alt={stat.label} size="xs" className="drop-shadow-sm" />
              <p className="text-[14px] sm:text-[28px] font-bold text-white leading-none">{stat.value}</p>
              <p className="text-[7px] sm:text-xs text-white/70 leading-tight px-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
