"use client"

import type React from "react"
import { motion } from "framer-motion"
import InteractiveScene from "./InteractiveScene"
import RotatingLinesGrid from "./RotatingLinesGrid"

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      <RotatingLinesGrid />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <InteractiveScene />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          className="text-6xl font-bold neon-text glitch"
          data-text="Jeongmo.dev"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Jeongmo.dev
        </motion.h1>
      </div>
    </section>
  )
}

export default HeroSection

