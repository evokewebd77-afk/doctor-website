import {
  Heart,
  ChevronRight,
  MapPin,
  Phone,
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
  CLINIC_WHATSAPP_URL,
  CLINIC_INSTAGRAM_URL,
  CLINIC_MAPS_URL,
} from '../data/constants'

function SocialIcon({ href, children, label, bgClass }) {
  return (
    <a
      href={href || '#'}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-9 h-9 rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 ${bgClass || 'bg-white/10 border border-white/15 text-white/80 hover:text-white'}`}
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
    bgClass: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_4px_14px_rgba(220,39,67,0.35)] hover:shadow-[0_6px_20px_rgba(220,39,67,0.6)] border border-white/20',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: CLINIC_WHATSAPP_URL,
    bgClass: 'bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] border border-white/20',
    icon: (
      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.076-2.029-.474-1.624-.668-2.663-2.316-2.742-2.423-.079-.107-.655-.873-.655-1.666 0-.792.415-1.182.562-1.341.144-.159.314-.199.419-.199.106 0 .212.002.304.007.098.005.228-.037.357.272.132.318.452 1.103.492 1.183.04.08.067.174.013.28-.053.107-.08.174-.16.267-.08.093-.169.208-.242.279-.08.08-.163.167-.07.327.093.159.412.68.884 1.1 1.009.897 1.86 1.176 2.019 1.255.159.08.252.067.346-.04.093-.107.4-.467.507-.627.107-.16.213-.133.359-.08.146.053.931.439 1.09.519.16.08.266.12.306.186.04.067.04.387-.104.792z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    bgClass: 'bg-gradient-to-br from-[#FF0000] to-[#cc0000] shadow-[0_4px_14px_rgba(255,0,0,0.35)] hover:shadow-[0_6px_20px_rgba(255,0,0,0.6)] border border-white/20',
    icon: (
      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.8 8.001a2.5 2.5 0 0 0-1.76-1.77C18.36 6 12 6 12 6s-6.36 0-8.04.231A2.5 2.5 0 0 0 2.2 8.001 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .2 3.999 2.5 2.5 0 0 0 1.76 1.77C5.64 18 12 18 12 18s6.36 0 8.04-.231a2.5 2.5 0 0 0 1.76-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#091836] via-[#07132c] to-[#040b1b] text-white">
      {/* Main Footer Content */}
      <div className={`${PAGE_MAX} py-12 sm:py-16 w-full`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand Info (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src={CLINIC_LOGO}
                alt="Family Cure Clinic"
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>We Love Your Health</span>
            </div>

            <p className="text-white/75 text-xs sm:text-[13px] leading-relaxed max-w-sm">
              Family Cure Clinic provides high-quality multi-speciality medical consultations, advanced laboratory diagnostics, and compassionate home healthcare across Tricity.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <p className="text-white/50 text-[11px] font-bold uppercase tracking-wider mb-2.5">Follow Us</p>
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map((item) => (
                  <SocialIcon key={item.label} href={item.href} label={item.label} bgClass={item.bgClass}>
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
                    className="group flex items-center gap-1.5 text-white/70 hover:text-white text-xs sm:text-[13px] transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Medical Services (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-teal-500" />
              Our Specialities
            </h4>
            <ul className="space-y-2.5">
              {MEDICAL_SERVICES.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-1.5 text-white/70 hover:text-white text-xs sm:text-[13px] transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Card (Span 3) */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 rounded-2xl border border-white/10 p-5 backdrop-blur-xs space-y-4">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-amber-500" />
                Clinic Details
              </h4>

              <div className="space-y-3.5 text-xs">
                {/* Address */}
                <a
                  href={CLINIC_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/80 hover:text-blue-300 transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{CLINIC_ADDRESS}</span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${CLINIC_PHONE}`}
                  className="flex items-center gap-2.5 text-white/80 hover:text-blue-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="font-semibold">{CLINIC_PHONE_DISPLAY}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CLINIC_EMAIL}`}
                  className="flex items-center gap-2.5 text-white/80 hover:text-blue-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{CLINIC_EMAIL}</span>
                </a>

                {/* Hours */}
                <div className="pt-2 border-t border-white/10 flex items-start gap-2.5 text-white/75">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="leading-snug">
                    <p className="font-semibold text-white">Mon – Sat: 9:00 AM – 8:00 PM</p>
                    <p className="text-white/60 text-[11px] mt-0.5">Sunday: 10:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-white/10 bg-[#030814]">
        <div className={`${PAGE_MAX} py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/60 text-[11px]`}>
          <p>© {new Date().getFullYear()} Family Cure Clinic. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/70">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Verified Healthcare Clinic
            </span>
            <span className="hidden sm:inline-block w-px h-3.5 bg-white/20" />
            <span className="flex items-center gap-1.5 text-white/70">
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              We Love Your Health
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
