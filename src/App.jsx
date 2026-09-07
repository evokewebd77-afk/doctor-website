import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import LabServicesPage from './pages/LabServicesPage'
import HomeCarePage from './pages/HomeCarePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import DoctorsPage from './pages/DoctorsPage'
import GeneralMedicinePage from './pages/GeneralMedicinePage'
import ObstetricsGynaecologyPage from './pages/ObstetricsGynaecologyPage'
import PediatricsNeonatologyPage from './pages/PediatricsNeonatologyPage'
import Footer from './components/Footer'
import BottomBar from './components/BottomBar'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#f8fafe] font-sans text-gray-800 overflow-x-hidden pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0 w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/lab-services" element={<LabServicesPage />} />
          <Route path="/home-care" element={<HomeCarePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/general-medicine" element={<GeneralMedicinePage />} />
          <Route path="/services/obstetrics-gynaecology" element={<ObstetricsGynaecologyPage />} />
          <Route path="/services/pediatrics-neonatology" element={<PediatricsNeonatologyPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
        </Routes>
        <div className="hidden md:block">
          <Footer />
        </div>
        <BottomBar />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}
