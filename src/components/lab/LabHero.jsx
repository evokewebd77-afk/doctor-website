import { PAGE_MAX } from '../../data/constants'
import { LAB_HERO_IMAGE, LAB_HERO_FEATURES, LAB_STATS } from '../../data/labServicesData'
import Header from '../Header'
import RealisticIcon from '../RealisticIcon'

export default function LabHero() {
  return (
    <section className="relative w-full bg-[#f8fafe]">
      <Header />

      <div className="relative w-full min-h-[560px] sm:min-h-[560px] lg:min-h-[600px]">
        {/* Image — right side only */}
        <div className="absolute inset-0 overflow-hidden bg-white">
          <img
            src={LAB_HERO_IMAGE}
            alt="Lab Diagnostics"
            className="absolute inset-0 w-full h-full object-cover object-[75%_bottom] sm:object-[right_top] pointer-events-none select-none"
            aria-hidden
          />
          {/* Mobile gradient with reduced opacity so lab image is clearly visible */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-white/80 via-white/45 via-50% to-transparent pointer-events-none" />
          {/* Desktop gradient (left-to-right) */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white via-white/85 via-45% to-transparent w-full md:w-[68%] lg:w-[55%] pointer-events-none" />
        </div>

        {/* Text content */}
        <div className={`relative z-10 ${PAGE_MAX} flex flex-col justify-center min-h-[460px] sm:min-h-[480px] lg:min-h-[520px] py-10 sm:py-14 lg:py-16`}>
          <div className="w-full max-w-[520px] lg:max-w-[48%] space-y-4 sm:space-y-5">
            <span className="inline-block bg-white text-blue-600 font-bold tracking-[0.12em] text-[10px] sm:text-[11px] uppercase px-4 py-1.5 rounded-full border border-blue-200 shadow-sm">
              Lab Services
            </span>

            <h1 className="font-serif-display text-[1.75rem] sm:text-[2.25rem] lg:text-[2.65rem] font-bold text-[#102a5e] leading-[1.12] [text-shadow:_0_1px_3px_#fff,_0_0_8px_#fff] md:[text-shadow:none]">
              Advanced Testing.{' '}
              <span className="text-blue-600">Accurate Results.</span>{' '}
              Better Decisions.
            </h1>

            <p className="text-[#071739] md:text-[#2b3a55] text-[13.5px] sm:text-[15px] font-semibold sm:font-normal leading-relaxed max-w-lg [text-shadow:_0_1px_3px_#fff,_0_0_8px_#fff,_0_0_16px_rgba(255,255,255,0.95)] md:[text-shadow:none]">
              Our state-of-the-art laboratory delivers precise, reliable, and timely results to help you take
              charge of your health with confidence.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-6 pt-1">
              {LAB_HERO_FEATURES.map((item) => (
                <div key={item.label} className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white/90 md:bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                    <RealisticIcon src={item.icon} alt={item.label} size="xs" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#102a5e] font-bold text-sm leading-tight [text-shadow:_0_1px_2px_#fff,_0_0_6px_#fff] md:[text-shadow:none]">{item.label}</p>
                    <p className="text-gray-800 md:text-gray-600 font-semibold md:font-medium text-xs mt-0.5 [text-shadow:_0_1px_2px_#fff,_0_0_6px_#fff] md:[text-shadow:none]">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — placed cleanly after hero banner */}
      <div className={`${PAGE_MAX} py-6 sm:py-8`}>
        <div className="bg-[#102a5e] rounded-2xl sm:rounded-3xl shadow-[0_12px_40px_rgba(16,42,94,0.15)] px-4 sm:px-8 py-5 sm:py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {LAB_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-1 sm:gap-1.5">
                <RealisticIcon src={stat.icon} alt={stat.label} size="xs" className="drop-shadow-sm" />
                <p className="text-[20px] sm:text-[26px] font-bold text-white leading-none">{stat.value}</p>
                <p className="text-[9px] sm:text-xs text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
