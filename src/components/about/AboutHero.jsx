import { PAGE_MAX } from '../../data/constants'
import { ABOUT_HERO_VIDEO } from '../../data/aboutData'
import Header from '../Header'
import CloudinaryVideo from '../media/CloudinaryVideo'

export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#f8fafe]">
      <Header />

      <div className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]">
        <div className="absolute inset-0 overflow-hidden">
          <CloudinaryVideo
            src={ABOUT_HERO_VIDEO}
            className="absolute inset-0 w-full h-full object-[70%_center] sm:object-right pointer-events-none"
            objectPosition="70% center"
            aria-hidden
          />
        </div>

        <div className={`relative z-10 ${PAGE_MAX} flex flex-col justify-center min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] py-10 sm:py-14 lg:py-16`}>
          <div className="w-full max-w-[520px] lg:max-w-[48%] space-y-4 sm:space-y-5">
            <span className="inline-block bg-[#e8f1fd] text-blue-600 font-bold tracking-[0.12em] text-[10px] sm:text-[11px] uppercase px-4 py-1.5 rounded-full">
              About Us
            </span>

            <h1 className="font-serif-display text-[1.75rem] sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.65rem] font-bold text-[#102a5e] leading-[1.12]">
              Caring for Families, Building Healthier Lives
            </h1>

            <p className="text-gray-500 text-[13px] sm:text-[15px] leading-relaxed max-w-lg">
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
