import { PAGE_MAX } from '../data/constants'
import { SERVICES_STATS } from '../data/servicesData'
import RealisticIcon from './RealisticIcon'

export default function StatsBar() {
  return (
    <section className={`${PAGE_MAX} pb-4 sm:pb-6 lg:pb-8 w-full relative z-40`}>
      <div className="bg-[#eef2f7] rounded-xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
        {SERVICES_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center gap-1 sm:gap-1.5 ${
              i === SERVICES_STATS.length - 1 ? 'col-span-2 md:col-span-1' : ''
            }`}
          >
            <RealisticIcon src={stat.icon} alt={stat.label} size="xs" className="mb-0.5" />
            <p className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-[#102a5e] leading-none">{stat.value}</p>
            <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
