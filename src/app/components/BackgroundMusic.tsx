"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

const backgroundTracks = ["/audio/track1.mp3", "/audio/track2.mp3", "/audio/track3.mp3", "/audio/track4.mp3", "/audio/track5.mp3", "/audio/track6.mp3", "/audio/track7.mp3", "/audio/track8.mp3", "/audio/track9.mp3",]

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const playNextTrack = () => {
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % backgroundTracks.length)
    }

    audio.addEventListener("ended", playNextTrack)
    audio.volume = 0.1 // Set a lower volume for background music

    // Attempt to play the audio
    const playPromise = audio.play()

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Autoplay started
        })
        .catch((error) => {
          console.log("Autoplay was prevented. Please enable autoplay in your browser settings.")
        })
    }

    return () => {
      audio.removeEventListener("ended", playNextTrack)
    }
  }, [])

  return <audio ref={audioRef} src={backgroundTracks[currentTrackIndex]} loop={false} />
}

export default BackgroundMusic

