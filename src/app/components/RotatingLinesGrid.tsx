"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const RotatingLinesGrid: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const gridSize = 20
  const lineWidth = 25
  const lineHeight = 2

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calculateRotationAndColor = (lineX: number, lineY: number) => {
    const dx = mousePosition.x - lineX
    const dy = mousePosition.y - lineY
    const angle = Math.atan2(dy, dx) * (180 / Math.PI)
    const distance = Math.sqrt(dx * dx + dy * dy)
    return { angle, distance }
  }

  const getColor = (distance: number) => {
    const maxDistance = Math.sqrt(dimensions.width ** 2 + dimensions.height ** 2)
    const intensity = Math.max(0, 1 - distance / (maxDistance * 0.3))
    const color = Math.round(60 + 215 * intensity)
    return `rgb(${color}, ${color}, ${color})`
  }

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {dimensions.width > 0 && dimensions.height > 0 && Array.from({ length: gridSize * gridSize }).map((_, index) => {
        const row = Math.floor(index / gridSize)
        const col = index % gridSize
        const lineX = (col / gridSize) * dimensions.width
        const lineY = (row / gridSize) * dimensions.height
        const { angle, distance } = calculateRotationAndColor(lineX, lineY)

        return (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              left: `${(col / gridSize) * 100}%`,
              top: `${(row / gridSize) * 100}%`,
              width: `${lineWidth}px`,
              height: `${lineHeight}px`,
              backgroundColor: getColor(distance),
              transformOrigin: "center",
            }}
            animate={{
              rotate: angle,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          />
        )
      })}
    </motion.div>
  )
}

export default RotatingLinesGrid
