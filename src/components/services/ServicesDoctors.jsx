import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { PAGE_MAX } from '../../data/constants'
import { SERVICES_DOCTORS } from '../../data/servicesData'
import CloudinaryImage from '../media/CloudinaryImage'

export default function ServicesDoctors() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i === 0 ? SERVICES_DOCTORS.length - 1 : i - 1))
  const next = () => setActiveIndex((i) => (i === SERVICES_DOCTORS.length - 1 ? 0 : i + 1))

  return (
    <section id="doctors" className={`${PAGE_MAX} py-5 sm:py-8 w-full scroll-mt-20`}>
      <h2 className="font-serif-display text-lg sm:text-3xl font-bold text-[#102a5e] text-center mb-5 sm:mb-10">
        <span className="md:hidden">Meet Our Doctors</span>
        <span className="hidden md:inline">Trusted Care. Better Health.</span>
      </h2>

      {/* Mobile: doctor carousel */}
      <div className="md:hidden">
        <div className="flex items-center gap-3 bg-white rounded-2xl p-3.5 shadow-[0_2px_16px_rgba(16,42,94,0.07)] border border-gray-100">
          <CloudinaryImage
            src={SERVICES_DOCTORS[activeIndex].image}
            alt={SERVICES_DOCTORS[activeIndex].name}
            variant="portrait"
            className="w-16 h-16 rounded-full object-cover object-top shrink-0 border-2 border-blue-50"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-[#102a5e] text-sm leading-tight">{SERVICES_DOCTORS[activeIndex].name}</h3>
            <p className="text-gray-500 text-[9px] mt-0.5 leading-snug line-clamp-1">
              {SERVICES_DOCTORS[activeIndex].qualifications}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-0.5 text-amber-500">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="text-[10px] font-bold text-gray-700">{SERVICES_DOCTORS[activeIndex].rating}</span>
              </div>
              <span className="text-blue-600 text-[10px] font-semibold">{SERVICES_DOCTORS[activeIndex].specialty}</span>
            </div>
            <button
              type="button"
              className="mt-1.5 text-[10px] font-bold text-blue-600 flex items-center gap-1 hover:underline uppercase tracking-wide"
            >
              View Profile
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={prev}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#102a5e] bg-white shadow-sm"
            aria-label="Previous doctor"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            {SERVICES_DOCTORS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to doctor ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#102a5e] bg-white shadow-sm"
            aria-label="Next doctor"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop: centered portrait cards */}
      <div className="hidden md:flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-8">
        {SERVICES_DOCTORS.map((doctor) => (
          <div
            key={doctor.name}
            className="w-[260px] lg:w-[280px] bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] border border-gray-100"
          >
            <div className="h-[220px] overflow-hidden bg-gray-50">
              <CloudinaryImage src={doctor.image} alt={doctor.name} variant="portrait" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-bold text-[#102a5e] text-[15px]">{doctor.name}</h3>
              <p className="text-[#c2410c] text-[10px] font-medium mt-1">{doctor.qualifications}</p>
              <p className="text-blue-600 text-xs font-semibold mt-1">{doctor.specialty}</p>
              <button
                type="button"
                className="mt-3 text-[11px] font-bold text-blue-600 flex items-center gap-1 mx-auto hover:underline uppercase tracking-wide"
              >
                View Profile
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
