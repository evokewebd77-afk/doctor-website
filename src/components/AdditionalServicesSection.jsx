import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PAGE_MAX } from '../data/constants'
import { RI } from '../data/realisticIcons'
import RealisticIcon from './RealisticIcon'

const ADDITIONAL_GROUPS = [
  {
    label: 'Diagnostics & Monitoring',
    accent: 'blue',
    services: [
      { title: 'Diagnostics & Lab', desc: 'Pathology, radiology & advanced testing', icon: RI.microscope },
      { title: 'Home Sample Collection', desc: 'Lab samples collected from your home', icon: RI.lab },
      { title: 'Vital Monitoring', desc: 'BP, sugar & health tracking', icon: RI.heart },
    ],
  },
  {
    label: 'Home & Wellness',
    accent: 'teal',
    services: [
      { title: 'Nursing & Home Care', desc: 'Skilled nursing at home', icon: RI.home },
      { title: 'Home Visit Consultation', desc: 'Doctor visits at your doorstep', icon: RI.doctor },
      { title: 'Physiotherapy', desc: 'Restore mobility & strength', icon: RI.activity },
      { title: 'Teleconsultation', desc: 'Virtual doctor consultations', icon: RI.video },
      { title: 'Vaccination Services', desc: 'Immunization for all ages', icon: RI.syringe },
    ],
  },
  {
    label: 'Emergency & Urgent Care',
    accent: 'red',
    services: [
      { title: 'Emergency Consultation', desc: '24/7 doctors on call', icon: RI.siren },
      { title: 'Ambulance Support', desc: 'Quick emergency transport', icon: RI.ambulance },
    ],
  },
]

const ACCENT_STYLES = {
  blue: {
    bar: 'bg-blue-600',
    badge: 'bg-blue-50 text-blue-700 border-blue-100',
    card: 'hover:border-blue-200 hover:shadow-[0_8px_28px_rgba(37,99,235,0.12)]',
    icon: 'bg-blue-50 border-blue-100',
  },
  teal: {
    bar: 'bg-teal-600',
    badge: 'bg-teal-50 text-teal-700 border-teal-100',
    card: 'hover:border-teal-200 hover:shadow-[0_8px_28px_rgba(13,148,136,0.12)]',
    icon: 'bg-teal-50 border-teal-100',
  },
  red: {
    bar: 'bg-red-500',
    badge: 'bg-red-50 text-red-700 border-red-100',
    card: 'hover:border-red-200 hover:shadow-[0_8px_28px_rgba(239,68,68,0.12)]',
    icon: 'bg-red-50 border-red-100',
  },
}

function ServiceCard({ service, style, className = '' }) {
  return (
    <div
      className={`group flex items-center gap-4 bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-[0_4px_16px_rgba(16,42,94,0.06)] transition-all duration-200 hover:-translate-y-0.5 shrink-0 ${style.card} ${className}`}
    >
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform ${style.icon}`}>
        <RealisticIcon src={service.icon} alt={service.title} size="sm" />
      </div>
      <div className="min-w-0">
        <h4 className="text-[#102a5e] font-bold text-sm sm:text-[15px] leading-snug mb-1 group-hover:text-blue-700 transition-colors">
          {service.title}
        </h4>
        <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">{service.desc}</p>
      </div>
    </div>
  )
}

export default function AdditionalServicesSection() {
  return (
    <section className={`${PAGE_MAX} py-6 sm:py-8 lg:py-10 w-full`}>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div>
          <p className="text-blue-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-2">
            Support Services
          </p>
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#102a5e]">
            Additional Services
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
            Extra care options to make healthcare more convenient and accessible for your family.
          </p>
        </div>
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:underline shrink-0 self-start sm:self-auto"
        >
          View All Services
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </Link>
      </div>

      <div className="space-y-8 sm:space-y-10">
        {ADDITIONAL_GROUPS.map((group) => {
          const style = ACCENT_STYLES[group.accent]
          return (
            <div key={group.label}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-1 h-6 rounded-full ${style.bar}`} />
                <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${style.badge}`}>
                  {group.label}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                {group.services.map((service) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    style={style}
                    className={
                      group.services.length === 2
                        ? 'w-full sm:flex-1 sm:min-w-[280px]'
                        : 'w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] xl:flex-1 xl:min-w-[220px]'
                    }
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
