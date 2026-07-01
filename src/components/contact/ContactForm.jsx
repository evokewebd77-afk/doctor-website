import { Lock } from 'lucide-react'
import { CONTACT_FORM_SERVICES, CONTACT_SECTION_ICONS } from '../../data/contactData'
import RealisticIcon from './RealisticIcon'

export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(16,42,94,0.08)] p-5 sm:p-7 lg:p-8">
      <div className="flex items-start gap-3 mb-6">
        <RealisticIcon src={CONTACT_SECTION_ICONS.form} alt="Send message" size="sm" className="shrink-0" />
        <div>
          <h2 className="font-bold text-[#102a5e] text-base sm:text-lg">Send Us a Message</h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
            Fill in the details below and our team will get in touch with you shortly.
          </p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Select Service</label>
            <select className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 bg-white">
              <option value="">Choose a service</option>
              {CONTACT_FORM_SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Preferred Date</label>
            <input
              type="date"
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Preferred Time</label>
            <input
              type="time"
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message</label>
          <textarea
            rows={4}
            placeholder="Write your message here..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm resize-none focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2.5 bg-blue-600 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors"
        >
          <RealisticIcon src={CONTACT_SECTION_ICONS.send} alt="" size="xs" className="drop-shadow-none" />
          Send Enquiry
        </button>
        <p className="flex items-center justify-center gap-1.5 text-gray-400 text-[10px] sm:text-xs">
          <Lock className="w-3 h-3" strokeWidth={1.5} />
          Your information is safe and secure with us.
        </p>
      </form>
    </div>
  )
}
