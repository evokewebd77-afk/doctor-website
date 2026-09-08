import {
  Heart,
  ChevronRight,
  MapPin,
  Phone,
  PhoneCall,
  Mail,
  Clock,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  PAGE_MAX,
  CLINIC_LOGO,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_PHONE_DISPLAY,
  CLINIC_EMAIL,
  HOME_EMERGENCY_PHONE,
  HOME_EMERGENCY_PHONE_DISPLAY,
  CLINIC_WHATSAPP_URL,
  CLINIC_INSTAGRAM_URL,
  CLINIC_MAPS_URL,
} from '../data/constants'

function SocialIcon({ href, children, label }) {
  return (
    <a
      href={href || '#'}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.18)] hover:shadow-[0_4px_16px_rgba(255,255,255,0.3)] flex items-center justify-center hover:scale-115 active:scale-95 transition-all duration-300"
    >
      {children}
    </a>
  )
}

const QUICK_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Doctors', path: '/doctors' },
  { name: 'All Services', path: '/services' },
  { name: 'Lab & Diagnostics', path: '/lab-services' },
  { name: 'Home Healthcare', path: '/home-care' },
  { name: 'Contact & Location', path: '/contact' },
]

const MEDICAL_SERVICES = [
  { name: 'General Medicine', path: '/services/general-medicine' },
  { name: 'Obstetrics & Gynaecology', path: '/services/obstetrics-gynaecology' },
  { name: 'Pediatrics & Neonatology', path: '/services/pediatrics-neonatology' },
  { name: 'Diagnostic & Lab Tests', path: '/lab-services' },
  { name: 'Emergency Consultation', path: '/contact' },
  { name: 'Home Nursing Care', path: '/home-care' },
  { name: 'Teleconsultation', path: '/contact' },
]


const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: CLINIC_INSTAGRAM_URL,
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="ig-grad-footer" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig-grad-footer)" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: CLINIC_WHATSAPP_URL,
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#25D366"
          d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2Z"
        />
        <path
          fill="#FFFFFF"
          fillRule="evenodd"
          d="M17.47 14.39C17.17 14.24 15.72 13.53 15.45 13.43C15.18 13.33 14.98 13.28 14.78 13.58C14.58 13.88 14.01 14.54 13.83 14.74C13.66 14.94 13.48 14.97 13.18 14.82C12.88 14.67 11.92 14.36 10.78 13.34C9.89 12.55 9.29 11.57 9.12 11.27C8.94 10.97 9.1 10.81 9.25 10.66C9.39 10.53 9.55 10.31 9.7 10.14C9.85 9.96 9.9 9.84 10 9.64C10.1 9.44 10.05 9.26 9.98 9.11C9.9 8.96 9.3 7.5 9.05 6.9C8.81 6.32 8.56 6.4 8.38 6.39C8.21 6.38 8.01 6.38 7.81 6.38C7.61 6.38 7.28 6.45 7.01 6.75C6.73 7.05 5.96 7.78 5.96 9.25C5.96 10.72 7.03 12.14 7.18 12.34C7.33 12.54 9.29 15.56 12.29 16.85C13.01 17.16 13.57 17.35 14.01 17.49C14.73 17.72 15.38 17.69 15.9 17.61C16.48 17.52 17.69 16.88 17.94 16.18C18.19 15.48 18.19 14.88 18.11 14.75C18.04 14.62 17.84 14.54 17.54 14.39H17.47Z"
        />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#FF0000"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        />
        <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="w-full relative bg-gradient-to-b from-[#102a5c] via-[#0c2149] to-[#081836] text-white overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className={`${PAGE_MAX} relative z-10 py-12 sm:py-16 w-full`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand Info (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src={CLINIC_LOGO}
                alt="Family Cure Clinic - We Love Your Health"
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.8)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-200 text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>We Love Your Health</span>
            </div>

            <p className="text-blue-100/80 text-xs sm:text-[13px] leading-relaxed max-w-sm">
              Family Cure Clinic provides high-quality multi-speciality medical consultations, advanced laboratory diagnostics, and compassionate home healthcare across Tricity.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <p className="text-blue-200/70 text-[11px] font-bold uppercase tracking-wider mb-2.5">Follow Us</p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((item) => (
                  <SocialIcon key={item.label} href={item.href} label={item.label}>
                    {item.icon}
                  </SocialIcon>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-blue-500" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-1.5 text-blue-100/75 hover:text-white text-xs sm:text-[13px] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-300 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Medical Services (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-teal-400" />
              Our Specialities
            </h4>
            <ul className="space-y-2.5">
              {MEDICAL_SERVICES.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-1.5 text-blue-100/75 hover:text-white text-xs sm:text-[13px] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-300 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Card (Span 3) */}
          <div className="lg:col-span-3">
            <div className="bg-white/[0.08] rounded-2xl border border-white/20 p-5 backdrop-blur-md space-y-4 shadow-lg shadow-black/10">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-amber-400" />
                Clinic Details
              </h4>

              <div className="space-y-3.5 text-xs">
                {/* Address */}
                <a
                  href={CLINIC_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-blue-100/90 hover:text-white transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{CLINIC_ADDRESS}</span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${CLINIC_PHONE}`}
                  className="flex items-center gap-2.5 text-blue-100/90 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="font-semibold">{CLINIC_PHONE_DISPLAY}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CLINIC_EMAIL}`}
                  className="flex items-center gap-2.5 text-blue-100/90 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-300 shrink-0" />
                  <span>{CLINIC_EMAIL}</span>
                </a>

                {/* Hours */}
                <div className="pt-2 border-t border-white/15 flex items-start gap-2.5 text-blue-100/80">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="leading-snug space-y-0.5">
                    <p className="font-semibold text-white">Morning: 9:30 AM – 1:00 PM</p>
                    <p className="font-semibold text-white">Evening: 5:00 PM – 8:00 PM</p>
                    <p className="text-amber-300 font-medium text-[11px] pt-0.5">Sunday: By Appointment</p>
                  </div>
                </div>

                {/* Emergency / 24x7 Support */}
                <div className="pt-2.5 border-t border-white/15 flex items-start gap-2.5 text-blue-100/80">
                  <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-red-400/30">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  </div>
                  <div className="leading-snug">
                    <p className="font-bold text-red-300 text-xs uppercase tracking-wide">Emergency / 24x7 Support</p>
                    <p className="text-blue-100/75 text-[11px] mt-0.5 leading-relaxed">
                      For medical emergencies, we're available 24x7 for immediate assistance.
                    </p>
                    <a
                      href={`tel:${HOME_EMERGENCY_PHONE}`}
                      className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 text-red-200 hover:text-white text-xs font-semibold transition-all hover:scale-105 active:scale-95 shadow-xs"
                    >
                      <PhoneCall className="w-3 h-3 text-red-400" />
                      <span>{HOME_EMERGENCY_PHONE_DISPLAY}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-white/15 bg-[#061430]/90">
        <div className={`${PAGE_MAX} py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-blue-100/70 text-[11px]`}>
          <p>© {new Date().getFullYear()} Family Cure Clinic. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-blue-100/80">
              <ShieldCheck className="w-4 h-4 text-blue-300" />
              Verified Healthcare Clinic
            </span>
            <span className="hidden sm:inline-block w-px h-3.5 bg-white/20" />
            <span className="flex items-center gap-1.5 text-blue-100/80">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              We Love Your Health
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
