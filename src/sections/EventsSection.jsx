import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const events = [
  {
    title: 'Hackathon',
    description: '48-hour innovation marathon. Build, pitch, and win.',
    time: 'Day 1-2 • 48 Hours',
    accent: '#00d4ff',
    icon: '⚡',
  },
  {
    title: 'Coding Contest',
    description: 'Algorithmic challenges across multiple difficulty tiers.',
    time: 'Day 1 • 3 Hours',
    accent: '#a855f7',
    icon: '💻',
  },
  {
    title: 'Gaming Arena',
    description: 'Competitive esports tournament with live audience.',
    time: 'Day 2-3 • Live',
    accent: '#00ffd5',
    icon: '🎮',
  },
  {
    title: 'Workshops',
    description: 'Hands-on sessions with industry experts and mentors.',
    time: 'All Days • Multiple',
    accent: '#f472b6',
    icon: '🔧',
  },
]

export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20 mix-blend-screen"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Events"
          subtitle="Compete, learn, and connect in our flagship events"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{
                scale: 1.02,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.3 },
              }}
              style={{ perspective: 1000, transformStyle: "preserve-3d" }}
              className="glass rounded-xl p-6 md:p-8 group cursor-pointer relative overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              {/* Hover accent glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${event.accent}15, transparent 70%)`,
                }}
              />

              <div className="relative z-10 transform-gpu group-hover:translate-z-4 transition-transform duration-300">
                {/* Top row: Icon + Time badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{event.icon}</span>
                  <span
                    className="text-xs font-display tracking-wider px-3 py-1 rounded-full border shadow-[0_0_10px_currentColor]"
                    style={{
                      color: event.accent,
                      borderColor: `${event.accent}50`,
                      backgroundColor: `${event.accent}10`,
                    }}
                  >
                    {event.time}
                  </span>
                </div>

                <h3
                  className="font-display text-xl md:text-2xl font-bold mb-2 tracking-wide"
                  style={{ color: event.accent, textShadow: `0 0 10px ${event.accent}40` }}
                >
                  {event.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-body">
                  {event.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${event.accent}, transparent)`,
                    boxShadow: `0 0 8px ${event.accent}`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
