import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import DomainsSection from './sections/DomainsSection'
import EventsSection from './sections/EventsSection'
import CountdownSection from './sections/CountdownSection'
import SponsorsSection from './sections/SponsorsSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="relative bg-dark-bg min-h-screen text-white selection:bg-neon-blue/30 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DomainsSection />
        <EventsSection />
        <CountdownSection />
        <SponsorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
