import { PAGE_MAX } from '../../data/constants'
import { ABOUT_DOCTORS } from '../../data/aboutData'

export default function AboutTeam() {
  return (
    <section className={`${PAGE_MAX} pb-10 sm:pb-14 w-full`}>
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="inline-block bg-[#e8f1fd] text-blue-600 font-bold tracking-[0.12em] text-[10px] sm:text-[11px] uppercase px-4 py-1.5 rounded-full mb-4">
          Our Team
        </span>
        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#102a5e] mb-3">
          Meet Our Dedicated Doctors
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          Experienced specialists committed to providing personalized, compassionate care for every member of your family.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {ABOUT_DOCTORS.map((doctor) => (
          <div
            key={doctor.name}
            className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(16,42,94,0.08)] overflow-hidden text-center"
          >
            <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#f0f4fa]">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="px-4 py-5 sm:py-6">
              <h3 className="font-bold text-[#102a5e] text-sm sm:text-base">{doctor.name}</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs mt-1">{doctor.qualifications}</p>
              <p className="text-blue-600 font-semibold text-xs sm:text-sm mt-1.5">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
