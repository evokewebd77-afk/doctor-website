import { PAGE_MAX } from '../../data/constants'
import { LAB_HERO_VIDEO, LAB_HERO_FEATURES, LAB_STATS } from '../../data/labServicesData'
import Header from '../Header'
import RealisticIcon from '../RealisticIcon'

export default function LabHero() {
  return (
    <section className="relative w-full bg-[#f8fafe]">
      <Header variant="solid" />

      <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[540px]">
        {/* Video — right side only */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-[70%_center] sm:object-right pointer-events-none"
            aria-hidden
          >
            <source src={LAB_HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 sm:from-white sm:via-white/85 sm:to-transparent lg:via-white/70" />
        </div>

        {/* Text content */}
        <div className={`relative z-10 ${PAGE_MAX} flex flex-col justify-center min-h-[400px] sm:min-h-[440px] lg:min-h-[480px] pt-8 sm:pt-12 pb-28 sm:pb-32`}>
          <div className="w-full max-w-[520px] lg:max-w-[48%] space-y-4 sm:space-y-5">
            <span className="inline-block bg-white text-blue-600 font-bold tracking-[0.12em] text-[10px] sm:text-[11px] uppercase px-4 py-1.5 rounded-full border border-blue-200 shadow-sm">
              Lab Services
            </span>

            <h1 className="font-serif-display text-[1.75rem] sm:text-[2.35rem] lg:text-[2.65rem] font-bold text-[#102a5e] leading-[1.12]">
              Advanced Testing.{' '}
              <span className="text-blue-600">Accurate Results.</span>{' '}
              Better Decisions.
            </h1>

            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-lg">
              Our state-of-the-art laboratory delivers precise, reliable, and timely results to help you take
              charge of your health with confidence.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-1">
              {LAB_HERO_FEATURES.map((item) => (
                <div key={item.label} className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <RealisticIcon src={item.icon} alt={item.label} size="xs" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#102a5e] font-bold text-sm leading-tight">{item.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar — overlaps bottom, separate from hero bg */}
        <div className={`absolute bottom-0 left-0 right-0 z-30 ${PAGE_MAX} translate-y-1/2`}>
          <div className="bg-[#102a5e] rounded-2xl sm:rounded-3xl shadow-[0_12px_40px_rgba(16,42,94,0.2)] px-4 sm:px-8 py-5 sm:py-6">
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
      </div>
    </section>
  )
}
