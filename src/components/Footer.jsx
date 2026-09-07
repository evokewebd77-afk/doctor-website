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
      <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: CLINIC_WHATSAPP_URL,
    icon: (
      <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.076-2.029-.474-1.624-.668-2.663-2.316-2.742-2.423-.079-.107-.655-.873-.655-1.666 0-.792.415-1.182.562-1.341.144-.159.314-.199.419-.199.106 0 .212.002.304.007.098.005.228-.037.357.272.132.318.452 1.103.492 1.183.04.08.067.174.013.28-.053.107-.08.174-.16.267-.08.093-.169.208-.242.279-.08.08-.163.167-.07.327.093.159.412.68.884 1.1 1.009.897 1.86 1.176 2.019 1.255.159.08.252.067.346-.04.093-.107.4-.467.507-.627.107-.16.213-.133.359-.08.146.053.931.439 1.09.519.16.08.266.12.306.186.04.067.04.387-.104.792z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg className="w-5 h-5 fill-[#FF0000]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.8 8.001a2.5 2.5 0 0 0-1.76-1.77C18.36 6 12 6 12 6s-6.36 0-8.04.231A2.5 2.5 0 0 0 2.2 8.001 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .2 3.999 2.5 2.5 0 0 0 1.76 1.77C5.64 18 12 18 12 18s6.36 0 8.04-.231a2.5 2.5 0 0 0 1.76-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
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
                alt="Family Cure Clinic"
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-105"
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
                  <div className="leading-snug">
                    <p className="font-semibold text-white">Mon – Sat: 9:00 AM – 8:00 PM</p>
                    <p className="text-blue-200/70 text-[11px] mt-0.5">Sunday: 10:00 AM – 2:00 PM</p>
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
