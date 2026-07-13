import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
  Pause,
  Play,
  Quote,
  ShieldCheck,
  Star,
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { CLINIC_GOOGLE_REVIEWS_URL, PAGE_MAX } from '../data/constants'
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_SUMMARY, GOOGLE_REVIEW_TOPICS } from '../data/googleReviewsData'

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

function StarRow({ count = 5, size = 'md', animated = false }) {
  const sizeClass = size === 'sm' ? 'h-3.5 w-3.5' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} fill-[#fbbc04] text-[#fbbc04] ${animated ? 'animate-[pop_0.4s_ease-out_both]' : ''}`}
          style={animated ? { animationDelay: `${i * 80}ms` } : undefined}
        />
      ))}
    </div>
  )
}

function Avatar({ name, accent, active }) {
  const initial = name.charAt(0).toUpperCase()
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-sm font-bold text-white shadow-lg transition-transform duration-300 ${
        active ? 'scale-110 ring-4 ring-white/80' : 'scale-100'
      }`}
    >
      {initial}
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
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl animate-[slideUp_0.35s_ease-out] sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative overflow-hidden bg-gradient-to-r ${review.accent} px-5 py-4 sm:px-6`}>
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 left-1/3 h-20 w-20 rounded-full bg-white/10" />
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar name={review.name} accent={review.accent} active />
              <div>
                <p className="font-bold text-white">{review.name}</p>
                <p className="text-[11px] text-white/75">{review.meta}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <StarRow count={review.rating} size="sm" />
                  <span className="text-[11px] text-white/70">{review.time}</span>
                  {review.isVerified && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium text-white">
                      <ShieldCheck className="h-3 w-3" />
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30"
              aria-label="Close review"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
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

          <div className="mt-4 flex flex-wrap gap-2">
            {review.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ReviewCard({ review, isActive, onSelect, onExpand }) {
  return (
    <article
      className={`group relative flex h-full w-[min(82vw,300px)] shrink-0 cursor-pointer snap-center flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-500 ease-out sm:w-[min(72vw,320px)] lg:w-[300px] ${
        isActive
          ? 'scale-100 border-blue-200 shadow-[0_20px_50px_rgba(37,99,235,0.18)] ring-2 ring-blue-400/30'
          : 'scale-[0.94] border-gray-100 opacity-75 shadow-[0_8px_24px_rgba(16,42,94,0.06)] hover:scale-[0.97] hover:opacity-90'
      }`}
      onClick={onSelect}
      onKeyDown={(e) => { if (e.key === 'Enter') onSelect() }}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
    >
      {isActive && (
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${review.accent}`} />
      )}

      <div className="border-b border-gray-50 bg-[#fafbfc] px-4 py-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <Avatar name={review.name} accent={review.accent} active={isActive} />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[#202124]">{review.name}</p>
              <p className="truncate text-[10px] text-[#70757a]">{review.meta}</p>
            </div>
          </div>
          {review.isVerified ? (
            <ShieldCheck className="h-5 w-5 shrink-0 text-blue-600" />
          ) : (
            <GoogleLogo className="h-4 w-4 shrink-0 opacity-80" />
          )}
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <StarRow count={review.rating} size="sm" />
          <span className="text-[10px] text-[#70757a]">{review.time}</span>
          {review.isVerified && (
            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-blue-600">
              <ShieldCheck className="h-3 w-3" />
              Verified
            </span>
          )}
          {review.isNew && (
            <span className="rounded bg-[#e8f0fe] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#1967d2] animate-pulse">
              New
            </span>
          )}
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden bg-white p-2">
        {review.image ? (
          <img
            src={review.image}
            alt={review.isVerified ? `Patient review by ${review.name}` : `Google review by ${review.name}`}
            loading="lazy"
            className={`h-auto w-full rounded-xl object-cover object-top transition-transform duration-500 ${
              isActive ? 'scale-100' : 'scale-[1.02] group-hover:scale-105'
            }`}
          />
        ) : (
          <div className={`relative flex min-h-[180px] flex-col justify-between rounded-xl bg-gradient-to-br ${review.accent} p-4 text-white sm:min-h-[200px]`}>
            <Quote className="h-8 w-8 text-white/30" />
            <p className="text-[12px] leading-relaxed text-white/95 sm:text-[13px]">
              &ldquo;{review.excerpt}&rdquo;
            </p>
            <p className="text-[10px] font-semibold text-white/75">— {review.name}</p>
            {review.featured && (
              <span className="absolute right-3 top-3 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide">
                Top Review
              </span>
            )}
          </div>
        )}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onExpand() }}
          className={`absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-[#102a5e]/90 px-3 py-1.5 text-[10px] font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-blue-700 ${
            isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
          }`}
        >
          <Maximize2 className="h-3 w-3" />
          Read Full
        </button>
      </div>

      <div className="border-t border-gray-50 px-4 py-3">
        <p className="line-clamp-2 text-[11px] leading-relaxed text-[#5f6368] sm:text-xs">
          &ldquo;{review.excerpt}&rdquo;
        </p>
        {review.hasOwnerReply && (
          <p className="mt-2 flex items-center gap-1 text-[10px] font-medium text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Owner responded
          </p>
        )}
      </div>
    </article>
  )
}

export default function GoogleReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [modalReview, setModalReview] = useState(null)
  const [progress, setProgress] = useState(0)
  const [activeTopic, setActiveTopic] = useState(null)
  const trackRef = useRef(null)
  const progressRef = useRef(null)

  const filteredReviews = activeTopic
    ? GOOGLE_REVIEWS.filter((review) =>
        review.tags?.some((tag) => tag.toLowerCase().includes(activeTopic.toLowerCase().split(' ')[0]))
        || review.fullText.toLowerCase().includes(activeTopic.toLowerCase())
        || review.excerpt.toLowerCase().includes(activeTopic.toLowerCase()),
      )
    : GOOGLE_REVIEWS

  const total = filteredReviews.length
  const activeReview = filteredReviews[activeIndex] ?? filteredReviews[0]

  const goTo = useCallback((index) => {
    if (!total) return
    setActiveIndex((index + total) % total)
    setProgress(0)
  }, [total])

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  useEffect(() => {
    setActiveIndex(0)
    setProgress(0)
  }, [activeTopic])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return undefined
    const card = el.children[activeIndex]
    if (!card) return undefined
    const left = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2
    el.scrollTo({ left, behavior: 'smooth' })
    return undefined
  }, [activeIndex])

  useEffect(() => {
    if (isPaused || modalReview) return undefined
    progressRef.current = Date.now()
    const tick = setInterval(() => {
      const elapsed = Date.now() - progressRef.current
      setProgress(Math.min((elapsed / AUTOPLAY_MS) * 100, 100))
      if (elapsed >= AUTOPLAY_MS) {
        goNext()
        progressRef.current = Date.now()
        setProgress(0)
      }
    }, 50)
    return () => clearInterval(tick)
  }, [isPaused, modalReview, activeIndex, goNext])

  return (
    <>
      <section className="relative w-full overflow-hidden py-8 sm:py-10 lg:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.06),transparent_50%)]" />
        <div className={`${PAGE_MAX} relative`}>
          <div className="mb-6 grid gap-5 lg:mb-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                <GoogleLogo />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f6368]">
                  {GOOGLE_REVIEWS_SUMMARY.label}
                </span>
                <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-medium text-emerald-600">Live</span>
              </div>
              <h2 className="font-serif-display text-2xl font-bold text-[#102a5e] sm:text-3xl lg:text-[2.15rem]">
                Loved by Families Across Tricity
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500">
                Swipe through real Google reviews — tap any card to spotlight it or open the full review.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-5 py-4 shadow-[0_8px_32px_rgba(16,42,94,0.1)] backdrop-blur-md">
              <div className="text-center">
                <p className="text-3xl font-bold leading-none text-[#102a5e]">{GOOGLE_REVIEWS_SUMMARY.rating}</p>
                <StarRow animated />
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <p className="text-sm font-bold text-[#102a5e]">{GOOGLE_REVIEWS_SUMMARY.totalReviews}</p>
                <p className="text-[11px] text-gray-500">Patient reviews</p>
              </div>
            </div>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTopic(null)}
              className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all sm:text-xs ${
                !activeTopic
                  ? 'border-blue-300 bg-blue-600 text-white shadow-sm'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:text-blue-700'
              }`}
            >
              All Reviews
            </button>
            {GOOGLE_REVIEW_TOPICS.map((topic) => (
              <button
                key={topic.label}
                type="button"
                onClick={() => setActiveTopic(activeTopic === topic.label ? null : topic.label)}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all sm:text-xs ${
                  activeTopic === topic.label
                    ? 'border-blue-300 bg-blue-600 text-white shadow-sm'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:text-blue-700'
                }`}
              >
                {topic.label}
                <span className="ml-1 opacity-70">({topic.count})</span>
              </button>
            ))}
          </div>

          {activeReview && (
          <div
            key={activeReview.id}
            className="mb-5 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-[#102a5e] to-[#1e40af] px-5 py-4 shadow-lg animate-[fadeIn_0.4s_ease-out] sm:px-6 sm:py-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3 min-w-0">
                <Quote className="mt-0.5 h-6 w-6 shrink-0 text-blue-300" />
                <div className="min-w-0">
                  <p className="text-sm leading-relaxed text-white/90 sm:text-[15px]">
                    &ldquo;{activeReview.excerpt}&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-semibold text-blue-200">
                    — {activeReview.name}
                    {activeReview.isNew && (
                      <span className="ml-2 rounded bg-white/15 px-2 py-0.5 text-[10px] uppercase">New</span>
                    )}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalReview(activeReview)}
                className="shrink-0 self-start rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/25 sm:self-center"
              >
                View Full Review
              </button>
            </div>
          </div>
          )}

          {/* Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#f8fafe] to-transparent sm:w-12" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#f8fafe] to-transparent sm:w-12" />

            <div
              ref={trackRef}
              className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 pt-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-8"
            >
              {filteredReviews.map((review, index) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  isActive={index === activeIndex}
                  onSelect={() => goTo(index)}
                  onExpand={() => setModalReview(review)}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#102a5e] shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 active:scale-95"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsPaused((p) => !p)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#102a5e] shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 active:scale-95"
                  aria-label={isPaused ? 'Play autoplay' : 'Pause autoplay'}
                >
                  {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#102a5e] shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 active:scale-95"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                {filteredReviews.map((review, index) => (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => goTo(index)}
                    className="group relative flex flex-col items-center gap-1"
                    aria-label={`Go to review by ${review.name}`}
                  >
                    <span
                      className={`block h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? 'w-8 bg-blue-600'
                          : 'w-2 bg-gray-300 group-hover:bg-gray-400'
                      }`}
                    />
                    {index === activeIndex && !isPaused && !modalReview && (
                      <span
                        className="absolute -bottom-3 left-0 h-0.5 rounded-full bg-blue-400 transition-all duration-75"
                        style={{ width: `${progress}%`, maxWidth: '2rem' }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <p className="text-xs font-medium text-gray-400">
                {activeIndex + 1} / {total}
              </p>
            </div>
          </div>

          {/* Thumbnail strip — quick jump */}
          <div className="mt-6 hidden gap-3 lg:flex">
            {GOOGLE_REVIEWS.slice(0, 6).map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => {
                  setActiveTopic(null)
                  const idx = GOOGLE_REVIEWS.findIndex((r) => r.id === review.id)
                  goTo(idx >= 0 ? idx : index)
                }}
                className={`flex flex-1 items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-300 ${
                  activeReview?.id === review.id
                    ? 'border-blue-300 bg-white shadow-md ring-2 ring-blue-200/50'
                    : 'border-gray-100 bg-white/60 hover:border-gray-200 hover:bg-white'
                }`}
              >
                <Avatar name={review.name} accent={review.accent} active={activeReview?.id === review.id} />
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-[#102a5e]">{review.name}</p>
                  <StarRow count={review.rating} size="sm" />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-xs text-gray-500 sm:text-left sm:text-sm">
              Verified Google reviews from real patients at Family Cure Clinic, Aerocity Mohali.
            </p>
            <a
              href={CLINIC_GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs font-semibold text-[#102a5e] shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md sm:text-sm"
            >
              Read All Reviews on Google
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-blue-100 bg-[linear-gradient(135deg,#f0f7ff_0%,#ffffff_55%,#fdf2f8_100%)] px-5 py-5 shadow-[0_8px_30px_rgba(37,99,235,0.08)] sm:px-8 sm:py-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-bold text-[#102a5e] sm:text-base">
                  Join thousands of happy families who trust us
                </p>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Book an appointment with Dr. Gurvinder, Dr. Pooja or Dr. Bikram today.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white shadow-[0_6px_18px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_10px_28px_rgba(37,99,235,0.35)] sm:text-sm"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {modalReview && (
        <ReviewModal review={modalReview} onClose={() => setModalReview(null)} />
      )}

      <style>{`
        @keyframes pop {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
