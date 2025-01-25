"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeroSection from "@/src/app/components/HeroSection"
import PlaylistGrid from "@/src/app/components/PlaylistGrid"
import MusicPlayer from "@/src/app/components/MusicPlayer"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl font-bold glitch"
              data-text="Jeongmo.dev"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              Jeongmo.dev
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <HeroSection />
      <PlaylistGrid />
      <MusicPlayer />
    </main>
  )
}

