import { PAGE_MAX } from '../../data/constants'
import { ABOUT_HERO_IMAGE } from '../../data/aboutData'
import Header from '../Header'
import CloudinaryImage from '../media/CloudinaryImage'

export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#f8fafe]">
      <Header />

      <div className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px]">
        <div className="absolute inset-0 overflow-hidden">
          <CloudinaryImage
            src={ABOUT_HERO_IMAGE}
            alt="Family Cure Clinic doctor consulting with a family"
            variant="hero"
            className="w-full h-full object-cover object-[85%_70%] md:object-[100%_30%] pointer-events-none select-none"
          />
          {/* Mobile gradient (top-down) with reduced opacity so image is clearly visible */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#f8fafe]/75 via-[#f8fafe]/40 via-50% to-transparent pointer-events-none" />
          {/* Desktop gradient (left-to-right) */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#f8fafe] via-[#f8fafe]/95 via-45% to-transparent w-full md:w-[70%] lg:w-[56%]" />
        </div>

        <div className={`relative z-10 ${PAGE_MAX} flex flex-col justify-center min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] py-10 sm:py-14 lg:py-16`}>
          <div className="w-full max-w-[500px] lg:max-w-[46%] space-y-4 sm:space-y-5">
            <span className="inline-block bg-white text-blue-600 font-bold tracking-[0.14em] text-[10px] sm:text-[11px] uppercase px-4 py-1.5 rounded-full border border-blue-200/80 shadow-sm">
              About Us
            </span>

            <h1 className="font-serif-display text-[1.75rem] sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.65rem] font-bold text-[#102a5e] leading-[1.15]">
              Caring for Families, Building Healthier Lives
            </h1>

            <p className="text-[#2b3a55] text-[13.5px] sm:text-[15px] font-medium sm:font-normal leading-relaxed max-w-lg">
              At Family Cure Clinic, we are dedicated to providing compassionate, high-quality healthcare for you and
              your loved ones. From routine check-ups to specialized treatments, our team is here to support your
              family&apos;s health journey with expertise and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
