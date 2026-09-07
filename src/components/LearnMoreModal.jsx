import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Phone, X } from 'lucide-react'
import { APPOINTMENT_PHONE, APPOINTMENT_PHONE_DISPLAY } from '../data/constants'
import CloudinaryImage from './media/CloudinaryImage'
import RealisticIcon from './RealisticIcon'

function extendedDetail(desc, detail) {
  if (detail) return detail
  return `${desc} At Family Cure Clinic, our experienced team provides compassionate, personalized care with modern facilities. Book a consultation today to learn how we can support you and your family.`
}

export default function LearnMoreModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose])

  if (!item) return null

  const body = extendedDetail(item.desc, item.detail)

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#0b1f45]/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative flex max-h-[min(92vh,calc(100dvh-1rem))] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-w-xl sm:rounded-3xl lg:max-w-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {item.image ? (
          <div className="relative h-[150px] shrink-0 overflow-hidden bg-[#f0f4fa] xs:h-[165px] sm:h-auto sm:min-h-0">
            <CloudinaryImage
              src={item.image}
              alt={item.title}
              variant="card"
              className="h-full w-full object-cover object-center sm:block sm:h-auto sm:max-h-[min(48vh,420px)] sm:object-contain sm:object-center"
            />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full bg-white/95 p-2 text-gray-600 shadow-sm transition-colors hover:bg-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            {item.icon && (
              <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white shadow-md sm:left-4 sm:h-11 sm:w-11">
                <RealisticIcon src={item.icon} alt="" size="xs" className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-start justify-between gap-3 border-b border-gray-100 px-4 py-4 sm:px-6">
            <div className="flex min-w-0 items-start gap-3">
              {item.icon && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 sm:h-11 sm:w-11">
                  <RealisticIcon src={item.icon} alt="" size="sm" />
                </div>
              )}
              <div className="min-w-0">
                <h2 className="font-serif-display text-base font-bold leading-snug text-[#102a5e] sm:text-xl">
                  {item.title}
                </h2>
                {item.subtitle && (
                  <p className="mt-0.5 text-xs font-semibold text-blue-600 sm:text-sm">{item.subtitle}</p>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-gray-200"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        <div className="overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
          {item.image && (
            <div className="mb-3">
              <h2 className="font-serif-display text-lg font-bold text-[#102a5e] sm:text-xl">{item.title}</h2>
              {item.subtitle && (
                <p className="mt-1 text-sm font-semibold text-blue-600">{item.subtitle}</p>
              )}
            </div>
          )}

          <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">{body}</p>

          {item.highlights?.length > 0 && (
            <ul className="mt-4 space-y-2">
              {item.highlights.map((highlight) => (
                <li key={highlight.text} className="flex items-center gap-2 text-xs text-[#102a5e] sm:text-sm">
                  <RealisticIcon src={highlight.icon} alt="" size="xs" className="h-5 w-5 shrink-0" />
                  {highlight.text}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex items-center gap-2.5 pb-[env(safe-area-inset-bottom)] sm:gap-3 sm:pb-0">
            <Link
              to="/contact"
              onClick={onClose}
              className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-blue-700 sm:text-sm"
            >
              <Calendar className="h-4 w-4 shrink-0" />
              Book Appointment
            </Link>
            <a
              href={`tel:${APPOINTMENT_PHONE}`}
              aria-label={`Call ${APPOINTMENT_PHONE_DISPLAY}`}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[#102a5e] text-[#102a5e] transition-colors hover:bg-[#102a5e]/5"
            >
              <Phone className="h-5 w-5 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
