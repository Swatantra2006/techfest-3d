import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'

const domains = [
  {
    title: 'AI & Machine Learning',
    description:
      'Explore neural networks, deep learning, and intelligent systems that are redefining the future of computing.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="12" r="4" stroke="#00d4ff" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="28" r="3" stroke="#00d4ff" strokeWidth="1.5" fill="none" />
        <circle cx="30" cy="28" r="3" stroke="#00d4ff" strokeWidth="1.5" fill="none" />
        <line x1="20" y1="16" x2="12" y2="25" stroke="#00d4ff" strokeWidth="1" opacity="0.6" />
        <line x1="20" y1="16" x2="28" y2="25" stroke="#00d4ff" strokeWidth="1" opacity="0.6" />
        <line x1="13" y1="28" x2="27" y2="28" stroke="#00d4ff" strokeWidth="1" opacity="0.4" />
        <circle cx="20" cy="20" r="18" stroke="#00d4ff" strokeWidth="0.5" opacity="0.15" />
      </svg>
    ),
    accent: '#00d4ff',
  },
  {
    title: 'Robotics',
    description:
      'Build, program, and compete with autonomous machines. From drones to humanoids, the future is mechanical.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="10" width="16" height="14" rx="3" stroke="#a855f7" strokeWidth="1.5" fill="none" />
        <circle cx="17" cy="17" r="2" stroke="#a855f7" strokeWidth="1.5" fill="none" />
        <circle cx="23" cy="17" r="2" stroke="#a855f7" strokeWidth="1.5" fill="none" />
        <line x1="20" y1="24" x2="20" y2="30" stroke="#a855f7" strokeWidth="1.5" />
        <line x1="14" y1="30" x2="26" y2="30" stroke="#a855f7" strokeWidth="1.5" />
        <line x1="8" y1="17" x2="12" y2="17" stroke="#a855f7" strokeWidth="1.5" />
        <line x1="28" y1="17" x2="32" y2="17" stroke="#a855f7" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="18" stroke="#a855f7" strokeWidth="0.5" opacity="0.15" />
      </svg>
    ),
    accent: '#a855f7',
  },
  {
    title: 'Cyber Security',
    description:
      'Master ethical hacking, penetration testing, and digital forensics. Defend the digital frontier.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6 L32 12 L32 22 C32 28 26 34 20 36 C14 34 8 28 8 22 L8 12 L20 6Z" stroke="#00ffd5" strokeWidth="1.5" fill="none" />
        <path d="M16 20 L19 23 L25 17" stroke="#00ffd5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="18" stroke="#00ffd5" strokeWidth="0.5" opacity="0.15" />
      </svg>
    ),
    accent: '#00ffd5',
  },
  {
    title: 'Web Development',
    description:
      'Craft stunning interfaces and powerful backends. Build the web of tomorrow with cutting-edge frameworks.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="24" height="18" rx="2" stroke="#00d4ff" strokeWidth="1.5" fill="none" />
        <line x1="8" y1="16" x2="32" y2="16" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
        <circle cx="12" cy="13" r="1" fill="#ff6b6b" />
        <circle cx="16" cy="13" r="1" fill="#ffd93d" />
        <circle cx="20" cy="13" r="1" fill="#6bff6b" />
        <path d="M15 22 L12 24.5 L15 27" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 22 L28 24.5 L25 27" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="21" y1="21" x2="19" y2="28" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
        <circle cx="20" cy="20" r="18" stroke="#00d4ff" strokeWidth="0.5" opacity="0.15" />
      </svg>
    ),
    accent: '#00d4ff',
  },
]

export default function DomainsSection() {
  return (
    <section
      id="domains"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20 mix-blend-screen"
          style={{
            background:
              'radial-gradient(ellipse at 70% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Domains"
          subtitle="Dive deep into the technologies shaping our world"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <GlassCard key={domain.title} delay={index * 0.1} tilt>
              <div className="mb-4 drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">{domain.icon}</div>
              <h3
                className="font-display text-base md:text-lg font-semibold mb-3 tracking-wide"
                style={{ color: domain.accent, textShadow: `0 0 10px ${domain.accent}40` }}
              >
                {domain.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-body">
                {domain.description}
              </p>
              {/* Accent line */}
              <div
                className="mt-4 h-px w-12 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${domain.accent}, transparent)`,
                  boxShadow: `0 0 10px ${domain.accent}`
                }}
              />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
