import { ArrowRight } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE } from '../../data/constants'
import { CONTACT_QUICK_HELP } from '../../data/contactData'
import RealisticIcon from './RealisticIcon'

export default function ContactQuickHelp() {
  return (
    <section className={`${PAGE_MAX} pb-6 sm:pb-8 w-full`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {CONTACT_QUICK_HELP.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(16,42,94,0.08)] p-5 sm:p-6 flex flex-col"
          >
            <RealisticIcon src={item.image} alt={item.title} size="lg" className="mb-4" />
            <h3 className="font-bold text-[#102a5e] text-sm mb-1.5">{item.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{item.desc}</p>
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="text-blue-600 text-xs font-semibold inline-flex items-center gap-1 hover:underline"
            >
              {item.link}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
