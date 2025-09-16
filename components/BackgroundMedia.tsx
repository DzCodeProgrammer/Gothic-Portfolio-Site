'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useMedia } from './MediaContext'

const songs = ['Songs1.mp3', 'Songs2.mp3']
const bgVideos = ['background1.mp4', 'background2.mp4']

export default function BackgroundMedia() {
  const { selectedSong, selectedVideo, isMuted } = useMedia()
  const audioRefs = useRef<HTMLAudioElement[]>([])
  const videoRefs = useRef<HTMLVideoElement[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])



  useEffect(() => {
    // Play selected video with improved switching logic
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === selectedVideo) {
          video.currentTime = 0
          video.play().catch(() => { })
        } else {
          video.pause()
          video.currentTime = 0
        }
      }
    })
  }, [selectedVideo])

  useEffect(() => {
    // Handle selected song with improved switching logic
    let isMounted = true
    const playAudio = async (audio: HTMLAudioElement) => {
      try {
        if (audio.paused) {
          audio.currentTime = 0
          await audio.play()
        }
      } catch (error) {
        // Handle play error silently
      }
    }
    audioRefs.current.forEach((audio, index) => {
      if (audio && isMounted) {
        audio.muted = isMuted
        if (index === selectedSong) {
          playAudio(audio)
        } else {
          audio.pause()
          audio.currentTime = 0
        }
      }
    })
    return () => {
      isMounted = false
    }
  }, [selectedSong, isMuted])

  return (
    <>
      {/* Background Media */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Remove background image for mobile, show video background or solid black */}
        {bgVideos.map((video, index) => (
          <video
            key={video}
            ref={(el) => {
              if (el) videoRefs.current[index] = el
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === selectedVideo ? 'opacity-100' : 'opacity-0'
              }`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"

            style={{ filter: 'brightness(0.7) contrast(1.05)' }}
          >
            <source src={`/images/${video}`} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60" />
      </div>

      {/* Background Audios */}
      {!isMobile && songs.map((song, index) => (
        <audio
          key={song}
          ref={(el) => {
            if (el) audioRefs.current[index] = el
          }}
          src={`/images/${song}`}
          autoPlay
          loop
          muted={isMuted}
          preload="metadata"
        />
      ))}
    </>
  )
}
