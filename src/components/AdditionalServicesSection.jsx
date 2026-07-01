import { ArrowRight } from 'lucide-react'
import { PAGE_MAX } from '../data/constants'
import { RI } from '../data/realisticIcons'
import RealisticIcon from './RealisticIcon'

const SERVICES = [
  { title: 'Diagnostics & Lab Services', desc: 'Accurate pathology & radiology', icon: RI.microscope },
  { title: 'Physiotherapy & Rehabilitation', desc: 'Restore mobility & strength', icon: RI.activity },
  { title: 'Nursing & Home Care', desc: 'Skilled nursing at home', icon: RI.home },
  { title: 'Home Visit Consultation', desc: 'Doctor visits at your doorstep', icon: RI.doctor },
  { title: 'Teleconsultation', desc: 'Virtual doctor consultations', icon: RI.video },
  { title: 'Vital Monitoring', desc: 'BP, sugar & health tracking', icon: RI.heart },
  { title: 'Vaccination Services', desc: 'Immunization for all ages', icon: RI.syringe },
  { title: 'Home Sample Collection', desc: 'Lab samples from home', icon: RI.lab },
  { title: 'Emergency Consultation', desc: '24/7 doctors on call', icon: RI.ambulance },
  { title: 'Ambulance Support', desc: 'Quick emergency transport', icon: RI.ambulance },
]

export default function AdditionalServicesSection() {
  return (
    <section className={`${PAGE_MAX} py-6 sm:py-8 lg:py-10 w-full`}>
      <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[2rem] xl:text-3xl font-bold text-[#102a5e] mb-5 sm:mb-6 lg:mb-8">
        Additional Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-5 sm:gap-y-6">
        {SERVICES.map((service) => (
          <div key={service.title} className="flex items-start gap-3 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              <RealisticIcon src={service.icon} alt={service.title} size="xs" />
            </div>
            <div className="min-w-0">
              <h4 className="text-[#102a5e] font-semibold text-[13px] sm:text-sm leading-snug mb-0.5 sm:mb-1">{service.title}</h4>
              <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
