import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { PAGE_MAX } from '../../data/constants'
import {
  GM_DOCTOR,
  GM_DOCTOR_STATS,
  GM_TIME_SLOTS,
  GM_BOOKING_STEPS,
} from '../../data/generalMedicineData'
import RealisticIcon from '../RealisticIcon'
import CloudinaryImage from '../media/CloudinaryImage'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function buildCalendarDays(year, month) {
  const first = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < first; i++) cells.push(null)
  for (let d = 1; d <= total; d++) cells.push(d)
  return cells
}

export default function GMBookAppointment() {
  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())
  const [selectedDay, setSelectedDay] = useState(today.getDate())
  const [selectedSlot, setSelectedSlot] = useState('9:30 AM')
  const [activeStep, setActiveStep] = useState(1)

  const monthLabel = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })
  const calendarDays = buildCalendarDays(year, month)

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear((y) => y - 1) } else setMonth((m) => m - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear((y) => y + 1) } else setMonth((m) => m + 1)
  }

  if (!GM_DOCTOR) return null

  return (
    <section id="book-appointment" className={`${PAGE_MAX} py-10 sm:py-12 lg:py-14 w-full scroll-mt-20`}>
      <div className="overflow-hidden rounded-3xl border border-[#1a3468] bg-[#0b1f45] shadow-[0_20px_60px_rgba(11,31,69,0.4)]">
        <div className="grid lg:grid-cols-[minmax(280px,36%)_1fr]">
          {/* Doctor profile */}
          <div className="relative flex flex-col overflow-hidden border-b border-[#1a3468] p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.2),transparent_55%),radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_50%)]" />

            <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
              <CloudinaryImage
                src={GM_DOCTOR.image}
                alt={GM_DOCTOR.name}
                variant="portrait"
                className="h-[260px] w-full object-cover object-top sm:h-[300px]"
              />
            </div>

            <div className="relative text-center lg:text-left">
              <span className="mb-3 inline-flex rounded-full border border-blue-400/35 bg-blue-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-300">
                Our Specialist
              </span>
              <h3 className="text-xl font-bold text-white sm:text-2xl">{GM_DOCTOR.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/65">{GM_DOCTOR.qualifications}</p>
              <p className="mt-1 text-sm font-medium text-white/80">{GM_DOCTOR.specialty}</p>
            </div>

            <div className="relative mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
              {GM_DOCTOR_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <RealisticIcon src={stat.icon} alt={stat.label} size="xs" className="mx-auto mb-1.5 opacity-90" />
                  <p className="text-sm font-bold leading-none text-white">{stat.value}</p>
                  <p className="mt-1 text-[9px] leading-tight text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking widget */}
          <div className="p-5 sm:p-7 lg:p-8">
            <div className="mb-5 flex flex-wrap items-center gap-4 sm:gap-6">
              {GM_BOOKING_STEPS.map((step, index) => (
                <button
                  key={step}
                  type="button"
                  onClick={() => setActiveStep(index + 1)}
                  className="flex items-center gap-2.5"
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                      activeStep === index + 1
                        ? 'bg-blue-500 text-white shadow-[0_0_12px_rgba(59,130,246,0.45)]'
                        : 'border-2 border-white/25 text-white/50'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      activeStep === index + 1 ? 'text-white' : 'text-white/45'
                    }`}
                  >
                    {step}
                  </span>
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-[#1e3d72] bg-[#091a38] p-4 sm:p-6">
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                {/* Calendar */}
                <div>
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-[11px] font-bold text-white">
                      1
                    </span>
                    <span className="text-sm font-semibold text-white">Select Date</span>
                  </div>

                  <div className="mb-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={prevMonth}
                      className="rounded-lg p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <span className="text-sm font-semibold text-white">{monthLabel}</span>
                    <button
                      type="button"
                      onClick={nextMonth}
                      className="rounded-lg p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                      aria-label="Next month"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mb-1.5 grid grid-cols-7 gap-1 text-center text-[10px] font-medium text-white/40">
                    {DAYS.map((d) => (
                      <span key={d} className="py-1">{d}</span>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, i) => (
                      <button
                        key={i}
                        type="button"
                        disabled={!day}
                        onClick={() => { if (day) { setSelectedDay(day); setActiveStep(2) } }}
                        className={`aspect-square rounded-lg text-xs font-medium transition-colors ${
                          !day
                            ? 'invisible'
                            : selectedDay === day
                              ? 'bg-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.4)]'
                              : 'text-white/85 hover:bg-white/10'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time slots */}
                <div>
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-[11px] font-bold text-white">
                      2
                    </span>
                    <span className="text-sm font-semibold text-white">Select Time</span>
                  </div>

                  <div className="space-y-3.5">
                    {Object.entries(GM_TIME_SLOTS).map(([period, slots]) => (
                      <div key={period}>
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                          {period}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {slots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => { setSelectedSlot(slot); setActiveStep(3) }}
                              className={`rounded-lg border px-2.5 py-1.5 text-[10px] font-medium transition-colors sm:px-3 sm:text-[11px] ${
                                selectedSlot === slot
                                  ? 'border-blue-500 bg-blue-500 text-white shadow-[0_0_8px_rgba(59,130,246,0.35)]'
                                  : 'border-[#2a4f8f] bg-[#0d2249] text-white/80 hover:border-blue-400/50'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {activeStep === 3 && (
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/75 sm:text-sm">
                <span className="font-semibold text-white">Appointment Summary:</span>{' '}
                {monthLabel.split(' ')[0]} {selectedDay}, {selectedSlot} with {GM_DOCTOR.name}
              </div>
            )}

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#3b82f6_0%,#2563eb_100%)] py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(37,99,235,0.35)] transition-transform hover:-translate-y-px"
            >
              Confirm Appointment
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
