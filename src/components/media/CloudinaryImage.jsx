import { hdImage } from '../../utils/cloudinaryMedia'

const VARIANT_MAP = {
  hero: 'imageHero',
  card: 'imageCard',
  portrait: 'imagePortrait',
}

export default function CloudinaryImage({
  src,
  alt = '',
  variant = 'card',
  className = '',
  loading,
  ...props
}) {
  const optimized = hdImage(src, VARIANT_MAP[variant] ?? VARIANT_MAP.card)

  return (
    <img
      src={optimized}
      alt={alt}
      loading={loading ?? (variant === 'hero' ? 'eager' : 'lazy')}
      decoding="async"
      fetchPriority={variant === 'hero' ? 'high' : undefined}
      className={`media-hd ${className}`}
      {...props}
    />
  )
}
