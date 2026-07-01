import { useState } from 'react'

const SIZES = {
  xs: 'w-7 h-7',
  sm: 'w-9 h-9 sm:w-10 sm:h-10',
  md: 'w-11 h-11 sm:w-12 sm:h-12',
  lg: 'w-14 h-14 sm:w-16 sm:h-16',
  xl: 'w-20 h-20 sm:w-24 sm:h-24',
}

const FALLBACK =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" rx="12" fill="%23e8f1fd"/%3E%3Ctext x="24" y="28" text-anchor="middle" font-size="18"%3E🏥%3C/text%3E%3C/svg%3E'

export default function RealisticIcon({ src, alt = '', size = 'md', className = '' }) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(FALLBACK)}
      className={`${SIZES[size]} object-contain drop-shadow-[0_6px_12px_rgba(16,42,94,0.18)] ${className}`}
      loading="lazy"
      draggable={false}
    />
  )
}

export function IconBadge({ src, alt = '', size = 'sm', bg = 'bg-blue-50', className = '', iconClassName = '' }) {
  const sizeMap = { xs: 'w-8 h-8', sm: 'w-10 h-10 sm:w-11 sm:h-11', md: 'w-12 h-12', lg: 'w-14 h-14' }
  return (
    <div className={`${sizeMap[size]} rounded-full ${bg} border border-blue-100 flex items-center justify-center shrink-0 ${className}`}>
      <RealisticIcon src={src} alt={alt} size={size === 'lg' ? 'md' : 'xs'} className={`drop-shadow-sm ${iconClassName}`} />
    </div>
  )
}
