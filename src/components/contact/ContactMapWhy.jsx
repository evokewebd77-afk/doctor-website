import { MapPin, Phone } from 'lucide-react'
import {
  PAGE_MAX,
  CLINIC_ADDRESS,
  CLINIC_ADDRESS_LINE1,
  CLINIC_ADDRESS_LINE2,
  CLINIC_FACILITIES,
  CLINIC_MAPS_EMBED_URL,
  CLINIC_PHONE,
  CLINIC_PHONE_DISPLAY_FULL,
} from '../../data/constants'
import { CONTACT_SECTION_ICONS, WHY_REACH_US } from '../../data/contactData'
import RealisticIcon from './RealisticIcon'

export default function ContactMapWhy() {
  return (
    <section className={`${PAGE_MAX} pb-6 sm:pb-10 w-full`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(16,42,94,0.08)] overflow-hidden">
          <div className="flex items-center gap-2.5 px-5 py-4 border-b border-gray-100">
            <RealisticIcon src={CONTACT_SECTION_ICONS.map} alt="" size="xs" className="drop-shadow-sm" />
            <h2 className="font-bold text-[#102a5e] text-sm sm:text-base">Find Our Clinic</h2>
          </div>
          <div className="relative h-[240px] sm:h-[280px] bg-gray-100">
            <iframe
              title="Family Cure Clinic location"
              src={CLINIC_MAPS_EMBED_URL}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="px-5 py-3.5 border-t border-gray-100 space-y-1">
            <p className="text-[#102a5e] font-semibold text-xs sm:text-sm">Family Cure Clinic</p>
            <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" strokeWidth={2} />
              {CLINIC_ADDRESS}
            </p>
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="text-blue-600 text-[10px] sm:text-xs font-semibold inline-flex items-center gap-1 hover:underline"
            >
              <Phone className="w-3 h-3" strokeWidth={2} />
              {CLINIC_PHONE_DISPLAY_FULL}
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(16,42,94,0.08)] p-5 sm:p-6 flex flex-col">
          <div className="flex items-center gap-2.5 mb-5">
            <RealisticIcon src={CONTACT_SECTION_ICONS.whyReach} alt="" size="xs" className="drop-shadow-sm" />
            <h2 className="font-bold text-[#102a5e] text-sm sm:text-base">Why Reach Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
            {WHY_REACH_US.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#f8fafe] border border-gray-100/80 hover:border-blue-100 hover:shadow-sm transition-all"
              >
                <div className={`shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${item.accent} flex items-center justify-center shadow-sm`}>
                  <RealisticIcon
                    src={item.image}
                    alt={item.title}
                    size="sm"
                    className="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm"
                  />
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-bold text-[#102a5e] text-xs sm:text-sm mb-1 leading-snug">{item.title}</h3>
                  <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-gray-100 rounded-xl bg-gradient-to-r from-blue-50/80 to-[#f8fafe] px-4 py-3.5">
            <div className="flex items-start gap-2.5">
              <RealisticIcon
                src={CONTACT_SECTION_ICONS.facilities}
                alt="Facilities"
                size="sm"
                className="w-8 h-8 shrink-0 drop-shadow-sm"
              />
              <div className="min-w-0">
                <p className="text-blue-700 font-bold text-xs sm:text-sm leading-snug">{CLINIC_FACILITIES}</p>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1 leading-relaxed">
                  {CLINIC_ADDRESS_LINE1}, {CLINIC_ADDRESS_LINE2}
                </p>
                <a
                  href={`tel:${CLINIC_PHONE}`}
                  className="text-blue-600 text-[10px] sm:text-xs font-semibold mt-0.5 inline-block hover:underline"
                >
                  {CLINIC_PHONE_DISPLAY_FULL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
