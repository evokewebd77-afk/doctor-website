import { PAGE_MAX } from '../../data/constants'
import ContactForm from './ContactForm'
import ContactInfoPanel from './ContactInfoPanel'

export default function ContactMainSection() {
  return (
    <section id="contact-form" className={`${PAGE_MAX} pb-6 sm:pb-8 w-full scroll-mt-24`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
        <ContactForm />
        <ContactInfoPanel />
      </div>
    </section>
  )
}
