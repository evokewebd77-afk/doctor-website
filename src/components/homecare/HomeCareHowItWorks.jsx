import { PAGE_MAX } from '../../data/constants'
import { HOME_CARE_STEPS } from '../../data/homeCareData'
import RealisticIcon from '../RealisticIcon'

function StepArrow({ className = '', vertical = false }) {
  if (vertical) {
    return (
      <svg
        className={`shrink-0 text-blue-300 ${className}`}
        width="12"
        height="40"
        viewBox="0 0 12 40"
        fill="none"
        aria-hidden
      >
        <line x1="6" y1="0" x2="6" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <polygon points="1,30 6,40 11,30" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg
      className={`shrink-0 text-blue-300 ${className}`}
      width="56"
      height="12"
      viewBox="0 0 56 12"
      fill="none"
      aria-hidden
    >
      <line x1="0" y1="6" x2="44" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <polygon points="44,1 54,6 44,11" fill="currentColor" />
    </svg>
  )
}

function StepCard({ item }) {
  return (
    <article className="flex flex-col items-center text-center flex-1 min-w-0 max-w-[220px]">
      <div className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full bg-[#e8f1fd] flex items-center justify-center mb-4">
        <RealisticIcon src={item.icon} alt={item.title} size="md" />
      </div>
      <h3 className="font-bold text-[#102a5e] text-sm sm:text-[15px] mb-2 leading-snug px-1">
        {item.title}
      </h3>
      <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed px-2">{item.desc}</p>
    </article>
  )
}

export default function HomeCareHowItWorks() {
  return (
    <section className={`${PAGE_MAX} py-10 sm:py-14 lg:py-16 w-full bg-white`}>
      <h2 className="font-serif-display text-xl sm:text-2xl lg:text-[2rem] font-bold text-[#102a5e] text-center mb-10 sm:mb-14">
        Simple Steps to Get Care at Home
      </h2>

      {/* Mobile */}
      <div className="flex flex-col items-center gap-6 sm:hidden">
        {HOME_CARE_STEPS.map((item, index) => (
          <div key={item.step} className="flex flex-col items-center w-full">
            <StepCard item={item} />
            {index < HOME_CARE_STEPS.length - 1 && (
              <StepArrow vertical className="my-2" />
            )}
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex items-start justify-center gap-2 lg:gap-4">
        {HOME_CARE_STEPS.map((item, index) => (
          <div key={item.step} className="flex items-start">
            <StepCard item={item} />
            {index < HOME_CARE_STEPS.length - 1 && (
              <div className="flex items-center pt-8 px-2 lg:px-3" aria-hidden>
                <StepArrow className="w-12 lg:w-14" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
