import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Quote, ShieldCheck, Star, X } from 'lucide-react'
import { CLINIC_GOOGLE_REVIEWS_URL, PAGE_MAX } from '../data/constants'
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_SUMMARY } from '../data/googleReviewsData'

const AUTOPLAY_MS = 5000

function GoogleLogo({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

function StarRow({ count = 5, size = 'md' }) {
  const sizeClass = size === 'sm' ? 'h-3.5 w-3.5' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${sizeClass} fill-[#fbbc04] text-[#fbbc04]`} />
      ))}
    </div>
  )
}

function ReviewModal({ review, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!review) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#0b1f45]/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Review by ${review.name}`}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-5 py-4 sm:px-6">
          <div>
            <p className="font-bold text-[#102a5e]">{review.name}</p>
            <div className="mt-1 flex items-center gap-2">
              <StarRow count={review.rating} size="sm" />
              <span className="text-[11px] text-gray-400">{review.time}</span>
              {review.isVerified && (
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700">
                  <ShieldCheck className="h-3 w-3" />
                  Verified
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-gray-200"
            aria-label="Close review"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-6">
          {review.image ? (
            <div className="mb-4 overflow-hidden rounded-2xl border border-gray-100 shadow-inner">
              <img
                src={review.image}
                alt={review.isVerified ? `Patient review by ${review.name}` : `Google review by ${review.name}`}
                className="h-auto w-full object-cover object-top"
              />
            </div>
          ) : null}

          <div className="relative rounded-2xl bg-[#f8fafe] p-4 sm:p-5">
            <Quote className="absolute right-4 top-4 h-8 w-8 text-blue-100" />
            <p className="relative text-sm leading-relaxed text-[#102a5e] sm:text-[15px]">
              {review.fullText}
            </p>
          </div>

          {review.hasOwnerReply && (
            <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
              <p className="text-[11px] font-semibold text-emerald-700">Family Cure Clinic responded</p>
              <p className="mt-1 text-sm text-emerald-800">{review.ownerReply}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function SummaryCard() {
  return (
    <div className="flex w-[min(72vw,240px)] shrink-0 snap-center flex-col items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-[#eef4ff] px-6 py-8 text-center shadow-[0_8px_24px_rgba(16,42,94,0.08)] sm:w-[240px]">
      <p className="text-5xl font-bold leading-none text-[#102a5e]">{GOOGLE_REVIEWS_SUMMARY.rating.toFixed(1)}</p>
      <StarRow size="lg" />
      <div className="mt-2 flex items-center gap-1.5">
        <GoogleLogo className="h-4 w-4" />
        <p className="text-sm font-bold text-[#102a5e]">Google Rating</p>
      </div>
      <p className="text-[11px] text-gray-500">Based on {GOOGLE_REVIEWS_SUMMARY.totalReviews}+ reviews</p>
    </div>
  )
}

function ReviewCard({ review, onOpen }) {
  const isNote = review.isVerified && review.image

  return (
    <article
      className="group flex w-[min(76vw,280px)] shrink-0 cursor-pointer snap-center flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_8px_24px_rgba(16,42,94,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_16px_40px_rgba(37,99,235,0.14)] sm:w-[280px]"
      onClick={() => onOpen(review)}
      onKeyDown={(e) => { if (e.key === 'Enter') onOpen(review) }}
      role="button"
      tabIndex={0}
    >
      {isNote ? (
        <>
          <div className="mb-3 flex-1 overflow-hidden rounded-xl border border-gray-100 bg-[#fffdf6]">
            <img
              src={review.image}
              alt={`Handwritten thank-you note from ${review.name}`}
              loading="lazy"
              className="h-[180px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <p className="text-sm font-semibold text-[#102a5e]">A Heartfelt Thanks</p>
          <div className="mt-2 flex items-end justify-between gap-3">
            <div>
              <p className="text-[12px] font-semibold text-gray-600">— {review.name}</p>
              <div className="mt-1"><StarRow count={review.rating} size="sm" /></div>
            </div>
            <ShieldCheck className="h-5 w-5 shrink-0 text-blue-600" />
          </div>
        </>
      ) : (
        <>
          <Quote className="mb-3 h-7 w-7 text-blue-200" />
          <p className="flex-1 text-[13px] leading-relaxed text-[#334155]">
            &ldquo;{review.excerpt}&rdquo;
          </p>
          <div className="mt-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-[12px] font-semibold text-gray-600">— {review.name}</p>
              <div className="mt-1"><StarRow count={review.rating} size="sm" /></div>
            </div>
            <GoogleLogo className="h-5 w-5 shrink-0 opacity-90" />
          </div>
        </>
      )}
    </article>
  )
}

export default function GoogleReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [modalReview, setModalReview] = useState(null)
  const trackRef = useRef(null)

  const total = GOOGLE_REVIEWS.length

  const goTo = useCallback((index) => {
    const next = (index + total) % total
    setActiveIndex(next)
    const el = trackRef.current
    if (!el) return
    // Track children: [summary card, ...review cards]
    const card = el.children[next + 1]
    if (!card) return
    const left = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2
    el.scrollTo({ left, behavior: 'smooth' })
  }, [total])

  useEffect(() => {
    if (isPaused || modalReview) return undefined
    const timer = setInterval(() => goTo(activeIndex + 1), AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [isPaused, modalReview, activeIndex, goTo])

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#f8fafe] py-10 sm:py-12 lg:py-14">
        <div className={`${PAGE_MAX} relative`}>
          <div className="mb-6 sm:mb-8">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 sm:text-[11px]">
              Loved by Families Across Tricity
            </p>
            <h2 className="font-serif-display text-2xl font-bold text-[#102a5e] sm:text-3xl lg:text-[2.15rem]">
              Patient Stories That Inspire Trust
            </h2>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="absolute -left-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#102a5e] shadow-md transition-all hover:border-blue-300 hover:text-blue-700 active:scale-95 sm:flex lg:-left-4"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="absolute -right-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#102a5e] shadow-md transition-all hover:border-blue-300 hover:text-blue-700 active:scale-95 sm:flex lg:-right-4"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              ref={trackRef}
              className="-mx-4 flex items-stretch gap-2 overflow-x-auto px-4 py-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3 lg:mx-0 lg:px-1"
            >
              <SummaryCard />
              {GOOGLE_REVIEWS.map((review) => (
                <ReviewCard key={review.id} review={review} onOpen={setModalReview} />
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {GOOGLE_REVIEWS.map((review, index) => (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to review by ${review.name}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href={CLINIC_GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs font-semibold text-[#102a5e] shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md sm:text-sm"
            >
              Read All Reviews on Google
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {modalReview && (
        <ReviewModal review={modalReview} onClose={() => setModalReview(null)} />
      )}
    </>
  )
}
