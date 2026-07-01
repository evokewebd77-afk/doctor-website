import { PAGE_MAX } from '../../data/constants'
import { DOCTORS_WHY_CHOOSE } from '../../data/doctorsData'
import RealisticIcon from '../RealisticIcon'

export default function DoctorsWhyChoose() {
  return (
    <section className={`${PAGE_MAX} pb-10 sm:pb-14 w-full`}>
      <h2 className="font-serif-display text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-[#102a5e] text-center mb-8 sm:mb-10">
        Why Choose Our Doctors?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {DOCTORS_WHY_CHOOSE.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(16,42,94,0.06)] p-5 sm:p-6 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
              <RealisticIcon src={item.icon} alt={item.title} size="md" />
            </div>
            <h3 className="font-bold text-[#102a5e] text-sm sm:text-base mb-2">{item.title}</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
