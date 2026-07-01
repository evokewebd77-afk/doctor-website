import { ArrowRight } from 'lucide-react'
import { PAGE_MAX } from '../../data/constants'
import { LAB_SERVICES } from '../../data/labServicesData'
import RealisticIcon from '../RealisticIcon'

export default function LabServicesGrid() {
  return (
    <section className={`${PAGE_MAX} pt-20 sm:pt-24 pb-8 sm:pb-12 w-full`}>
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <p className="text-blue-500 font-bold tracking-[0.2em] text-[10px] sm:text-[11px] uppercase mb-3">
          What We Offer
        </p>
        <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#102a5e] mb-3">
          Our Lab Services
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Comprehensive diagnostic testing across every major laboratory discipline for accurate, timely results.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
        {LAB_SERVICES.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(16,42,94,0.06)] hover:shadow-[0_8px_28px_rgba(16,42,94,0.1)] transition-shadow p-4 sm:p-5 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 sm:mb-4">
              <RealisticIcon src={service.icon} alt={service.title} size="sm" />
            </div>
            <h3 className="font-bold text-[#102a5e] text-[12px] sm:text-sm mb-1.5 sm:mb-2 leading-snug">{service.title}</h3>
            <p className="text-gray-500 text-[10px] sm:text-[11px] leading-relaxed mb-3 sm:mb-4 line-clamp-3 flex-1 hidden sm:block">
              {service.desc}
            </p>
            <a href="#" className="text-[10px] sm:text-[11px] font-semibold text-blue-600 inline-flex items-center gap-1 hover:underline mt-auto">
              Learn More
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
