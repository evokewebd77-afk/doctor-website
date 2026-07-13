import { useEffect, useState } from 'react'
import { Award, ChevronLeft, ChevronRight, Maximize2, Sparkles, X } from 'lucide-react'
import CloudinaryImage from './media/CloudinaryImage'
import { PAGE_MAX } from '../data/constants'
import { ACHIEVEMENT_STATS, ACHIEVEMENTS_HERO, CERTIFICATES } from '../data/achievementsData'

const TOP_ROW = CERTIFICATES.slice(0, 3)
const BOTTOM_ROW = CERTIFICATES.slice(3)

function CertificateFrame({ cert, onOpen, wide = false }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(cert)}
      className="group flex h-full w-full flex-col text-left transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`relative flex flex-1 flex-col overflow-hidden rounded-xl p-1 shadow-[0_6px_24px_rgba(11,31,69,0.12)] ring-offset-1 transition-all duration-300 group-hover:ring-[#f5c842] sm:rounded-2xl sm:p-1.5 ${
        cert.featured
          ? 'border-[4px] border-[#0b1f45] ring-[3px] ring-[#d4a017]'
          : 'border-[3px] border-[#0b1f45] ring-2 ring-[#d4a017] group-hover:border-[#102a5e]'
      }`}>
        <div className="flex flex-1 flex-col rounded-lg border border-[#d4a017]/40 bg-white p-2 sm:rounded-xl sm:p-2.5">
          <div
            className={`relative flex items-center justify-center overflow-hidden rounded-md bg-[#f8fafe] sm:rounded-lg ${
              wide ? 'h-[170px] sm:h-[190px]' : 'h-[150px] sm:h-[170px] lg:h-[160px]'
            }`}
          >
            <CloudinaryImage
              src={cert.image}
              alt={cert.title}
              variant="card"
              className="max-h-full max-w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1f45]/30 via-transparent to-[#d4a017]/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-[#0b1f45] px-2.5 py-1 text-[9px] font-semibold text-[#f5c842] opacity-0 shadow-md transition-opacity group-hover:opacity-100 sm:text-[10px]">
              <Maximize2 className="h-3 w-3" />
              View
            </span>
          </div>

          <div className="mt-2.5 flex min-h-[72px] flex-col justify-between px-0.5 sm:min-h-[78px]">
            <div>
              <p className="line-clamp-1 text-[13px] font-bold text-[#0b1f45] sm:text-sm">{cert.title}</p>
              <p className="mt-0.5 line-clamp-1 text-[10px] text-gray-500 sm:text-[11px]">{cert.issuer}</p>
            </div>
            <div className="mt-1.5 flex items-center gap-2">
              <span className="shrink-0 rounded-full bg-gradient-to-r from-[#d4a017] to-[#f5c842] px-2 py-0.5 text-[9px] font-bold text-[#0b1f45] shadow-sm sm:text-[10px]">
                {cert.year}
              </span>
              <span className="line-clamp-1 text-[9px] text-gray-400 sm:text-[10px]">{cert.detail}</span>
            </div>
          </div>
        </div>

        {cert.featured && (
          <span className="absolute -top-px left-1/2 z-10 -translate-x-1/2 rounded-b-md bg-gradient-to-r from-[#d4a017] to-[#f5c842] px-3 py-0.5 text-[8px] font-bold uppercase tracking-wide text-[#0b1f45] shadow-sm sm:text-[9px]">
            Featured
          </span>
        )}
      </div>
    </button>
  )
}

function CertificateLightbox({ cert, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  if (!cert) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b1f45]/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#d4a017]/30 bg-white shadow-[0_24px_60px_rgba(11,31,69,0.5)] sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-[#0b1f45] via-[#102a5e] to-[#0b1f45] px-5 py-4 sm:px-6">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#f5c842] to-transparent" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#f5c842]">Achievement Certificate</p>
              <h3 className="text-lg font-bold text-white sm:text-xl">{cert.title}</h3>
              <p className="mt-1 text-xs text-white/70">{cert.issuer} · <span className="text-[#f5c842]">{cert.year}</span></p>
            </div>
            <button type="button" onClick={onClose} className="rounded-full border border-[#d4a017]/40 bg-[#d4a017]/10 p-2 text-[#f5c842] hover:bg-[#d4a017]/20" aria-label="Close">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto bg-[#f8fafe] p-4 sm:p-6">
          <div className="mx-auto max-w-2xl rounded-xl border border-[#d4a017]/20 bg-gradient-to-b from-[#0b1f45] to-[#0d2147] p-3 sm:p-4">
            <div className="rounded-lg bg-white p-3 sm:p-4">
              <CloudinaryImage src={cert.image} alt={cert.title} variant="card" className="mx-auto h-auto max-h-[60vh] w-full object-contain" />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-[#102a5e]">{cert.detail}</p>
        </div>

        <div className="flex items-center justify-between border-t border-[#d4a017]/15 bg-[#fffdf8] px-4 py-3 sm:px-6">
          <button type="button" onClick={onPrev} className="flex items-center gap-1.5 rounded-full border border-[#0b1f45]/15 px-4 py-2 text-xs font-semibold text-[#0b1f45] hover:border-[#d4a017]/40 hover:bg-[#fff9e6] sm:text-sm">
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <button type="button" onClick={onNext} className="flex items-center gap-1.5 rounded-full border border-[#0b1f45]/15 px-4 py-2 text-xs font-semibold text-[#0b1f45] hover:border-[#d4a017]/40 hover:bg-[#fff9e6] sm:text-sm">
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function AchievementsWallSection() {
  const [activeCert, setActiveCert] = useState(null)

  const openIndex = activeCert ? CERTIFICATES.findIndex((c) => c.id === activeCert.id) : -1
  const goPrev = () => {
    if (openIndex < 0) return
    setActiveCert(CERTIFICATES[(openIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length])
  }
  const goNext = () => {
    if (openIndex < 0) return
    setActiveCert(CERTIFICATES[(openIndex + 1) % CERTIFICATES.length])
  }

  return (
    <>
      <section className="relative w-full py-6 sm:py-8 lg:py-10">
        <div className={`${PAGE_MAX} relative`}>
          <div className="mb-5 sm:mb-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5">
              <Award className="h-4 w-4 text-amber-600" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-700">
                {ACHIEVEMENTS_HERO.subtitle}
              </span>
            </div>

            <h2 className="font-serif-display text-2xl font-bold text-[#102a5e] sm:text-3xl">
              {ACHIEVEMENTS_HERO.title}
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-500">
              {ACHIEVEMENTS_HERO.description}
            </p>
            <p className="mt-1.5 text-sm font-semibold text-[#0b1f45]">{ACHIEVEMENTS_HERO.doctor}</p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 lg:max-w-3xl">
              {ACHIEVEMENT_STATS.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-gray-100 bg-white px-3 py-2.5 text-center shadow-sm">
                  <p className="text-lg font-bold text-[#0b1f45] sm:text-xl">{stat.value}</p>
                  <p className="text-[9px] text-gray-500 sm:text-[10px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-[0_4px_24px_rgba(16,42,94,0.06)] sm:p-4 lg:p-5">
            <div className="mb-3 flex items-center gap-2 border-b border-gray-100 pb-3">
              <Sparkles className="h-4 w-4 text-[#d4a017]" />
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0b1f45] sm:text-[13px]">
                Credentials & Certifications
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {TOP_ROW.map((cert) => (
                <CertificateFrame key={cert.id} cert={cert} onOpen={setActiveCert} />
              ))}
            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4">
              {BOTTOM_ROW.map((cert) => (
                <CertificateFrame key={cert.id} cert={cert} onOpen={setActiveCert} wide />
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-[10px] text-gray-400 sm:text-[11px]">
            Tap any certificate to view in full size
          </p>
        </div>
      </section>

      {activeCert && (
        <CertificateLightbox cert={activeCert} onClose={() => setActiveCert(null)} onPrev={goPrev} onNext={goNext} />
      )}
    </>
  )
}
