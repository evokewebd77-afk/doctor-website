import { ArrowRight, Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE } from '../../data/constants'
import { DOCTORS_LIST } from '../../data/doctorsData'
import RealisticIcon from '../RealisticIcon'

export default function DoctorsGrid() {
  return (
    <section className={`${PAGE_MAX} py-10 sm:py-14 w-full`}>
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#102a5e] mb-3">
          Meet Our Doctors
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          Skilled specialists dedicated to compassionate, family-centered care — here for you at every stage of life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
        {DOCTORS_LIST.map((doctor) => (
          <div
            key={doctor.name}
            className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(16,42,94,0.08)] overflow-hidden flex flex-col"
          >
            <div className="bg-[#f0f4fa] flex items-end justify-center px-3 pt-4 sm:px-4 sm:pt-5">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-auto object-contain object-bottom"
                loading="lazy"
              />
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <h3 className="font-bold text-[#102a5e] text-base sm:text-lg">{doctor.name}</h3>
              <p className="text-blue-600 font-semibold text-xs sm:text-sm mt-0.5">{doctor.specialty}</p>
              <p className="text-gray-500 text-[10px] sm:text-xs mt-1">{doctor.qualifications}</p>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-3 line-clamp-3">{doctor.bio}</p>

              <ul className="mt-4 space-y-2.5 flex-1">
                {doctor.highlights.map((item) => (
                  <li key={item.text} className="flex items-center gap-2.5 text-gray-600 text-[11px] sm:text-xs">
                    <RealisticIcon src={item.icon} alt="" size="xs" className="w-6 h-6 shrink-0 drop-shadow-sm" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-2.5 mt-5 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  className="flex-1 text-xs font-bold text-blue-600 border border-blue-400 px-4 py-2.5 rounded-full flex items-center justify-center gap-1 hover:bg-blue-50 transition-colors uppercase tracking-wide"
                >
                  View Profile
                  <ArrowRight className="w-3 h-3" />
                </button>
                <a
                  href={`tel:${CLINIC_PHONE}`}
                  className="flex-1 text-xs font-bold text-white bg-blue-600 px-4 py-2.5 rounded-full flex items-center justify-center gap-1.5 hover:bg-blue-700 transition-colors uppercase tracking-wide"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
