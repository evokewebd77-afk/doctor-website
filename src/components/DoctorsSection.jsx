import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PAGE_MAX } from '../data/constants'
import { DOCTORS_LIST } from '../data/doctorsData'
import CloudinaryImage from './media/CloudinaryImage'

export default function DoctorsSection() {
  return (
    <section className={`${PAGE_MAX} py-6 sm:py-8 lg:py-10 w-full`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 sm:mb-6 lg:mb-8">
        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[2rem] xl:text-3xl font-bold text-[#102a5e]">
          Our Doctors
        </h2>
        <Link
          to="/doctors"
          className="text-[10px] sm:text-[11px] font-semibold text-blue-600 flex items-center gap-1.5 hover:underline tracking-wide uppercase shrink-0"
        >
          View All Doctors
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {DOCTORS_LIST.map((doctor) => (
          <div
            key={doctor.name}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] border border-gray-100 flex flex-col md:flex-row min-h-0 md:min-h-[220px]"
          >
            <div className="w-full h-[200px] md:w-[118px] lg:w-[130px] md:h-auto shrink-0 bg-white flex items-end justify-center md:justify-start overflow-hidden">
              <CloudinaryImage
                src={doctor.image}
                alt={doctor.name}
                variant="portrait"
                className="w-full h-full md:h-[220px] lg:h-[230px] object-cover object-top"
              />
            </div>

            <div className="flex flex-col justify-center py-4 px-4 md:pr-4 md:pl-3 min-w-0 flex-1">
              <h3 className="font-bold text-[#102a5e] text-[15px] lg:text-base leading-tight">{doctor.name}</h3>
              <p className="text-[#c2410c] text-[10px] lg:text-[11px] font-medium mt-1 leading-snug">{doctor.qualifications}</p>
              <p className="text-blue-600 text-[12px] font-semibold mt-1">{doctor.specialty}</p>
              <p className="text-gray-500 text-[11px] lg:text-xs leading-relaxed mt-2 line-clamp-3">{doctor.bio}</p>
              <button
                type="button"
                className="mt-3 self-start text-[10px] font-bold text-blue-600 border border-blue-400 px-3.5 py-1.5 rounded-full flex items-center gap-1 hover:bg-blue-50 transition-colors uppercase tracking-wide"
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
