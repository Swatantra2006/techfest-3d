import { motion } from 'framer-motion'
import useCountdown from '../hooks/useCountdown'
import GlassCard from '../components/GlassCard'

// Set the target date to a future event date
const TARGET_DATE = '2026-10-15T09:00:00'

export default function CountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE)

  const timeUnits = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ]

  return (
    <section
      id="countdown"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)',
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-neon-blue text-xs md:text-sm font-display tracking-[0.3em] mb-4 uppercase">
            Mark Your Calendar
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">
            The Future Begins In
          </h2>
          <div className="section-divider mt-4 mb-12" />
        </motion.div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto">
          {timeUnits.map((unit, index) => (
            <GlassCard
              key={unit.label}
              delay={index * 0.1}
              tilt={true}
              className="text-center group"
            >
              <div className="relative z-10">
                <div className="countdown-digit text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-2 group-hover:scale-110 transition-transform duration-300 transform-gpu origin-bottom">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm font-display tracking-[0.2em] uppercase group-hover:text-neon-cyan transition-colors duration-300">
                  {unit.label}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Event date */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-gray-400 text-sm font-body tracking-wide"
        >
          October 15–17, 2026
        </motion.p>
      </div>
    </section>
  )
}
