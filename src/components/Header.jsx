import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Calendar, Menu, X } from 'lucide-react'
import { NAV_LINKS, NAV_ROUTES, PAGE_MAX, CLINIC_LOGO } from '../data/constants'

export default function Header({ variant = 'transparent' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isSolid = variant === 'solid'

  const isActive = (link) => {
    const path = NAV_ROUTES[link] || '/'
    const basePath = path.split('#')[0]
    if (link === 'HOME') return location.pathname === '/'
    if (basePath && basePath !== '/') return location.pathname === basePath
    return false
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full overflow-visible ${
        isSolid ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div
        className={`relative z-10 ${PAGE_MAX} h-12 sm:h-14 flex items-center justify-between w-full gap-3 sm:gap-6`}
      >
        <Link to="/" className="relative shrink-0 z-40">
          <img
            src={CLINIC_LOGO}
            alt="Family Cure Clinic"
            className="h-10 sm:h-11 md:h-12 w-auto object-contain object-left"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6 flex-1 justify-center relative z-50">
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              to={NAV_ROUTES[link] || '/'}
              className={`relative text-[10px] xl:text-[11px] font-semibold tracking-wider pb-2.5 whitespace-nowrap ${
                isActive(link) ? 'text-[#102a5e]' : 'text-gray-500 hover:text-[#102a5e]'
              }`}
            >
              {link}
              {isActive(link) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#102a5e] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0 relative z-50">
          <button
            type="button"
            className="hidden sm:flex items-center gap-2 bg-[#102a5e] text-white pl-4 xl:pl-5 pr-3 xl:pr-4 py-2 rounded-full font-semibold hover:bg-blue-900 transition-colors text-[10px] xl:text-[11px] tracking-wide"
          >
            BOOK APPOINTMENT
            <Calendar className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="p-2 border border-gray-300/70 rounded-full text-gray-600 hover:bg-white/40 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-12 sm:top-14 z-40 bg-black/30" onClick={() => setMenuOpen(false)} />
      )}

      <div
        className={`md:hidden absolute left-0 right-0 top-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className={`${PAGE_MAX} py-4 flex flex-col gap-1`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              to={NAV_ROUTES[link] || '/'}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-semibold tracking-wide ${
                isActive(link) ? 'bg-blue-50 text-[#102a5e]' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {link}
            </Link>
          ))}
          <button
            type="button"
            className="mt-2 flex items-center justify-center gap-2 bg-[#102a5e] text-white px-5 py-3 rounded-full font-semibold text-sm tracking-wide sm:hidden"
          >
            BOOK APPOINTMENT
            <Calendar className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </header>
  )
}
