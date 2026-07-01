import { PAGE_MAX } from '../../data/constants'
import ContactForm from './ContactForm'
import ContactInfoPanel from './ContactInfoPanel'

export default function ContactMainSection() {
  return (
    <section className={`${PAGE_MAX} pb-6 sm:pb-8 w-full`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
        <ContactForm />
        <ContactInfoPanel />
      </div>
    </section>
  )
}
