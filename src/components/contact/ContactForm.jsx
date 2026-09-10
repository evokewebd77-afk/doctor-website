import { useState } from 'react'
import { Loader2, Lock, CheckCircle2, AlertCircle } from 'lucide-react'
import { CONTACT_FORM_SERVICES, CONTACT_SECTION_ICONS } from '../../data/contactData'
import RealisticIcon from './RealisticIcon'
import { submitBooking } from '../../utils/submitBooking'

const INITIAL_FORM = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.fullName.trim() || !form.phone.trim()) {
      setStatus('error')
      setFeedback('Please fill in your name and phone number.')
      return
    }

    setStatus('submitting')
    setFeedback('')

    try {
      await submitBooking({
        source: 'contact',
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        department: form.service,
        doctor: form.service,
        date: form.date,
        time: form.time,
        message: form.message.trim(),
      })
      setStatus('success')
      setFeedback('Thank you! Your enquiry has been sent. Our team will contact you shortly.')
      setForm(INITIAL_FORM)
    } catch (err) {
      setStatus('error')
      setFeedback(
        err?.message ===
          'Could not submit your booking. Please try again or call the clinic.'
          ? 'Something went wrong. Please try again or call the clinic.'
          : 'Booking is not configured yet. Please try again later.',
      )
    }
  }

  const inputClass =
    'w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400'
  const selectClass = 'bg-white ' + inputClass
  const inputLabel = 'block text-xs font-semibold text-gray-600 mb-1.5'

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

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={inputLabel}>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={form.fullName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={inputLabel}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={inputLabel}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={inputLabel}>Select Service</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Choose a service</option>
              {CONTACT_FORM_SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={inputLabel}>Preferred Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={inputLabel}>Preferred Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className={inputLabel}>Message</label>
          <textarea
            rows={4}
            name="message"
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm resize-none focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {status === 'success' && (
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            {feedback}
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {feedback}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2.5 bg-blue-600 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <RealisticIcon src={CONTACT_SECTION_ICONS.send} alt="" size="xs" className="drop-shadow-none" />
              Send Enquiry
            </>
          )}
        </button>
        <p className="flex items-center justify-center gap-1.5 text-gray-400 text-[10px] sm:text-xs">
          <Lock className="w-3 h-3" strokeWidth={1.5} />
          Your information is safe and secure with us.
        </p>
      </form>
    </div>
  )
}