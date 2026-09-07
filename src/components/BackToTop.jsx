import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-20 right-4 sm:right-6 md:bottom-8 md:right-8 z-50 group flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-tr from-[#0b1f45] to-[#2563eb] text-white shadow-[0_6px_25px_rgba(11,31,69,0.35)] ring-2 ring-white/90 backdrop-blur-xs transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_30px_rgba(37,99,235,0.45)] active:scale-95 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none'
      }`}
    >
      <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={2.5} />
    </button>
  )
}
