import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { MouseEvent } from 'react'

export default function GlassCard({ children, className = '', delay = 0, tilt = false }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={tilt ? {
        rotateX: -5,
        rotateY: 5,
        scale: 1.03,
        transition: { duration: 0.3 }
      } : {
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={`relative glass rounded-xl p-6 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] overflow-hidden group ${className}`}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      {/* Dynamic Hover Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 212, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {/* Inner subtle glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-screen"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 transform-gpu transition-transform duration-300 group-hover:translate-z-4">
        {children}
      </div>
    </motion.div>
  )
}
