import { resolveBookingRoute } from '../data/bookingRouting'

/** Shown on the website right after submit (before doctor confirms). */
export const BOOKING_THANK_YOU =
  'Thank you for booking! Your request has been sent for confirmation. You will receive a message on your number once it is confirmed.'

/**
 * Posts booking data to n8n.
 * Set VITE_N8N_WEBHOOK_URL in `.env`.
 *
 * Payload includes routing so n8n can:
 * - Doctor-page bookings → notify that doctor's WhatsApp/SMS
 * - Other bookings → common number + clinic email
 * - Save row to Google Sheets
 * - When doctor replies YES → message patient "Your booking is confirmed"
 */
/** Fallback used when the build env has no VITE_N8N_WEBHOOK_URL (e.g. CI deploys). */
export const DEFAULT_N8N_WEBHOOK_URL =
  'https://damnart-ai-guladab.n8n-wsk.com/webhook/dcee6a5b-21c5-41d8-adb5-85c070c0b703'

export async function submitBooking(payload) {
  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL?.trim() || DEFAULT_N8N_WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error(
      'Booking is not configured yet. Please add VITE_N8N_WEBHOOK_URL to your .env file.',
    )
  }

  const route = resolveBookingRoute(payload)
  const doctorName = (route.doctorName || payload.doctor || '').trim() || 'general'

  const body = {
    ...payload,
    ...route,
    doctor: doctorName,
    doctorName,
    submittedAt: new Date().toISOString(),
    source: payload.source || 'website',
    status: 'pending_confirmation',
    sheets: {
      timestamp: new Date().toISOString(),
      fullName: payload.fullName || '',
      phone: payload.phone || '',
      email: payload.email || '',
      department: payload.department || route.doctorSpecialty || '',
      doctor: doctorName,
      date: payload.date || '',
      time: payload.time || '',
      message: payload.message || '',
      source: payload.source || 'website',
      routeType: route.routeType,
      notifyPhone: route.notifyPhone,
      notifyEmail: route.notifyEmail || '',
      status: 'pending',
    },
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error('Could not submit your booking. Please try again or call the clinic.')
  }

  let data = null
  const contentType = response.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    try {
      data = await response.json()
    } catch {
      data = null
    }
  }

  return {
    message: data?.message || data?.thankYou || BOOKING_THANK_YOU,
    data,
  }
}
