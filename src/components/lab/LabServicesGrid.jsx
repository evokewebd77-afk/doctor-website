import { useState, useEffect } from 'react'
import { ArrowRight, X, CheckCircle2, Phone } from 'lucide-react'
import { PAGE_MAX, CLINIC_PHONE, CLINIC_PHONE_DISPLAY } from '../../data/constants'
import { LAB_SERVICES } from '../../data/labServicesData'
import RealisticIcon from '../RealisticIcon'

export default function LabServicesGrid() {
  const [selected, setSelected] = useState(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selected])

  const close = () => setSelected(null)

  return (
    <section id="lab-services" className={`${PAGE_MAX} pt-6 sm:pt-10 pb-8 sm:pb-12 w-full scroll-mt-24`}>
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <p className="text-blue-500 font-bold tracking-[0.2em] text-[10px] sm:text-[11px] uppercase mb-3">
          What We Offer
        </p>
        <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#102a5e] mb-3">
          Our Lab Services
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Comprehensive diagnostic testing across every major laboratory discipline for accurate, timely results.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
        {LAB_SERVICES.map((service, index) => (
          <button
            type="button"
            key={service.title}
            onClick={() => setSelected(index)}
            className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(16,42,94,0.06)] hover:shadow-[0_8px_28px_rgba(16,42,94,0.1)] hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300 p-4 sm:p-5 flex flex-col items-center text-center cursor-pointer group"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-100 transition-colors">
              <RealisticIcon src={service.icon} alt={service.title} size="sm" />
            </div>
            <h3 className="font-bold text-[#102a5e] text-[12px] sm:text-sm mb-1.5 sm:mb-2 leading-snug">{service.title}</h3>
            <p className="text-gray-500 text-[10px] sm:text-[11px] leading-relaxed mb-3 sm:mb-4 line-clamp-3 flex-1 hidden sm:block">
              {service.desc}
            </p>
            <span className="text-[10px] sm:text-[11px] font-semibold text-blue-600 inline-flex items-center gap-1 group-hover:underline mt-auto">
              Learn More
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        ))}
      </div>

      {/* Modal Popup */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal content */}
          <div
            className="relative bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(16,42,94,0.25)] w-full max-w-lg max-h-[85vh] overflow-y-auto animate-[modalIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white z-10 px-6 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-gray-100 rounded-t-2xl sm:rounded-t-3xl">
              <button
                type="button"
                onClick={close}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <RealisticIcon src={LAB_SERVICES[selected].icon} alt={LAB_SERVICES[selected].title} size="sm" className="w-9 h-9 sm:w-10 sm:h-10" />
                </div>
                <div>
                  <h3 className="font-bold text-[#102a5e] text-lg sm:text-xl">{LAB_SERVICES[selected].title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">{LAB_SERVICES[selected].desc}</p>
                </div>
              </div>
            </div>

            {/* Tests list */}
            <div className="px-6 sm:px-8 py-5 sm:py-6">
              <h4 className="text-[#102a5e] font-bold text-sm sm:text-[15px] mb-4">Tests Available</h4>
              <ul className="space-y-2.5">
                {LAB_SERVICES[selected].tests?.map((test) => (
                  <li key={test} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{test}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white px-6 sm:px-8 py-4 sm:py-5 border-t border-gray-100 rounded-b-2xl sm:rounded-b-3xl">
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Book Appointment — {CLINIC_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </section>
  )
}
