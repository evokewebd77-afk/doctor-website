import { hdVideoSources } from '../../utils/cloudinaryMedia'

export default function CloudinaryVideo({
  src,
  variant = 'hero',
  className = '',
  fit = 'cover',
  objectPosition = 'center',
  blendMode,
  ...props
}) {
  const variantKey = variant === 'avatar' ? 'videoAvatar' : 'videoHero'
  const sources = hdVideoSources(src, variantKey)

  const fitClass =
    fit === 'contain'
      ? 'object-contain'
      : fit === 'cover'
        ? 'object-cover'
        : 'object-fill'

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={`media-hd bg-transparent ${fitClass} ${className}`}
      style={{ objectPosition, mixBlendMode: blendMode }}
      {...props}
    >
      {sources.map(({ src: sourceSrc, type }) => (
        <source key={type} src={sourceSrc} type={type} />
      ))}
    </video>
  )
}
