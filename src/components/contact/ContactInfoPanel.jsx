import { CONTACT_INFO_ROWS } from '../../data/contactData'
import RealisticIcon from './RealisticIcon'

export default function ContactInfoPanel() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(16,42,94,0.08)] overflow-hidden divide-y divide-gray-100">
      {CONTACT_INFO_ROWS.map((row) => (
        <div key={row.title} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5">
          <RealisticIcon src={row.image} alt={row.title} size="sm" className="shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-[#102a5e] text-sm mb-1">{row.title}</h3>
            {row.lines.map((line) => (
              <p
                key={line}
                className={`text-gray-500 text-xs sm:text-[13px] leading-relaxed ${
                  row.facilitiesLine && line === row.facilitiesLine ? 'text-blue-600 font-medium mt-1' : ''
                }`}
              >
                {line}
              </p>
            ))}
          </div>
          {row.thumbnail && (
            <img
              src={row.thumbnail}
              alt="Clinic building"
              className="w-16 h-11 sm:w-20 sm:h-14 rounded-lg object-cover shrink-0 border border-gray-100"
              loading="lazy"
            />
          )}
          {row.badge && (
            row.badge.href ? (
              <a
                href={row.badge.href}
                className={`shrink-0 text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border ${row.badge.style} hover:opacity-80 transition-opacity whitespace-nowrap`}
              >
                {row.badge.label}
              </a>
            ) : (
              <span className={`shrink-0 text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border ${row.badge.style} whitespace-nowrap`}>
                {row.badge.label}
              </span>
            )
          )}
        </div>
      ))}
    </div>
  )
}
