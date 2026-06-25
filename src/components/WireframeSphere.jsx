import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

export default function WireframeSphere({ scrollProgress = 0 }) {
  const meshRef = useRef()
  const pointsRef = useRef()

  // Create a subtle particle ring around the sphere
  const particlePositions = useMemo(() => {
    const count = 80
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const radius = 2.2 + Math.random() * 0.3
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1.5
      positions[i * 3 + 2] = Math.sin(angle) * radius
    }
    return positions
  }, [])

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (meshRef.current) {
      // Gentle auto-rotation + scroll-driven rotation
      meshRef.current.rotation.y = time * 0.15 + scrollProgress * Math.PI * 2
      meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.15 + scrollProgress * 0.5
      meshRef.current.rotation.z = Math.cos(time * 0.08) * 0.05
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = -time * 0.08
      pointsRef.current.rotation.x = Math.sin(time * 0.05) * 0.1
    }
  })

  return (
    <group>
      {/* Main wireframe sphere */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 2]} />
        <meshBasicMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner glow sphere */}
      <mesh>
        <icosahedronGeometry args={[1.55, 2]} />
        <meshBasicMaterial
          color="#a855f7"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Orbital particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00ffd5"
          size={0.025}
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  )
}
