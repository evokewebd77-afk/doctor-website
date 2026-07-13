import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Calendar, Menu, X } from 'lucide-react'
import { NAV_LINKS, NAV_ROUTES, PAGE_MAX, CLINIC_LOGO } from '../data/constants'

const NAV_TEXT_SHADOW =
  'drop-shadow-[0_1px_2px_rgba(255,255,255,1)] drop-shadow-[0_0_10px_rgba(255,255,255,0.85)] drop-shadow-[0_1px_3px_rgba(11,31,69,0.25)]'

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

  const navLinkClass = (link) => {
    const active = isActive(link)
    if (isSolid) {
      return active
        ? 'text-[#0b1f45] font-bold'
        : 'text-[#1e3a6e] font-semibold hover:text-[#0b1f45]'
    }
    return active
      ? `text-[#0b1f45] font-bold ${NAV_TEXT_SHADOW}`
      : `text-[#102a5e] font-semibold hover:text-[#0b1f45] ${NAV_TEXT_SHADOW}`
  }

  return (
    <header
      className={`relative sticky top-0 z-50 w-full overflow-visible ${
        isSolid
          ? 'border-b border-gray-200/80 bg-white/98 shadow-[0_2px_16px_rgba(11,31,69,0.06)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <Link
        to="/"
        className="absolute top-0 left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 2xl:left-16 z-[60] inline-block bg-transparent"
      >
        <img
          src={CLINIC_LOGO}
          alt="Family Cure Clinic"
          className="h-[5rem] sm:h-[6rem] md:h-[7.25rem] lg:h-[8.75rem] xl:h-[9.5rem] w-auto object-contain pointer-events-none select-none drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]"
        />
      </Link>

      <div className={`${PAGE_MAX} relative h-12 sm:h-14 z-50`}>
        <div className="flex h-full items-center justify-end md:justify-between md:pl-[10rem] lg:pl-[12rem] xl:pl-[13rem] gap-3 sm:gap-6">
          <nav
            className={`hidden md:flex items-center gap-1 lg:gap-1.5 xl:gap-2 flex-1 justify-center ${
              !isSolid
                ? 'rounded-full border border-white/60 bg-white/75 px-3 py-1 shadow-[0_4px_20px_rgba(11,31,69,0.1)] backdrop-blur-md lg:px-4'
                : ''
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                to={NAV_ROUTES[link] || '/'}
                className={`relative px-2.5 py-2 text-[11px] xl:text-xs tracking-wide whitespace-nowrap transition-colors lg:px-3 ${navLinkClass(link)}`}
              >
                {link}
                {isActive(link) && (
                  <span className="absolute bottom-0.5 left-2.5 right-2.5 h-[2px] rounded-full bg-[#2563eb] lg:left-3 lg:right-3" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/contact"
              className={`hidden sm:flex items-center gap-2 rounded-full pl-4 xl:pl-5 pr-3 xl:pr-4 py-2 font-bold transition-colors text-[10px] xl:text-[11px] tracking-wide shadow-md ${
                isSolid
                  ? 'bg-[#0b1f45] text-white hover:bg-[#102a5e]'
                  : 'bg-[#0b1f45] text-white hover:bg-[#102a5e] shadow-[0_4px_14px_rgba(11,31,69,0.35)]'
              }`}
            >
              BOOK APPOINTMENT
              <Calendar className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={`p-2 rounded-full md:hidden transition-colors ${
                isSolid
                  ? 'border border-gray-300 bg-white text-[#0b1f45] hover:bg-gray-50'
                  : 'border border-[#0b1f45]/25 bg-white/90 text-[#0b1f45] shadow-sm backdrop-blur-sm hover:bg-white'
              }`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-12 sm:top-14 z-40 bg-black/30" onClick={() => setMenuOpen(false)} />
      )}

      <div
        className={`md:hidden absolute left-0 right-0 top-full z-50 border-b border-gray-200 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className={`${PAGE_MAX} py-4 flex flex-col gap-1`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              to={NAV_ROUTES[link] || '/'}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-bold tracking-wide ${
                isActive(link)
                  ? 'bg-blue-50 text-[#0b1f45] ring-1 ring-blue-200'
                  : 'text-[#1e3a6e] hover:bg-gray-50 hover:text-[#0b1f45]'
              }`}
            >
              {link}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 bg-[#0b1f45] text-white px-5 py-3 rounded-full font-bold text-sm tracking-wide sm:hidden"
          >
            BOOK APPOINTMENT
            <Calendar className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
