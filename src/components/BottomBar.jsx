import { Calendar, Phone, MessageCircle, MapPin } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import {
  CLINIC_PHONE,
  CLINIC_WHATSAPP_URL,
  CLINIC_MAPS_URL,
  HOME_EMERGENCY_PHONE,
} from '../data/constants'
import { RI } from '../data/realisticIcons'
import RealisticIcon from './RealisticIcon'
import MobileNavBar from './MobileNavBar'

export default function BottomBar() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const callPhone = isHomePage ? HOME_EMERGENCY_PHONE : CLINIC_PHONE

  const scrollToBook = () => {
    const target = document.getElementById('book-appointment')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    window.location.href = `tel:${callPhone}`
  }

  return (
    <>
      <MobileNavBar />

      {/* Mobile only — floating call & WhatsApp */}
      <div className="md:hidden fixed right-4 z-[60] flex flex-col gap-3 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] pointer-events-none">
        <a
          href={CLINIC_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_6px_20px_rgba(16,42,94,0.18)] ring-1 ring-gray-100 transition-transform hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <RealisticIcon src={RI.whatsapp} alt="WhatsApp" size="xs" className="w-7 h-7" />
        </a>
        <a
          href={`tel:${callPhone}`}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_6px_20px_rgba(16,42,94,0.18)] ring-1 ring-gray-100 transition-transform hover:scale-105 active:scale-95"
          aria-label="Call us"
        >
          <RealisticIcon src={RI.phone} alt="Call" size="xs" className="w-7 h-7" />
        </a>
      </div>

      {/* Desktop — unchanged full action bar */}
      <div className="hidden md:block fixed bottom-0 inset-x-0 z-50 bg-[#102a5e] text-white shadow-[0_-4px_24px_rgba(0,0,0,0.2)] rounded-t-xl pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between px-4 md:px-6 pt-3 max-w-[1680px] mx-auto">
          <a
            href={`tel:${callPhone}`}
            className="flex flex-row items-center gap-2 flex-1 justify-center border-r border-white/20 py-1 hover:text-blue-200 transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" />
            <span className="text-xs font-medium">Call</span>
          </a>

          <a
            href={CLINIC_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 flex-1 justify-center border-r border-white/20 py-1 hover:text-green-300 transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-xs font-medium">WhatsApp</span>
          </a>

          <div className="flex-[1.2] flex justify-center px-2">
            <button
              type="button"
              onClick={scrollToBook}
              className="bg-white text-[#102a5e] px-5 md:px-6 py-2 rounded-lg font-bold flex items-center gap-2 w-full justify-center max-w-[180px] text-xs shadow-md hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          <a
            href={CLINIC_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 flex-1 justify-center border-l border-white/20 py-1 hover:text-blue-200 transition-colors"
            aria-label="Get directions"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-xs font-medium">Directions</span>
          </a>
        </div>
      </div>
    </>
  )
}
