"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { FaPause, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion"
import WaveSurfer from "wavesurfer.js"

interface Track {
  id: number
  title: string
  artist: string
  audioUrl: string
}

const tracks: Track[] = [
  {
    id: 1,
    title: "it's all me",
    artist: "2zm00",
    audioUrl: "/audio/track6.mp3",
  },
  {
    id: 2,
    title: "Deep Thoughts",
    artist: "leezmo",
    audioUrl: "/audio/track5.mp3",
  },
  {
    id: 3,
    title: "Synth-",
    artist: "Jeongmo",
    audioUrl: "/audio/track4.mp3",
  },
  {
    id: 4,
    title: "all musics and artists",
    artist: "2zm00",
    audioUrl: "/audio/track7.mp3",
  },
  {
    id: 5,
    title: "ARE",
    artist: "leezmo",
    audioUrl: "/audio/track8.mp3",
  },
  {
    id: 6,
    title: "Black'!Antique",
    artist: "Jeongmo",
    audioUrl: "/audio/track3.mp3",
  },

]

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(tracks[0])
  const [volume, setVolume] = useState(0.5)
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null)
  const waveformRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (waveformRef.current) {
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "violet",
        progressColor: "purple",
        cursorColor: "navy",
        barWidth: 3,
        barRadius: 3,
        cursorWidth: 1,
        height: 80,
        barGap: 3,
      })

      setWavesurfer(ws)

      return () => {
        ws.destroy()
      }
    }
  }, [])

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.load(currentTrack.audioUrl)
      wavesurfer.on("ready", () => {
        wavesurfer.setVolume(volume)
      })
      
      
      return () => {
        wavesurfer.unAll()
      }
    }
  }, [currentTrack, wavesurfer])

  const togglePlay = () => {
    if (wavesurfer) {
      if (isPlaying) {
        wavesurfer.pause()
      } else {
        wavesurfer.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTrackChange = (track: Track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (wavesurfer) {
      wavesurfer.setVolume(newVolume)
    }
  }

  return (
    <motion.div
      className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-2 md:p-4 z-40"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-2 md:gap-4">
        {/* 트랙 정보 및 재생 버튼 */}
        <div className="flex items-center w-full md:w-auto justify-between md:justify-start">
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mr-2 md:mr-4 text-2xl text-cyan-400 hover:text-cyan-300"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </motion.button>
          <div className="truncate">
            <h3 className="text-base md:text-lg font-semibold truncate">{currentTrack.title}</h3>
            <p className="text-xs md:text-sm text-cyan-400 truncate">{currentTrack.artist}</p>
          </div>
        </div>

        {/* Waveform */}
        <div className="flex-1 w-full md:mx-4 h-16 md:h-20" ref={waveformRef}></div>

        {/* 컨트롤 */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 md:w-24"
          />
          <select
            value={currentTrack.id}
            onChange={(e) => {
              const track = tracks.find((t) => t.id === Number(e.target.value))
              if (track) handleTrackChange(track)
            }}
            className="bg-gray-800 text-white p-1 md:p-2 rounded text-sm md:text-base"
          >
            {tracks.map((track) => (
              <option key={track.id} value={track.id}>
                {track.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  )
}

export default MusicPlayer

