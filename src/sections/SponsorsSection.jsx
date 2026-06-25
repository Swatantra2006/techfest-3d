import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const sponsors = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'InnoVate', logo: 'IV' },
  { name: 'FutureSystems', logo: 'FS' },
  { name: 'QuantumBits', logo: 'QB' },
  { name: 'CyberNet', logo: 'CN' },
  { name: 'RoboDynamics', logo: 'RD' },
]

export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="relative py-24 md:py-32 overflow-hidden border-t border-white/5 bg-dark-bg/50"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Sponsors"
          subtitle="Powered by industry leaders"
        />

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-10">
          {/* Gradient Edges for fade effect */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-bg to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-bg to-transparent z-10"></div>

          {/* Marquee Track */}
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Double the list to create seamless loop */}
            {[...sponsors, ...sponsors].map((sponsor, idx) => (
              <div
                key={`${sponsor.name}-${idx}`}
                className="w-48 h-24 glass rounded-xl flex items-center justify-center neon-border grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <div className="font-display font-bold text-2xl tracking-widest text-gray-500 hover:text-neon-cyan transition-colors">
                  {sponsor.logo}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
