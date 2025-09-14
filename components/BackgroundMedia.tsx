'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useMedia } from './MediaContext'

const songs = ['Songs1.mp3', 'Songs2.mp3']
const bgVideos = ['background1.mp4', 'background2.mp4']

export default function BackgroundMedia() {
  const { selectedSong, selectedVideo, isPlaying } = useMedia()
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
    // Play selected video
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === selectedVideo) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      }
    })
  }, [selectedVideo])

  useEffect(() => {
    // Play selected song
    requestAnimationFrame(() => {
      audioRefs.current.forEach((audio, index) => {
        if (audio) {
          if (index === selectedSong) {
            if (isPlaying) {
              audio.play().catch(() => {})
            } else {
              audio.pause()
            }
          } else {
            audio.pause()
          }
        }
      })
    })
  }, [selectedSong, isPlaying])

  return (
    <>
      {/* Background Media */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {isMobile ? (
          <img
            src="/images/Hasil.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.7) contrast(1.05)' }}
          />
        ) : (
          bgVideos.map((video, index) => (
            <video
              key={video}
              ref={(el) => {
                if (el) videoRefs.current[index] = el
              }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === selectedVideo ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/Hasil.png"
              style={{ filter: 'brightness(0.7) contrast(1.05)' }}
            >
              <source src={`/images/${video}`} type="video/mp4" />
            </video>
          ))
        )}
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
          loop
          preload="auto"
        />
      ))}
    </>
  )
}
