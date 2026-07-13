import { useEffect, useState } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HERO_SLIDES, HERO_SLIDE_IMAGE_OPTS, PAGE_MAX } from '../data/constants'
import Header from './Header'
import CloudinaryImage from './media/CloudinaryImage'

const SLIDE_INTERVAL_MS = 6000

const HERO_SLIDE_ALTS = [
  'Family Cure Clinic reception',
  'Family Cure Clinic doctors team',
  'Family Cure Clinic patient care',
]

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (HERO_SLIDES.length <= 1) return undefined

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length)
    }, SLIDE_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full z-10 bg-[#f8fafe] md:min-h-[560px] lg:min-h-[620px]">
      {/* Desktop: full background slider */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {HERO_SLIDES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== activeSlide}
          >
            <CloudinaryImage
              src={src}
              alt=""
              aria-hidden
              variant="hero"
              loading={index === 0 ? 'eager' : 'lazy'}
              className={`w-full h-full min-h-[560px] lg:min-h-[620px] ${HERO_SLIDE_IMAGE_OPTS[index]?.desktop ?? 'object-cover object-right'}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent w-[62%]" />
      </div>

      <Header />

      <div className={`relative z-10 ${PAGE_MAX} pt-[5rem] sm:pt-[5.75rem] md:pt-8 lg:pt-10 pb-8 sm:pb-10 md:pb-12 lg:pb-14`}>
        <div className="max-w-xl lg:max-w-[36rem] xl:max-w-[40rem] space-y-4 sm:space-y-5 py-2 lg:py-6">
          <p className="text-red-600 font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-[11px] uppercase">
            Community Care. Family First.
          </p>
          <h2 className="font-serif-display text-[clamp(1.65rem,4vw,2.85rem)] font-bold text-[#0a1f47] leading-[1.15]">
            Your Trusted Family Clinic in Tricity
          </h2>
          <p className="text-[#2d3748] text-[13px] sm:text-sm md:text-[15px] leading-[1.7] max-w-2xl">
            Complete healthcare for children, women, adults, and senior citizens—all under one roof.
          </p>
          <p className="text-gray-500 text-[12px] sm:text-[13px] md:text-sm leading-[1.7] max-w-2xl">
            Providing doctor consultations, diagnostics, vaccinations, women&apos;s healthcare, home healthcare, and
            teleconsultation services across Chandigarh, Mohali, and Panchkula.
          </p>

          {/* Mobile: slide image shown separately (not as bg) */}
          <div
            className={`md:hidden relative w-full rounded-2xl overflow-hidden shadow-[0_8px_28px_rgba(16,42,94,0.12)] border border-gray-100 bg-white ${
              HERO_SLIDE_IMAGE_OPTS[activeSlide]?.mobileAspect ?? 'aspect-[4/3] sm:aspect-[16/11]'
            }`}
          >
            {HERO_SLIDES.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === activeSlide ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden={index !== activeSlide}
              >
                <CloudinaryImage
                  src={src}
                  alt={HERO_SLIDE_ALTS[index] ?? 'Family Cure Clinic'}
                  variant="hero"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className={`w-full h-full ${HERO_SLIDE_IMAGE_OPTS[index]?.mobile ?? 'object-cover object-right'}`}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 pt-1">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-[#102a5e] text-white px-5 sm:px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors text-[11px] sm:text-xs tracking-wide w-full sm:w-auto shadow-[0_4px_20px_rgba(16,42,94,0.25)]"
            >
              Book Appointment
              <Calendar className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 bg-white text-[#102a5e] border-2 border-[#102a5e]/25 px-5 sm:px-6 py-3 rounded-full font-semibold hover:border-[#102a5e]/50 hover:bg-white transition-colors text-[11px] sm:text-xs tracking-wide w-full sm:w-auto shadow-md"
            >
              Explore Services
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {HERO_SLIDES.length > 1 && (
            <div className="flex items-center gap-2 pt-2">
              {HERO_SLIDES.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeSlide ? 'w-6 bg-[#102a5e]' : 'w-2 bg-[#102a5e]/30 hover:bg-[#102a5e]/50'
                  }`}
                  aria-label={`Show hero slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
