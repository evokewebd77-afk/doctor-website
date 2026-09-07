import {
  CLINIC_EMAIL,
  HOME_EMERGENCY_PHONE,
  HOME_EMERGENCY_PHONE_DISPLAY,
} from './constants'
import { DOCTORS_LIST } from './doctorsData'

/** Common desk for non-doctor / general website bookings */
export const BOOKING_COMMON_NOTIFY_PHONE = HOME_EMERGENCY_PHONE
export const BOOKING_COMMON_NOTIFY_EMAIL = CLINIC_EMAIL

const DEPARTMENT_TO_SPECIALTY = {
  'General Medicine': 'General Medicine',
  'Obstetrics & Gynaecology': 'Obstetrics & Gynaecology',
  Pediatrics: 'Pediatrics & Neonatology',
  'Pediatrics & Neonatology': 'Pediatrics & Neonatology',
}

function findDoctor({ doctor, department, specialty }) {
  if (doctor) {
    const byName = DOCTORS_LIST.find(
      (item) => item.name.toLowerCase() === String(doctor).toLowerCase(),
    )
    if (byName) return byName
  }

  const specialtyKey =
    specialty ||
    DEPARTMENT_TO_SPECIALTY[department] ||
    department

  if (!specialtyKey) return null

  return (
    DOCTORS_LIST.find(
      (item) => item.specialty.toLowerCase() === String(specialtyKey).toLowerCase(),
    ) || null
  )
}

/**
 * Doctor-page bookings → that doctor's number.
 * Other / general bookings → common phone + clinic email.
 */
export function resolveBookingRoute(payload = {}) {
  const matchedDoctor = findDoctor(payload)
  const doctorPhone = matchedDoctor?.phone || null
  const isDoctorRoute = Boolean(payload.routeToDoctor && doctorPhone)

  if (isDoctorRoute) {
    return {
      routeType: 'doctor',
      doctorName: matchedDoctor.name,
      doctorSpecialty: matchedDoctor.specialty,
      notifyPhone: doctorPhone,
      notifyPhoneDisplay: matchedDoctor.phoneDisplay || doctorPhone,
      notifyEmail: null,
      patientConfirmMessage:
        'Your booking is confirmed. Please arrive on time for your appointment at Family Cure Clinic.',
      doctorNotifyMessage: [
        'New appointment request — Family Cure Clinic',
        `Patient: ${payload.fullName || '-'}`,
        `Phone: ${payload.phone || '-'}`,
        `Doctor: ${matchedDoctor.name}`,
        `Department: ${matchedDoctor.specialty}`,
        `Date: ${payload.date || '-'}`,
        `Time: ${payload.time || '-'}`,
        payload.message ? `Message: ${payload.message}` : null,
        '',
        'Reply YES to confirm this booking (patient will be notified).',
        'Reply NO to decline.',
      ]
        .filter(Boolean)
        .join('\n'),
    }
  }

  return {
    routeType: 'common',
    doctorName: matchedDoctor?.name || payload.doctor || null,
    doctorSpecialty: matchedDoctor?.specialty || payload.department || null,
    notifyPhone: BOOKING_COMMON_NOTIFY_PHONE,
    notifyPhoneDisplay: HOME_EMERGENCY_PHONE_DISPLAY,
    notifyEmail: BOOKING_COMMON_NOTIFY_EMAIL,
    patientConfirmMessage:
      'Your booking is confirmed. Our team will contact you if needed. Family Cure Clinic.',
    doctorNotifyMessage: [
      'New website booking — Family Cure Clinic',
      `Patient: ${payload.fullName || '-'}`,
      `Phone: ${payload.phone || '-'}`,
      payload.email ? `Email: ${payload.email}` : null,
      `Department: ${payload.department || matchedDoctor?.specialty || '-'}`,
      payload.doctor || matchedDoctor?.name
        ? `Doctor: ${payload.doctor || matchedDoctor?.name}`
        : null,
      `Date: ${payload.date || '-'}`,
      `Time: ${payload.time || '-'}`,
      payload.message ? `Message: ${payload.message}` : null,
      '',
      `Also emailed to: ${BOOKING_COMMON_NOTIFY_EMAIL}`,
      'Reply YES to confirm this booking (patient will be notified).',
      'Reply NO to decline.',
    ]
      .filter(Boolean)
      .join('\n'),
  }
}
