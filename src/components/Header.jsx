import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Calendar, Menu, PhoneCall, X } from 'lucide-react'
import { NAV_LINKS, NAV_ROUTES, PAGE_MAX, CLINIC_LOGO, CLINIC_PHONE, CLINIC_PHONE_DISPLAY, HOME_EMERGENCY_PHONE, HOME_EMERGENCY_PHONE_DISPLAY } from '../data/constants'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const emergencyPhone = isHomePage ? HOME_EMERGENCY_PHONE : CLINIC_PHONE
  const emergencyPhoneDisplay = isHomePage ? HOME_EMERGENCY_PHONE_DISPLAY : CLINIC_PHONE_DISPLAY

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (link) => {
    const path = NAV_ROUTES[link] || '/'
    const basePath = path.split('#')[0]
    if (link === 'HOME') return location.pathname === '/'
    if (basePath && basePath !== '/') return location.pathname === basePath
    return false
  }

  const navLinkClass = (link) => {
    const active = isActive(link)
    return active
      ? 'bg-blue-50 text-blue-700 font-bold px-3 py-1.5 rounded-full shadow-xs'
      : 'text-[#102a5e] font-semibold hover:text-blue-600 hover:bg-blue-50/60 px-3 py-1.5 rounded-full transition-all duration-200'
  }

  return (
    <>
      {/* Spacer so fixed header doesn't overlap page content */}
      <div className={`w-full invisible pointer-events-none transition-all duration-300 ${scrolled ? 'h-14 sm:h-15 md:h-16' : 'h-15 sm:h-16 md:h-18'}`} />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-[0_4px_20px_rgba(16,42,94,0.08)] border-b border-gray-100 py-1 sm:py-1.5'
            : 'bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-200/50 py-1.5 sm:py-2'
        }`}
      >
        <div className={`${PAGE_MAX} flex items-center justify-between gap-2 sm:gap-3 md:gap-5`}>
          {/* Clinic Brand Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0 group py-0.5"
            aria-label="Family Cure Clinic Home"
          >
            <img
              src={CLINIC_LOGO}
              alt="Family Cure Clinic"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                scrolled
                  ? 'h-9 sm:h-10 md:h-11 lg:h-12 max-w-[140px] sm:max-w-[170px] md:max-w-[200px]'
                  : 'h-10 sm:h-11 md:h-13 lg:h-14 max-w-[150px] sm:max-w-[190px] md:max-w-[220px]'
              }`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                to={NAV_ROUTES[link] || '/'}
                className={`text-[11px] xl:text-xs tracking-wider whitespace-nowrap uppercase ${navLinkClass(link)}`}
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Action CTAs & Emergency */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Mobile-only Quick Emergency Button */}
            <a
              href={`tel:${emergencyPhone}`}
              className="flex sm:hidden items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-2.5 py-1 text-white shadow-sm hover:from-red-700 hover:to-rose-700 active:scale-95 transition-all text-xs"
              aria-label={`Emergency call ${emergencyPhoneDisplay}`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <PhoneCall className="w-3 h-3" />
            </a>

            {/* Mobile-only Quick Book Button */}
            <Link
              to="/contact"
              className="flex sm:hidden items-center justify-center gap-1 rounded-full bg-gradient-to-r from-[#0b1f45] to-[#1a3d7a] px-2.5 py-1 text-[9px] font-bold tracking-wide text-white shadow-sm active:scale-95 transition-all"
              aria-label="Book appointment"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </Link>

            {/* Desktop / Tablet Emergency Call Button */}
            <a
              href={`tel:${emergencyPhone}`}
              className="hidden sm:flex items-center gap-1.5 rounded-full px-3 xl:px-3.5 py-1.5 font-bold transition-all duration-200 text-[10px] xl:text-[11px] tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-[0_2px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_4px_14px_rgba(220,38,38,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              aria-label={`Emergency call ${emergencyPhoneDisplay}`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <span>EMERGENCY</span>
              <PhoneCall className="w-3 h-3 ml-0.5" />
            </a>

            {/* Desktop / Tablet Book Appointment Button */}
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-1.5 rounded-full px-3.5 xl:px-4 py-1.5 font-bold transition-all duration-200 text-[10px] xl:text-[11px] tracking-wider uppercase bg-gradient-to-r from-[#0b1f45] to-[#1a3d7a] text-white shadow-[0_2px_10px_rgba(11,31,69,0.25)] hover:shadow-[0_4px_14px_rgba(11,31,69,0.35)] hover:from-[#102a5e] hover:to-[#224b8e] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3 h-3" />
              <span>BOOK APPOINTMENT</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="p-1.5 rounded-lg lg:hidden transition-colors bg-gray-50 text-[#0b1f45] border border-gray-200 hover:bg-gray-100 active:scale-95"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-4 h-4 text-gray-700" /> : <Menu className="w-4 h-4 text-[#0b1f45]" />}
            </button>
          </div>
        </div>

        {/* Mobile Backdrop */}
        {menuOpen && (
          <div
            className="lg:hidden fixed inset-0 top-[60px] sm:top-[70px] z-40 bg-black/40 backdrop-blur-xs animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full z-50 bg-white border-b border-gray-200 shadow-2xl transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-[85vh] opacity-100 py-4' : 'max-h-0 opacity-0 pointer-events-none py-0'
          }`}
        >
          <nav className={`${PAGE_MAX} flex flex-col gap-1.5`}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                to={NAV_ROUTES[link] || '/'}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
                  isActive(link)
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600 shadow-xs'
                    : 'text-[#1e3a6e] hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {link}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-100 flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0b1f45] to-[#1a3d7a] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                BOOK APPOINTMENT
              </Link>
              <a
                href={`tel:${emergencyPhone}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white px-5 py-3 rounded-xl font-bold text-sm tracking-wide shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                EMERGENCY · {emergencyPhoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
