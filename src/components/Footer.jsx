import {
  Heart,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Lock,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { PAGE_MAX, CLINIC_LOGO, FOOTER_QUICK_LINK_ROUTES, CLINIC_ADDRESS, CLINIC_PHONE_DISPLAY_FULL, CLINIC_EMAIL } from '../data/constants'
import { RI } from '../data/realisticIcons'
import RealisticIcon from './RealisticIcon'

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
    >
      {children}
    </a>
  )
}

const HIGHLIGHTS = [
  { title: 'Cashless Insurance', desc: 'All Major Insurances Accepted', icon: RI.shield },
  { title: 'Online Reports', desc: 'View & Download Reports Instantly', icon: RI.file },
  { title: 'Home Collection', desc: 'Lab Tests at Your Doorstep', icon: RI.home },
  { title: 'Pharmacy Support', desc: 'Medicines Delivered Safely at Home', icon: RI.pill },
  { title: 'Patient Support', desc: "We're Here to Help You Anytime", icon: RI.headset },
]

const QUICK_LINKS = ['Home', 'About Us', 'Services', 'Doctors', 'Lab Services', 'Home Care', 'Contact Us']

const SERVICES = [
  'General Medicine',
  'Obstetrics & Gynaecology',
  'Pediatrics',
  'Diagnostics & Lab Services',
  'Emergency Consultation',
  'Home Care Services',
  'Teleconsultation',
]

const PATIENT_INFO = [
  'Book Appointment',
  'Insurance & TPA',
  'Health Packages',
  'Patient Support',
  'FAQs',
  'Privacy Policy',
  'Terms & Conditions',
]

const SOCIAL = [
  {
    label: 'Facebook',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.8 8.001a2.5 2.5 0 0 0-1.76-1.77C18.36 6 12 6 12 6s-6.36 0-8.04.231A2.5 2.5 0 0 0 2.2 8.001 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .2 3.999 2.5 2.5 0 0 0 1.76 1.77C5.64 18 12 18 12 18s6.36 0 8.04-.231a2.5 2.5 0 0 0 1.76-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5H3.56v12.44h3.38V8.5zM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92zM20.5 14.11c0-3.6-1.94-5.27-4.53-5.27-2.09 0-3.02 1.16-3.54 1.97v-1.7h-3.38c.05 1.12 0 12.44 0 12.44h3.38v-6.94c0-.34.02-.68.12-.92.27-.68.89-1.38 1.93-1.38 1.36 0 1.9 1.04 1.9 2.56v6.68h3.42V14.11z" />
      </svg>
    ),
  },
]

function FooterLinkList({ title, items, routes = {} }) {
  return (
    <div>
      <h4 className="font-bold text-white text-sm mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((item) => {
          const to = routes[item]
          const className =
            'text-white/75 text-xs hover:text-white flex items-center justify-between gap-2 group'

          return (
            <li key={item}>
              {to ? (
                <Link to={to} className={className}>
                  <span>{item}</span>
                  <ChevronRight className="w-3 h-3 text-white/40 group-hover:text-blue-300 shrink-0" />
                </Link>
              ) : (
                <a href="#" className={className}>
                  <span>{item}</span>
                  <ChevronRight className="w-3 h-3 text-white/40 group-hover:text-blue-300 shrink-0" />
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Highlights bar */}
      <div className={`${PAGE_MAX} pb-6 sm:pb-8 w-full`}>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-gray-200">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className="flex items-start gap-3 px-4 py-4 sm:px-5 sm:py-5 lg:py-6">
                <RealisticIcon src={item.icon} alt={item.title} size="xs" className="shrink-0 mt-0.5 drop-shadow-sm" />
                <div>
                  <p className="text-[#102a5e] font-bold text-xs leading-snug">{item.title}</p>
                  <p className="text-gray-500 text-[10px] mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-[#102a5e] border-t border-[#1a3d7a]">
        <div className={`${PAGE_MAX} py-8 sm:py-10 lg:py-12 w-full`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-6">
            {/* Branding */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <img
                  src={CLINIC_LOGO}
                  alt="Family Cure Clinic"
                  className="h-20 sm:h-24 lg:h-28 w-auto max-w-[280px] sm:max-w-[320px] object-contain shrink-0 rounded-lg"
                />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="h-px flex-1 bg-white/20" />
                <p className="text-[9px] font-semibold text-white/80 tracking-[0.15em] uppercase whitespace-nowrap">
                  We Love Your Health
                </p>
                <div className="h-px flex-1 bg-white/20" />
              </div>

              <p className="text-white/70 text-[11px] leading-relaxed mb-5">
                Compassionate family healthcare for every generation. Advanced technology, expert doctors, and
                personalized care under one roof for your complete well-being.
              </p>

              <div className="flex items-center gap-2.5">
                {SOCIAL.map(({ icon, label }) => (
                  <SocialIcon key={label} label={label}>
                    {icon}
                  </SocialIcon>
                ))}
              </div>
            </div>

            <FooterLinkList title="Quick Links" items={QUICK_LINKS} routes={FOOTER_QUICK_LINK_ROUTES} />
            <FooterLinkList title="Our Services" items={SERVICES} />
            <FooterLinkList title="Patient Info" items={PATIENT_INFO} />

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white text-sm mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-white/75 text-xs leading-relaxed">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-blue-300" strokeWidth={1.5} />
                  <span>{CLINIC_ADDRESS}</span>
                </li>
                <li className="flex items-center gap-2.5 text-white/75 text-xs">
                  <Phone className="w-4 h-4 shrink-0 text-blue-300" strokeWidth={1.5} />
                  <span>{CLINIC_PHONE_DISPLAY_FULL}</span>
                </li>
                <li className="flex items-center gap-2.5 text-white/75 text-xs">
                  <Mail className="w-4 h-4 shrink-0 text-blue-300" strokeWidth={1.5} />
                  <span>{CLINIC_EMAIL}</span>
                </li>
                <li className="flex items-start gap-2.5 text-white/75 text-xs leading-relaxed">
                  <Clock className="w-4 h-4 shrink-0 mt-0.5 text-blue-300" strokeWidth={1.5} />
                  <span>
                    Mon - Sat: 9:00 AM - 8:00 PM
                    <br />
                    Sunday: 10:00 AM - 2:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/10 bg-[#0d2249]">
          <div className={`${PAGE_MAX} py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 w-full`}>
            <p className="text-white/70 text-[10px] sm:text-[11px] text-center sm:text-left">
              © 2025 Family Cure Clinic. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white/70 text-[10px] sm:text-[11px]">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" strokeWidth={1.5} />
                Your Health. Our Priority.
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/20" />
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-red-400" strokeWidth={1.5} />
                We Care For You
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
