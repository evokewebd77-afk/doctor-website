import { useEffect, useRef, useState } from 'react'
import { Award, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import CloudinaryImage from './media/CloudinaryImage'
import { PAGE_MAX } from '../data/constants'
import { ACHIEVEMENTS_HERO, CERTIFICATES } from '../data/achievementsData'

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
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#f5c842]">Achievement Certificate</p>
              <h3 className="text-lg font-bold text-white sm:text-xl">{cert.title}</h3>
              <p className="mt-1 text-xs text-white/70">
                {cert.issuer} · <span className="text-[#f5c842]">{cert.year}</span>
              </p>
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

function CertificateSlide({ cert, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(cert)}
      className="group flex w-[min(78vw,240px)] shrink-0 snap-center flex-col text-left sm:w-[260px] lg:w-[280px]"
    >
      <div className="overflow-hidden rounded-xl border-[3px] border-[#d4a017] bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:-translate-y-1 sm:rounded-2xl sm:p-2.5">
        <div className="flex h-[150px] items-center justify-center overflow-hidden rounded-lg bg-[#f8fafe] sm:h-[170px]">
          <CloudinaryImage
            src={cert.image}
            alt={cert.title}
            variant="card"
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
      <div className="mt-3 px-1">
        <p className="line-clamp-2 text-sm font-bold text-white sm:text-[15px]">{cert.title}</p>
        <p className="mt-1 text-[11px] text-white/65">{cert.issuer}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-[#f5c842] opacity-0 transition-opacity group-hover:opacity-100">
          <Maximize2 className="h-3 w-3" />
          View certificate
        </span>
      </div>
    </button>
  )
}

export default function AchievementsWallSection() {
  const [activeCert, setActiveCert] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)

  const openIndex = activeCert ? CERTIFICATES.findIndex((c) => c.id === activeCert.id) : -1
  const goPrev = () => {
    if (openIndex < 0) return
    setActiveCert(CERTIFICATES[(openIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length])
  }
  const goNext = () => {
    if (openIndex < 0) return
    setActiveCert(CERTIFICATES[(openIndex + 1) % CERTIFICATES.length])
  }

  const scrollToIndex = (index) => {
    const el = trackRef.current
    if (!el) return
    const slide = el.children[index]
    if (!slide) return
    const left = slide.offsetLeft - (el.clientWidth - slide.clientWidth) / 2
    el.scrollTo({ left, behavior: 'smooth' })
    setActiveIndex(index)
  }

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#0b1f45] py-10 sm:py-12 lg:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(212,160,23,0.12),transparent_50%)]" />

        <div className={`${PAGE_MAX} relative`}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-10 xl:gap-14">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a017]/30 bg-[#d4a017]/10 px-3 py-1.5">
                <Award className="h-4 w-4 text-[#f5c842]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#f5c842] sm:text-[11px]">
                  {ACHIEVEMENTS_HERO.subtitle}
                </span>
              </div>

              <h2 className="font-serif-display text-2xl font-bold text-white sm:text-3xl lg:text-[2rem]">
                Recognitions That Reflect Our Commitment
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                {ACHIEVEMENTS_HERO.description}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#f5c842]">{ACHIEVEMENTS_HERO.doctor}</p>

              <button
                type="button"
                onClick={() => setActiveCert(CERTIFICATES[0])}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/15 sm:text-sm"
              >
                View All Certificates
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="min-w-0">
              <div className="mb-4 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/15"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToIndex(Math.min(activeIndex + 1, CERTIFICATES.length - 1))}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/15"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div
                ref={trackRef}
                className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0"
              >
                {CERTIFICATES.map((cert, index) => (
                  <CertificateSlide
                    key={cert.id}
                    cert={cert}
                    onOpen={(selected) => {
                      setActiveCert(selected)
                      setActiveIndex(index)
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeCert && (
        <CertificateLightbox cert={activeCert} onClose={() => setActiveCert(null)} onPrev={goPrev} onNext={goNext} />
      )}
    </>
  )
}
