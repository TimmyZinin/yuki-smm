import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Comparison from './components/Comparison'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import Trust from './components/Trust'
import Founder from './components/Founder'
import TelegramCTA from './components/TelegramCTA'
import StickyMobileCTA from './components/StickyMobileCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Features />
      <Comparison />
      <SocialProof />
      <Pricing />
      <Trust />
      <Founder />
      <TelegramCTA />
      <StickyMobileCTA />
      <Footer />
    </div>
  )
}
