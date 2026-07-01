import { ArrowRight, Check } from 'lucide-react'
import { PAGE_MAX } from '../../data/constants'
import { LAB_TECH_IMAGE, LAB_TECH_CHECKLIST } from '../../data/labServicesData'

export default function LabTechnology() {
  return (
    <section className={`${PAGE_MAX} py-8 sm:py-12 w-full`}>
      <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(16,42,94,0.1)] border border-gray-100">
        <div className="bg-white p-6 sm:p-10 flex flex-col justify-center order-2 lg:order-1">
          <p className="text-blue-500 font-bold tracking-[0.2em] text-[10px] sm:text-[11px] uppercase mb-3">
            Cutting Edge Technology
          </p>
          <h2 className="font-serif-display text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-[#102a5e] mb-3 leading-snug">
            Technology That Drives Precision
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-5 sm:mb-6">
            Our automated analyzers and AI-assisted reporting systems ensure every test is processed with
            maximum accuracy, speed, and clinical reliability.
          </p>
          <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
            {LAB_TECH_CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[#102a5e] text-sm">
                <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="self-start flex items-center gap-2 bg-[#102a5e] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-900 transition-colors text-xs tracking-wide"
          >
            LEARN MORE
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[400px] order-1 lg:order-2">
          <img
            src={LAB_TECH_IMAGE}
            alt="Advanced laboratory diagnostic equipment"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
