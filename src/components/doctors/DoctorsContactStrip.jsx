import { PAGE_MAX, CLINIC_ADDRESS, CLINIC_EMAIL, CLINIC_PHONE_DISPLAY_FULL, CLINIC_PHONE } from '../../data/constants'
import { RI } from '../../data/realisticIcons'
import RealisticIcon from '../RealisticIcon'

const CONTACT_ITEMS = [
  {
    title: 'Clinic Hours',
    lines: ['Mon - Sat : 8:00 AM - 8:00 PM', 'Sunday : 9:00 AM - 2:00 PM'],
    icon: RI.clock,
  },
  {
    title: 'Visit Us',
    lines: [CLINIC_ADDRESS],
    icon: RI.location,
  },
  {
    title: 'Call Us',
    lines: [CLINIC_PHONE_DISPLAY_FULL],
    href: `tel:${CLINIC_PHONE}`,
    icon: RI.phone,
  },
  {
    title: 'Email Us',
    lines: [CLINIC_EMAIL],
    href: `mailto:${CLINIC_EMAIL}`,
    icon: RI.email,
  },
]

export default function DoctorsContactStrip() {
  return (
    <section className="w-full bg-[#eef2f7]/80 border-t border-gray-200 py-8 sm:py-10">
      <div className={`${PAGE_MAX} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6`}>
        {CONTACT_ITEMS.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <RealisticIcon src={item.icon} alt={item.title} size="sm" className="shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-[#102a5e] text-sm mb-1.5">{item.title}</h3>
              {item.lines.map((line) =>
                item.href ? (
                  <a
                    key={line}
                    href={item.href}
                    className="block text-gray-500 text-xs sm:text-sm leading-relaxed hover:text-blue-600 transition-colors"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={line} className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {line}
                  </p>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
