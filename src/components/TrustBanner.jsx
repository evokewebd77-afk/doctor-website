import { ArrowRight } from 'lucide-react'
import { FAMILY_IMG, PAGE_MAX } from '../data/constants'
import { RI } from '../data/realisticIcons'
import RealisticIcon from './RealisticIcon'
import CloudinaryImage from './media/CloudinaryImage'

const FEATURES = [
  { label: 'NABH', sub: 'Quality Care', icon: RI.shield },
  { label: 'Expert', sub: 'Doctors', icon: RI.doctor },
  { label: 'Advanced', sub: 'Diagnostics', icon: RI.microscope },
  { label: 'Personalized', sub: 'Care', icon: RI.heart },
]

export default function TrustBanner() {
  return (
    <div className={`${PAGE_MAX} -mt-3 sm:-mt-5 md:-mt-8 relative z-30 pb-4 w-full`}>
      <div className="bg-white rounded-[18px] sm:rounded-[24px] px-4 py-5 sm:px-7 sm:py-5 md:px-9 md:py-6 shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <CloudinaryImage
              src={FAMILY_IMG}
              alt="Happy family"
              variant="card"
              className="w-[80px] h-[60px] sm:w-[100px] sm:h-[76px] rounded-xl object-cover shrink-0"
            />
            <div className="min-w-0">
              <h3 className="font-bold text-[#102a5e] text-[14px] sm:text-[15px] lg:text-base leading-snug">
                Your Health. Our Priority.
              </h3>
              <p className="text-[11px] sm:text-[12px] text-gray-500 leading-relaxed mt-1 max-w-[230px] lg:max-w-none">
                Trusted by thousands of families for compassionate & comprehensive care.
              </p>
              <button
                type="button"
                className="text-blue-600 font-bold text-[10px] sm:text-[11px] tracking-wide flex items-center gap-1 mt-1.5 hover:underline uppercase"
              >
                Learn More
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4 sm:gap-5 lg:gap-8 shrink-0">
            <div className="grid grid-cols-4 gap-2 sm:flex sm:items-start sm:justify-center md:justify-end sm:gap-5 md:gap-7 lg:gap-9">
              {FEATURES.map((feature) => (
                <div key={feature.label} className="flex flex-col items-center text-center sm:w-[68px]">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f0f4f8] flex items-center justify-center mb-1 sm:mb-1.5">
                    <RealisticIcon src={feature.icon} alt={feature.label} size="xs" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="text-[10px] sm:text-[12px] font-bold text-[#102a5e] leading-tight">{feature.label}</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5">{feature.sub}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-[#102a5e] text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-900 transition-colors text-[11px] tracking-wide uppercase w-full sm:w-auto shrink-0"
            >
              Book Appointment
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
