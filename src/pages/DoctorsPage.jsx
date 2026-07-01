import DoctorsHero from '../components/doctors/DoctorsHero'
import DoctorsGrid from '../components/doctors/DoctorsGrid'
import DoctorsWhyChoose from '../components/doctors/DoctorsWhyChoose'
import DoctorsCTA from '../components/doctors/DoctorsCTA'
import DoctorsContactStrip from '../components/doctors/DoctorsContactStrip'

export default function DoctorsPage() {
  return (
    <>
      <DoctorsHero />
      <DoctorsGrid />
      <DoctorsWhyChoose />
      <DoctorsCTA />
      <DoctorsContactStrip />
    </>
  )
}
