import { motion } from 'framer-motion'

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none css-3d-scene z-0">
      {/* Top Left Cube */}
      <motion.div
        className="absolute top-[20%] left-[15%] w-16 h-16 md:w-24 md:h-24 opacity-60"
        animate={{
          y: [-20, 20, -20],
          rotateX: [0, 180, 360],
          rotateY: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="css-cube">
          <div className="css-cube-face face-front"></div>
          <div className="css-cube-face face-back"></div>
          <div className="css-cube-face face-right"></div>
          <div className="css-cube-face face-left"></div>
          <div className="css-cube-face face-top"></div>
          <div className="css-cube-face face-bottom"></div>
        </div>
      </motion.div>

      {/* Bottom Right Cube */}
      <motion.div
        className="absolute bottom-[20%] right-[15%] w-12 h-12 md:w-20 md:h-20 opacity-40"
        animate={{
          y: [20, -20, 20],
          rotateX: [360, 180, 0],
          rotateY: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="css-cube" style={{ borderColor: 'rgba(168, 85, 247, 0.4)' }}>
          <div className="css-cube-face face-front" style={{ borderColor: 'rgba(168, 85, 247, 0.4)', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(0, 255, 213, 0.1))' }}></div>
          <div className="css-cube-face face-back" style={{ borderColor: 'rgba(168, 85, 247, 0.4)', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(0, 255, 213, 0.1))' }}></div>
          <div className="css-cube-face face-right" style={{ borderColor: 'rgba(168, 85, 247, 0.4)', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(0, 255, 213, 0.1))' }}></div>
          <div className="css-cube-face face-left" style={{ borderColor: 'rgba(168, 85, 247, 0.4)', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(0, 255, 213, 0.1))' }}></div>
          <div className="css-cube-face face-top" style={{ borderColor: 'rgba(168, 85, 247, 0.4)', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(0, 255, 213, 0.1))' }}></div>
          <div className="css-cube-face face-bottom" style={{ borderColor: 'rgba(168, 85, 247, 0.4)', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(0, 255, 213, 0.1))' }}></div>
        </div>
      </motion.div>
      
      {/* Center Left Glowing Orb */}
      <div className="glowing-orb w-64 h-64 bg-neon-blue top-[40%] left-[-10%] opacity-20 mix-blend-screen"></div>
      
      {/* Top Right Glowing Orb */}
      <div className="glowing-orb w-80 h-80 bg-neon-purple top-[-10%] right-[-10%] opacity-20 mix-blend-screen" style={{ animationDelay: '2s' }}></div>
      
      {/* Bottom Center Glowing Orb */}
      <div className="glowing-orb w-72 h-72 bg-neon-cyan bottom-[-10%] left-[30%] opacity-15 mix-blend-screen" style={{ animationDelay: '4s' }}></div>
    </div>
  )
}
