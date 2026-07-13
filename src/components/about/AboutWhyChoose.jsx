import { PAGE_MAX } from '../../data/constants'
import { ABOUT_WHY_CHOOSE, ABOUT_WHY_CHOOSE_IMAGE } from '../../data/aboutData'
import RealisticIcon from '../RealisticIcon'
import CloudinaryImage from '../media/CloudinaryImage'

export default function AboutWhyChoose() {
  return (
    <section className={`${PAGE_MAX} py-10 sm:py-14 lg:py-16 w-full`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        <div>
          <span className="inline-block bg-[#e8f1fd] text-blue-600 font-bold tracking-[0.12em] text-[10px] sm:text-[11px] uppercase px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#102a5e] mb-6 sm:mb-8 leading-tight">
            Exceptional Care, Every Step of the Way
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {ABOUT_WHY_CHOOSE.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <RealisticIcon src={item.icon} alt={item.title} size="xs" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-[#102a5e] text-xs sm:text-sm mb-0.5 leading-snug">{item.title}</h3>
                  <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(16,42,94,0.1)] border border-gray-100">
            <CloudinaryImage
              src={ABOUT_WHY_CHOOSE_IMAGE}
              alt="Doctor caring for a patient and family member"
              variant="hero"
              className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[5/4]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
