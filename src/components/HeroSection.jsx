import { useEffect, useState } from 'react'
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, PhoneCall, MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HERO_SLIDES, HERO_SLIDE_IMAGE_OPTS, HOME_EMERGENCY_PHONE, HOME_EMERGENCY_PHONE_DISPLAY, PAGE_MAX, CLINIC_MAPS_URL } from '../data/constants'
import Header from './Header'
import CloudinaryImage from './media/CloudinaryImage'

const SLIDE_INTERVAL_MS = 3000

const HERO_SLIDE_ALTS = [
  'Family Cure Clinic reception',
  'Family Cure Clinic patient care',
  'Family Cure Clinic doctors team',
  'Family Cure Clinic medical team',
]

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slideCount = HERO_SLIDES.length

  const goToSlide = (index) => {
    setActiveSlide((index + slideCount) % slideCount)
  }

  const goToNextSlide = () => goToSlide(activeSlide + 1)
  const goToPrevSlide = () => goToSlide(activeSlide - 1)

  useEffect(() => {
    if (slideCount <= 1) return undefined

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slideCount)
    }, SLIDE_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [slideCount])

  return (
    <section className="relative w-full z-10 bg-[#f8fafe] md:min-h-[660px] lg:min-h-[740px] xl:min-h-[800px] flex flex-col justify-center">
      {/* Desktop: full background slider */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {HERO_SLIDES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-hidden={index !== activeSlide}
          >
            <CloudinaryImage
              src={src}
              alt=""
              aria-hidden
              variant="hero"
              loading={index === 0 ? 'eager' : 'lazy'}
              className={`w-full h-full min-h-[660px] lg:min-h-[740px] xl:min-h-[800px] ${HERO_SLIDE_IMAGE_OPTS[index]?.desktop ?? 'object-cover object-[right_top]'}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafe] via-[#f8fafe]/95 via-55% to-transparent w-[68%] lg:w-[60%] xl:w-[55%] pointer-events-none" />
      </div>

      <Header />

      <div className={`relative z-10 ${PAGE_MAX} pt-4 sm:pt-6 md:pt-10 lg:pt-14 pb-12 sm:pb-16 md:pb-20 lg:pb-24`}>
        <div className="max-w-xl lg:max-w-[35rem] xl:max-w-[39rem] space-y-4 sm:space-y-5 py-2 lg:py-6">
          {/* Location & Timings Quick Bar */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Location Pill */}
            <a
              href={CLINIC_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-xs font-bold tracking-wide shadow-[0_4px_14px_rgba(37,99,235,0.28)] transition-all hover:scale-105 active:scale-95"
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                <MapPin className="w-3 h-3 text-white" />
              </span>
              <span>Aerocity, Mohali</span>
              <span className="text-[10px] text-blue-200 group-hover:text-white transition-colors">↗</span>
            </a>

            {/* Timings Pill with Live Indicator */}
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_2px_12px_rgba(16,42,94,0.06)] text-[11px] sm:text-xs text-[#0a1f47]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="font-bold text-[#0a1f47]">Morning:</span>
              <span className="font-semibold text-slate-700">9:30 AM – 1:00 PM</span>
              <span className="inline-block w-1 h-1 rounded-full bg-slate-300" />
              <span className="font-bold text-[#0a1f47]">Evening:</span>
              <span className="font-semibold text-slate-700">5:00 PM – 8:00 PM</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100/80">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-red-600 font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-[11px] uppercase">
              Community Care · Family First
            </span>
          </div>

          <h1 className="font-serif-display text-[clamp(1.85rem,4.2vw,3rem)] font-bold text-[#0a1f47] leading-[1.18]">
            Your Trusted Family Clinic in Tricity
          </h1>

          <p className="text-[#102a5e] font-semibold text-[14.5px] sm:text-[15.5px] md:text-[17px] leading-[1.6] max-w-xl">
            Complete healthcare for children, women, adults, and senior citizens—all under one roof.
          </p>

          <p className="text-[#1e293b] text-[13.5px] sm:text-[14.5px] md:text-[15.5px] leading-[1.75] max-w-xl font-normal">
            Providing doctor consultations, diagnostics, vaccinations, women&apos;s healthcare, home healthcare, and
            teleconsultation services across <strong className="font-semibold text-[#0a1f47]">Chandigarh</strong>, <strong className="font-semibold text-[#0a1f47]">Mohali</strong>, and <strong className="font-semibold text-[#0a1f47]">Panchkula</strong>.
          </p>

          {/* Mobile: slide image shown separately (not as bg) */}
          <div
            className={`md:hidden relative w-full rounded-2xl overflow-hidden shadow-[0_8px_28px_rgba(16,42,94,0.12)] border border-gray-100 bg-white aspect-[16/10]`}
          >
            {HERO_SLIDES.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
            {slideCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPrevSlide}
                  className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#102a5e] shadow-md backdrop-blur-sm hover:bg-white"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={goToNextSlide}
                  className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#102a5e] shadow-md backdrop-blur-sm hover:bg-white"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#102a5e]/85 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                    {activeSlide + 1} / {slideCount}
                  </span>
                  <span className="truncate rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-[#102a5e] backdrop-blur-sm">
                    {HERO_SLIDE_ALTS[activeSlide]}
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3 pt-1">
            <a
              href={`tel:${HOME_EMERGENCY_PHONE}`}
              className="md:hidden flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors text-[10px] sm:text-xs tracking-wide w-full shadow-[0_4px_20px_rgba(220,38,38,0.28)]"
              aria-label={`Emergency call ${HOME_EMERGENCY_PHONE_DISPLAY}`}
            >
              Emergency
              <PhoneCall className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-[#102a5e] text-white px-4 sm:px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors text-[10px] sm:text-xs tracking-wide w-full sm:w-auto shadow-[0_4px_20px_rgba(16,42,94,0.25)]"
            >
              Book Appointment
              <Calendar className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/services"
              className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 bg-white text-[#102a5e] border-2 border-[#102a5e]/25 px-5 sm:px-6 py-3 rounded-full font-semibold hover:border-[#102a5e]/50 hover:bg-white transition-colors text-[11px] sm:text-xs tracking-wide w-full sm:w-auto shadow-md"
            >
              Explore Services
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {slideCount > 1 && (
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={goToPrevSlide}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#102a5e]/20 bg-white text-[#102a5e] shadow-sm hover:bg-[#102a5e]/5"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {HERO_SLIDES.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeSlide ? 'w-6 bg-[#102a5e]' : 'w-2 bg-[#102a5e]/30 hover:bg-[#102a5e]/50'
                  }`}
                  aria-label={`Show hero slide ${index + 1}`}
                />
              ))}
              <button
                type="button"
                onClick={goToNextSlide}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#102a5e]/20 bg-white text-[#102a5e] shadow-sm hover:bg-[#102a5e]/5"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
