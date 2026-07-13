export const HERO_BG =
  'https://res.cloudinary.com/dwnnakrrh/image/upload/v1783141781/ChatGPT_Image_Jul_4_2026_10_38_42_AM_xsxik6.png'

export const HERO_BG_2 =
  'https://res.cloudinary.com/j6lurplk/image/upload/v1783399180/6f6555e0-521c-496b-9534-82d2f7fbf7f4_unz9ot.png'

export const HERO_BG_3 =
  'https://res.cloudinary.com/j6lurplk/image/upload/v1783399636/ChatGPT_Image_Jul_7_2026_10_16_50_AM_cjvwn9.png'

export const HERO_SLIDES = [HERO_BG, HERO_BG_2, HERO_BG_3]

/** Per-slide image fit — slide 3 is a wide banner; avoid cropping the top */
export const HERO_SLIDE_IMAGE_OPTS = [
  { desktop: 'object-cover object-[75%_center] lg:object-right', mobile: 'object-cover object-right', mobileAspect: 'aspect-[4/3] sm:aspect-[16/11]' },
  { desktop: 'object-cover object-[75%_center] lg:object-right', mobile: 'object-cover object-right', mobileAspect: 'aspect-[4/3] sm:aspect-[16/11]' },
  { desktop: 'object-cover object-[right_top] lg:object-right', mobile: 'object-cover object-right scale-[1.45] sm:scale-[1.3] origin-right', mobileAspect: 'aspect-[4/3] sm:aspect-[16/11]' },
]

export const FAMILY_IMG =
  'https://res.cloudinary.com/dwnnakrrh/image/upload/v1782796577/ChatGPT_Image_Jun_30_2026_10_45_56_AM_phjdyh.png'

export const HERO_IMAGE =
  'https://res.cloudinary.com/dwnnakrrh/image/upload/e_trim/v1782851429/ChatGPT_Image_Jul_1__2026__01_59_05_AM-removebg-preview_slmq4p.png'

export const HERO_VIDEO =
  'https://res.cloudinary.com/dwnnakrrh/video/upload/v1782850900/Untitled_1220_x_1180_px_1220_x_1180_px_1520_x_1080_px_2_fzm9na.mp4'

export const DOCTOR_IMG =
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&h=800&q=80'

export const NAV_LINKS = [
  'HOME',
  'ABOUT US',
  'SERVICES',
  'DOCTORS',
  'LAB SERVICES',
  'HOME CARE',
  'CONTACT',
]

export const NAV_ROUTES = {
  HOME: '/',
  'ABOUT US': '/about',
  SERVICES: '/services',
  DOCTORS: '/doctors',
  'LAB SERVICES': '/lab-services',
  'HOME CARE': '/home-care',
  CONTACT: '/contact',
}

export const FOOTER_QUICK_LINK_ROUTES = {
  Home: '/',
  'About Us': '/about',
  Services: '/services',
  Doctors: '/doctors',
  'Lab Services': '/lab-services',
  'Home Care': '/home-care',
  'Contact Us': '/contact',
}

export const PAGE_MAX =
  'w-full max-w-[min(100%,1320px)] xl:max-w-[min(100%,1480px)] 2xl:max-w-[min(100%,1680px)] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16'

export const CLINIC_PHONE = '+919988827699'
export const CLINIC_PHONE_DISPLAY = '99888-27699'
export const CLINIC_PHONE_DISPLAY_FULL = 'M: 99888-27699'
export const CLINIC_WHATSAPP = '919988827699'
export const CLINIC_ADDRESS_LINE1 = 'Aeroview Showroom, SCO 11, Near Tech Town'
export const CLINIC_ADDRESS_LINE2 = 'I-Block Aerocity, Mohali'
export const CLINIC_ADDRESS = `${CLINIC_ADDRESS_LINE1}, ${CLINIC_ADDRESS_LINE2}`
export const CLINIC_FACILITIES = 'ECG, Nebulizer. Diagnostic LAB & Day Care Facility'
export const CLINIC_MAPS_URL = `https://www.google.com/maps/place/Family+cure+clinic/@30.6291189,76.7820431,17z/data=!4m8!3m7!1s0x390feb6615e82cb1:0xf73b87b7b9670a70!8m2!3d30.6291189!4d76.7820431!16s%2Fg%2F11pzr0h60w`

export const CLINIC_GOOGLE_REVIEWS_URL = `https://www.google.com/maps/place/Family+cure+clinic/@30.6291189,76.7820431,17z/data=!4m8!3m7!1s0x390feb6615e82cb1:0xf73b87b7b9670a70!8m2!3d30.6291189!4d76.7820431!9m1!1b1!16s%2Fg%2F11pzr0h60w`
export const CLINIC_WHATSAPP_URL = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent('Hello Family Cure Clinic, I would like to book an appointment.')}`
export const CLINIC_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(CLINIC_ADDRESS)}&z=15&output=embed`

export const CLINIC_EMAIL = 'info@familycureclinic.com'
export const CLINIC_LOGO = '/logo.png'
