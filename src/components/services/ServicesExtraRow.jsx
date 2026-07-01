import { PAGE_MAX } from '../../data/constants'
import { SERVICES_EXTRA } from '../../data/servicesData'
import RealisticIcon from '../RealisticIcon'

function ServiceIconBadge({ item, mobile }) {
  if (mobile) {
    return (
      <div className="flex flex-col items-center text-center gap-2 py-1">
        <div className="w-12 h-12 rounded-xl bg-[#eef4fc] border border-blue-100 flex items-center justify-center">
          <RealisticIcon src={item.icon} alt={item.label} size="xs" className="w-8 h-8" />
        </div>
        <p className="text-[#102a5e] font-bold text-[9px] leading-tight max-w-[90px]">{item.label}</p>
      </div>
    )
  }

  return (
    <div className="group flex flex-col items-center justify-center text-center px-1 sm:px-3 py-2 min-w-0">
      <div className="relative mb-2 sm:mb-3 shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 shadow-sm">
        <RealisticIcon src={item.icon} alt={item.label} size="sm" className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-sm" />
      </div>
      <p className="text-[#102a5e] font-bold text-[9px] sm:text-[11px] leading-tight max-w-[80px] sm:max-w-[110px]">
        {item.label}
      </p>
    </div>
  )
}

export default function ServicesExtraRow() {
  return (
    <section className={`${PAGE_MAX} py-5 sm:py-8 w-full`}>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(16,42,94,0.06)] px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
        <p className="text-center text-blue-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-4 sm:mb-8">
          Additional Services
        </p>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:hidden">
          {SERVICES_EXTRA.map((item) => (
            <ServiceIconBadge key={item.label} item={item} mobile />
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="flex w-full divide-x divide-gray-200">
            {SERVICES_EXTRA.map((item) => (
              <div key={item.label} className="flex-1 min-w-0">
                <ServiceIconBadge item={item} mobile={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
