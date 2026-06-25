import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 60%)',
          }}
        />
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-neon-purple rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse-neon"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Techfest"
          subtitle="Where innovation meets imagination"
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 font-body">
              Techfest 2026 is the premier technology festival that brings together the
              brightest minds in innovation, engineering, and design. Experience cutting-edge
              demonstrations, hands-on workshops, and competitions that push the boundaries of
              what&apos;s possible.
            </p>
            <p className="text-gray-400 text-base leading-relaxed font-body">
              From artificial intelligence to quantum computing, from robotics to cybersecurity —
              immerse yourself in the technologies shaping our tomorrow. Join thousands of
              innovators, creators, and visionaries in a festival that celebrates the future.
            </p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: '50+', label: 'Events' },
              { number: '5K+', label: 'Participants' },
              { number: '₹10L', label: 'Prize Pool' },
              { number: '3', label: 'Days' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass rounded-xl p-6 text-center neon-border hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300"
                style={{ perspective: 1000, transformStyle: "preserve-3d" }}
              >
                <div className="font-display text-2xl md:text-3xl font-bold gradient-text mb-1 drop-shadow-md">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-sm font-body tracking-wide uppercase font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
