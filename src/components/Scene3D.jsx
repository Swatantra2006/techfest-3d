import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import WireframeSphere from './WireframeSphere'

export default function Scene3D({ scrollProgress = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="canvas-container">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{ background: 'transparent' }}
          frameloop="always"
        >
          <Suspense fallback={null}>
            <WireframeSphere scrollProgress={scrollProgress} />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}
