import ServicesHero from '../components/services/ServicesHero'
import MedicalServicesGrid from '../components/services/MedicalServicesGrid'
import ServicesStatsBar from '../components/services/ServicesStatsBar'
import ServicesExtraRow from '../components/services/ServicesExtraRow'
import ServicesDoctors from '../components/services/ServicesDoctors'
import ServicesCTA from '../components/services/ServicesCTA'

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <MedicalServicesGrid />
      <ServicesStatsBar />
      <ServicesExtraRow />
      <ServicesDoctors />
      <ServicesCTA />
    </>
  )
}
