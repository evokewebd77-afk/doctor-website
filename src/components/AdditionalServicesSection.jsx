import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PAGE_MAX, HOME_EMERGENCY_PHONE } from '../data/constants'
import { RI } from '../data/realisticIcons'
import RealisticIcon from './RealisticIcon'

const ADDITIONAL_GROUPS = [
  {
    label: 'Diagnostics & Monitoring',
    subtitle: 'Accurate tests & health tracking',
    accent: 'blue',
    services: [
      {
        title: 'Diagnostics & Lab',
        desc: 'Pathology, radiology & advanced testing',
        icon: RI.microscope,
        to: '/lab-services',
      },
      {
        title: 'Home Sample Collection',
        desc: 'Lab samples collected from your home',
        icon: RI.lab,
        to: '/lab-services',
      },
      {
        title: 'Vital Monitoring',
        desc: 'BP, blood sugar & health tracking',
        icon: RI.heart,
        to: '/services/general-medicine',
      },
    ],
  },
  {
    label: 'Home & Wellness',
    subtitle: 'Professional healthcare delivered at your doorstep',
    accent: 'teal',
    services: [
      {
        title: 'Nursing & Home Care',
        desc: 'Skilled nursing & post-op care at home',
        icon: RI.home,
        to: '/home-care',
      },
      {
        title: 'Home Visit Consultation',
        desc: 'Doctor visits at your doorstep',
        icon: RI.doctor,
        to: '/home-care',
      },
      {
        title: 'Physiotherapy',
        desc: 'Restore mobility, strength & posture',
        icon: RI.activity,
        to: '/home-care',
      },
      {
        title: 'Teleconsultation',
        desc: 'Virtual doctor consultations online',
        icon: RI.video,
        to: '/contact',
      },
      {
        title: 'Vaccination Services',
        desc: 'Immunization for infants, kids & adults',
        icon: RI.syringe,
        to: '/services/pediatrics-neonatology',
      },
    ],
  },
  {
    label: 'Emergency & Urgent Care',
    subtitle: '24/7 immediate assistance when you need it most',
    accent: 'red',
    services: [
      {
        title: 'Emergency Consultation',
        desc: '24/7 doctor triage & emergency response',
        icon: RI.siren,
        to: `tel:${HOME_EMERGENCY_PHONE}`,
        isTel: true,
      },
      {
        title: 'Ambulance Support',
        desc: 'Quick emergency transport to clinic',
        icon: RI.ambulance,
        to: `tel:${HOME_EMERGENCY_PHONE}`,
        isTel: true,
      },
    ],
  },
]

const ACCENT_STYLES = {
  blue: {
    bar: 'bg-blue-600',
    badge: 'bg-blue-50 text-blue-700 border-blue-200/80',
    cardHover: 'hover:border-blue-300 hover:shadow-[0_12px_32px_rgba(37,99,235,0.12)]',
    iconBg: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100/60 border-blue-100/80',
    titleHover: 'group-hover:text-blue-600',
    arrow: 'group-hover:bg-blue-600 group-hover:text-white',
    accentLine: 'bg-blue-600',
  },
  teal: {
    bar: 'bg-teal-600',
    badge: 'bg-teal-50 text-teal-700 border-teal-200/80',
    cardHover: 'hover:border-teal-300 hover:shadow-[0_12px_32px_rgba(13,148,136,0.12)]',
    iconBg: 'bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100/60 border-teal-100/80',
    titleHover: 'group-hover:text-teal-700',
    arrow: 'group-hover:bg-teal-600 group-hover:text-white',
    accentLine: 'bg-teal-600',
  },
  red: {
    bar: 'bg-red-600',
    badge: 'bg-red-50 text-red-700 border-red-200/80',
    cardHover: 'hover:border-red-300 hover:shadow-[0_12px_32px_rgba(239,68,68,0.14)]',
    iconBg: 'bg-gradient-to-br from-red-50 via-rose-50 to-red-100/60 border-red-100/80',
    titleHover: 'group-hover:text-red-600',
    arrow: 'group-hover:bg-red-600 group-hover:text-white',
    accentLine: 'bg-red-600',
  },
}

function ServiceCard({ service, style, className = '' }) {
  const cardBody = (
    <div
      className={`group relative flex items-center justify-between gap-3 sm:gap-4 bg-white rounded-2xl border border-gray-100/90 p-4 sm:p-5 shadow-[0_4px_18px_rgba(16,42,94,0.05)] transition-all duration-300 hover:-translate-y-1 ${style.cardHover} ${className}`}
    >
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 ${style.iconBg}`}
        >
          <RealisticIcon src={service.icon} alt={service.title} size="sm" className="drop-shadow-xs" />
        </div>
        <div className="min-w-0">
          <h4
            className={`text-[#0a1f47] font-bold text-sm sm:text-[15px] leading-snug mb-1 transition-colors duration-200 ${style.titleHover}`}
          >
            {service.title}
          </h4>
          <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{service.desc}</p>
        </div>
      </div>
      <div
        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs ${style.arrow}`}
      >
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </div>
    </div>
  )

  if (service.isTel) {
    return (
      <a href={service.to} className="block w-full">
        {cardBody}
      </a>
    )
  }

  return (
    <Link to={service.to} className="block w-full">
      {cardBody}
    </Link>
  )
}

export default function AdditionalServicesSection() {
  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-18 bg-gradient-to-b from-[#f8fafe] via-white to-[#f8fafe]">
      <div className={`${PAGE_MAX} w-full`}>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] bg-blue-50 text-blue-600 border border-blue-100 mb-3">
              <Sparkles className="w-3 h-3 text-blue-500" />
              <span>Support Services</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#0a1f47] leading-tight">
              Additional Services
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
              Extra care options to make healthcare more convenient and accessible for your family.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-100 text-blue-600 font-bold text-xs sm:text-sm shadow-xs hover:bg-blue-600 hover:text-white hover:shadow-md transition-all duration-300 shrink-0 self-start sm:self-auto group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Groups & Cards Grid */}
        <div className="space-y-10 sm:space-y-12">
          {ADDITIONAL_GROUPS.map((group) => {
            const style = ACCENT_STYLES[group.accent]
            const isEmergency = group.accent === 'red'

            return (
              <div key={group.label} className="relative">
                {/* Category Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-6 rounded-full ${style.bar}`} />
                    <h3 className="text-[#0a1f47] font-bold text-base sm:text-lg tracking-tight">
                      {group.label}
                    </h3>
                    {isEmergency && (
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                        24/7 Available
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-xs hidden md:block">{group.subtitle}</p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
                  {group.services.map((service) => (
                    <ServiceCard
                      key={service.title}
                      service={service}
                      style={style}
                      className={group.services.length === 2 ? 'sm:last:col-span-1 lg:last:col-span-1' : ''}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
