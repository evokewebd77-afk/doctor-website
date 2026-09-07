import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PAGE_MAX } from '../data/constants'
import { RI } from '../data/realisticIcons'
import RealisticIcon from './RealisticIcon'
import CloudinaryImage from './media/CloudinaryImage'

const SPECIALITIES = [
  {
    title: 'General Medicine',
    desc: 'Comprehensive primary care for adults with chronic disease management and preventive health.',
    icon: RI.stethoscope,
    image: 'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782803298/ChatGPT_Image_Jun_30_2026_12_28_40_PM_ivxuql.png',
    to: '/services/general-medicine',
  },
  {
    title: 'Obstetrics & Gynaecology',
    desc: "Expert women's health care from pregnancy to menopause with compassionate support.",
    icon: RI.woman,
    image: 'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782803293/obstetrics_gynaecology_separate_tpysnq.png',
    imageZoom: true,
    to: '/services/obstetrics-gynaecology',
  },
  {
    title: 'Pediatrics & Neonatology',
    desc: 'Specialized care for newborns, infants, children and adolescents at every stage.',
    icon: RI.baby,
    image: '/child.png',
    to: '/services/pediatrics-neonatology',
  },
]

export default function SpecialitiesSection() {
  return (
    <section className={`${PAGE_MAX} pt-4 sm:pt-6 pb-6 sm:pb-8 lg:py-10 w-full`}>
      <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4 lg:mb-8">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 sm:text-[11px]">
            Our Specialities
          </p>
          <h2 className="font-serif-display text-2xl font-bold text-[#102a5e] sm:text-3xl lg:text-[2rem] xl:text-3xl">
            Comprehensive Care for Every Stage of Life
          </h2>
        </div>
        <Link
          to="/services"
          className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline sm:text-sm"
        >
          View All Specialities
          <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {SPECIALITIES.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-gray-50"
          >
            <div className="relative h-[180px] sm:h-[220px] overflow-hidden">
              <CloudinaryImage
                src={item.image}
                alt={item.title}
                variant="card"
                className={`w-full h-full object-cover object-center ${
                  item.imageZoom ? 'scale-[1.18] origin-center' : ''
                }`}
              />
              <div className="absolute -bottom-5 sm:-bottom-6 left-5 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                <RealisticIcon src={item.icon} alt={item.title} size="sm" />
              </div>
            </div>
            <div className="px-5 sm:px-6 pt-8 sm:pt-9 pb-5 sm:pb-6">
              <h3 className="font-bold text-[#102a5e] text-base sm:text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed mb-4 sm:mb-5">{item.desc}</p>
              <Link to={item.to} className="flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 hover:underline sm:text-sm">
                Learn More
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
