import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Comparison from './components/Comparison'
import Founder from './components/Founder'
import Pricing from './components/Pricing'
import Trust from './components/Trust'
import TelegramCTA from './components/TelegramCTA'
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
      <Founder />
      <Pricing />
      <Trust />
      <TelegramCTA />
      <Footer />
    </div>
  )
}
