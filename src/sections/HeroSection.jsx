import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FloatingShapes from '../components/FloatingShapes'

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Generate random particles for a premium ambient effect
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg"
    >
      {/* Animated gradient background and Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50 mix-blend-screen"
          style={{
            background:
              'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(0, 255, 213, 0.1) 0%, transparent 50%)',
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-40 mix-blend-overlay" />
      </div>

      {/* Ambient Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white opacity-20 blur-[1px]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              boxShadow: '0 0 10px 2px rgba(0, 212, 255, 0.5)',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating 3D Shapes */}
      <FloatingShapes />

      {/* Hero Content with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-neon-blue text-xs md:text-sm font-display tracking-[0.3em] mb-6 uppercase drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
          >
            Presents
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.4, type: 'spring', bounce: 0.3 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] leading-none font-black mb-6 tracking-tighter relative"
          >
            {/* Layered text for futuristic 3D/glitch vibe */}
            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan opacity-50 blur-[8px] animate-pulse-neon">
              TECHFEST
            </span>
            <span className="relative z-10 gradient-text drop-shadow-[0_0_25px_rgba(0,212,255,0.4)]">
              TECHFEST
            </span>
            <br />
            <span className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              2026
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-body font-light mb-12 tracking-wide"
          >
            Future Unlocked
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative inline-block"
          >
            {/* Outer glow ring for button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded opacity-30 blur-md animate-pulse"></div>
            <button
              className="cta-button relative bg-dark-bg/80"
              onClick={() =>
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }
              id="cta-explore"
            >
              <span className="relative z-10">Explore Now</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 group-hover:translate-x-1 transition-transform ml-2"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute -bottom-32 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1 backdrop-blur-sm"
          >
            <motion.div className="w-1.5 h-3 bg-neon-cyan rounded-full shadow-[0_0_8px_#00ffd5]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
