import { ArrowRight, Calendar, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PAGE_MAX } from '../data/constants'
import { DOCTORS_LIST } from '../data/doctorsData'
import CloudinaryImage from './media/CloudinaryImage'
import RealisticIcon from './RealisticIcon'

export default function DoctorsSection() {
  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-18 bg-white">
      <div className={`${PAGE_MAX} w-full`}>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] bg-blue-50 text-blue-600 border border-blue-100 mb-3">
              <Stethoscope className="w-3.5 h-3.5 text-blue-500" />
              <span>Expert Medical Team</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#0a1f47] leading-tight">
              Our Doctors
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
              Highly qualified, board-certified specialists dedicated to compassionate and personalized family healthcare.
            </p>
          </div>
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-100 text-blue-600 font-bold text-xs sm:text-sm shadow-xs hover:bg-blue-600 hover:text-white hover:shadow-md transition-all duration-300 shrink-0 self-start sm:self-auto group"
          >
            <span>View All Doctors</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DOCTORS_LIST.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_24px_rgba(16,42,94,0.06)] hover:shadow-[0_16px_40px_rgba(16,42,94,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Doctor Portrait & Badges */}
              <div className="relative h-[240px] sm:h-[270px] bg-gradient-to-b from-[#edf3fd] via-[#f3f7fd] to-[#f8fafe] flex items-end justify-center px-4 pt-6 overflow-hidden">
                <CloudinaryImage
                  src={doctor.image}
                  alt={doctor.name}
                  variant="portrait"
                  className="w-full h-full max-h-[230px] sm:max-h-[260px] object-contain object-bottom transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                />

                {/* Experience Badge */}
                {doctor.highlights?.[0] && (
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-blue-100/80 shadow-xs text-[11px] font-bold text-[#0a1f47]">
                    <Calendar className="w-3 h-3 text-blue-600" />
                    <span>{doctor.highlights[0].text.split(' ')[0]} Exp</span>
                  </div>
                )}
              </div>

              {/* Doctor Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Specialty Tag */}
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100/80 mb-2.5">
                    {doctor.specialty}
                  </span>

                  {/* Name & Qualifications */}
                  <h3 className="text-[#0a1f47] font-bold text-lg sm:text-xl group-hover:text-blue-600 transition-colors leading-snug">
                    {doctor.name}
                  </h3>
                  <p className="text-amber-800 font-semibold text-xs mt-1 mb-3">{doctor.qualifications}</p>

                  {/* Bio Description */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-4 line-clamp-3">
                    {doctor.bio}
                  </p>

                  {/* Key Highlight Pill */}
                  {doctor.highlights?.[0] && (
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100/80 mb-5">
                      <RealisticIcon
                        src={doctor.highlights[0].icon}
                        alt=""
                        size="xs"
                        className="w-5 h-5 shrink-0"
                      />
                      <span className="text-xs font-semibold text-slate-700">{doctor.highlights[0].text}</span>
                    </div>
                  )}
                </div>

                {/* Action Footer */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100 mt-auto">
                  <Link
                    to="/doctors"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0b1f45] hover:bg-[#102a5e] text-white font-bold text-xs shadow-xs hover:shadow-md transition-all active:scale-95"
                  >
                    <span>Book Now</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
