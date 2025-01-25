"use client"

import type React from "react"
import { motion } from "framer-motion"

interface Track {
  id: number
  title: string
  artist: string
  coverUrl: string
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Black'!Antique",
    artist: "2zm00",
    coverUrl: "/images/track1.jpg",
  },
  {
    id: 2,
    title: "Deep Thoughts",
    artist: "leezmo",
    coverUrl: "/images/track2.jpg",
  },
  {
    id: 3,
    title: "Synth-",
    artist: "Jeongmo",
    coverUrl: "/images/track3.jpg",
  },
  {
    id: 4,
    title: "all musics and artists",
    artist: "2zm00",
    coverUrl: "/images/track4.jpg",
  },
  {
    id: 5,
    title: "ARE",
    artist: "leezmo",
    coverUrl: "/images/track5.jpg",
  },
  {
    id: 6,
    title: "all me",
    artist: "Jeongmo",
    coverUrl: "/images/track6.jpg",
  },
]

const PlaylistGrid: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center neon-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Tracks
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <motion.div
              key={track.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={track.coverUrl || "/placeholder.svg"} alt={track.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{track.title}</h3>
                <p className="text-gray-400">{track.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlaylistGrid

