import ContactHero from '../components/contact/ContactHero'
import ContactMainSection from '../components/contact/ContactMainSection'
import ContactMapWhy from '../components/contact/ContactMapWhy'
import ContactQuickHelp from '../components/contact/ContactQuickHelp'
import ContactUrgentCTA from '../components/contact/ContactUrgentCTA'

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="h-24 sm:h-28 lg:h-32" aria-hidden />
      <ContactMainSection />
      <ContactMapWhy />
      <ContactQuickHelp />
      <ContactUrgentCTA />
    </>
  )
}
