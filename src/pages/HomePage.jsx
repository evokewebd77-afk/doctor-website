import HeroSection from '../components/HeroSection'
import TrustBanner from '../components/TrustBanner'
import StatsBar from '../components/StatsBar'
import SpecialitiesSection from '../components/SpecialitiesSection'
import AdditionalServicesSection from '../components/AdditionalServicesSection'
import DoctorsSection from '../components/DoctorsSection'
import AchievementsWallSection from '../components/AchievementsWallSection'
import GoogleReviewsSection from '../components/GoogleReviewsSection'
import TechnologyAppointmentSection from '../components/TechnologyAppointmentSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBanner />
      <StatsBar />
      <SpecialitiesSection />
      <AdditionalServicesSection />
      <DoctorsSection />
      <AchievementsWallSection />
      <GoogleReviewsSection />
      <TechnologyAppointmentSection />
    </>
  )
}
