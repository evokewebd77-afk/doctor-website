import HomeCareHero from '../components/homecare/HomeCareHero'
import HomeCareServicesGrid from '../components/homecare/HomeCareServicesGrid'
import HomeCareFeaturesBar from '../components/homecare/HomeCareFeaturesBar'
import HomeCareHowItWorks from '../components/homecare/HomeCareHowItWorks'
import HomeCareCTA from '../components/homecare/HomeCareCTA'

export default function HomeCarePage() {
  return (
    <>
      <HomeCareHero />
      <HomeCareServicesGrid />
      <HomeCareFeaturesBar />
      <HomeCareHowItWorks />
      <HomeCareCTA />
    </>
  )
}
