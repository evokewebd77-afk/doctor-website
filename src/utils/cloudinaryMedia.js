/** Inject Cloudinary transforms for sharper delivery (images & video). */
export function isCloudinaryUrl(url) {
  return typeof url === 'string' && url.includes('res.cloudinary.com') && url.includes('/upload/')
}

export function cloudinaryUrl(url, transforms) {
  if (!isCloudinaryUrl(url) || !transforms) return url
  if (url.includes(transforms)) return url
  return url.replace('/upload/', `/upload/${transforms}/`)
}

export const TRANSFORMS = {
  imageHero: 'f_auto,q_auto:best,dpr_auto,w_2560',
  imageCard: 'f_auto,q_auto:good,dpr_auto,w_960',
  imagePortrait: 'f_auto,q_auto:best,dpr_auto,w_800',
  videoHero: 'q_auto:best,w_2560,c_limit',
  videoAvatar: 'q_auto:best,vc_auto,w_1080',
}

export function hdImage(url, variant = 'imageHero') {
  return cloudinaryUrl(url, TRANSFORMS[variant] ?? TRANSFORMS.imageHero)
}

export function hdVideo(url, variant = 'videoHero') {
  return cloudinaryUrl(url, TRANSFORMS[variant] ?? TRANSFORMS.videoHero)
}

/** MP4 fallback for webm assets on Cloudinary */
export function hdVideoSources(url, variant = 'videoHero') {
  const primary = hdVideo(url, variant)
  if (!url?.includes('.webm')) {
    return [{ src: primary, type: 'video/mp4' }]
  }
  const mp4 = cloudinaryUrl(url, `${TRANSFORMS[variant] ?? TRANSFORMS.videoHero},f_mp4`)
  return [
    { src: primary, type: 'video/webm' },
    { src: mp4, type: 'video/mp4' },
  ]
}
