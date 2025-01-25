"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

const AbstractShape: React.FC<{ mouse: THREE.Vector2 }> = ({ mouse }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.3
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, (mouse.x * viewport.width) / 2, 0.1)
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        (-mouse.y * viewport.height) / 2,
        0.1,
      )
    }
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshStandardMaterial color={0x00ffff} emissive={0x00ffff} emissiveIntensity={0.5} wireframe />
    </mesh>
  )
}

const InteractiveScene: React.FC = () => {
  const [mouse, setMouse] = useState(new THREE.Vector2())

  const handleMouseMove = (event: React.MouseEvent) => {
    setMouse(
      new THREE.Vector2((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1),
    )
  }

  return (
    <div className="w-full h-full" onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AbstractShape mouse={mouse} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}

export default InteractiveScene

