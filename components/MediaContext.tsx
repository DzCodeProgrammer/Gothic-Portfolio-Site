'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type MediaType = 'song' | 'video'

interface MediaContextType {
  selectedSong: number
  selectedVideo: number
  setSelectedSong: (song: number) => void
  setSelectedVideo: (video: number) => void
  isMediaSelectorOpen: boolean
  setIsMediaSelectorOpen: (open: boolean) => void
  isMuted: boolean
  toggleMute: () => void
}

const MediaContext = createContext<MediaContextType | undefined>(undefined)

export const useMedia = () => {
  const context = useContext(MediaContext)
  if (context === undefined) {
    throw new Error('useMedia must be used within a MediaProvider')
  }
  return context
}

interface MediaProviderProps {
  children: ReactNode
}

export const MediaProvider: React.FC<MediaProviderProps> = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState(0)
  const [isMediaSelectorOpen, setIsMediaSelectorOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const savedSong = localStorage.getItem('selectedSong')
    const savedVideo = localStorage.getItem('selectedVideo')
    const savedIsMuted = localStorage.getItem('isMuted')

    if (savedSong) setSelectedSong(Number(savedSong))
    if (savedVideo) setSelectedVideo(Number(savedVideo))
    if (savedIsMuted !== null) setIsMuted(savedIsMuted === 'true')
  }, [])

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem('selectedSong', selectedSong.toString())
  }, [selectedSong])

  useEffect(() => {
    localStorage.setItem('selectedVideo', selectedVideo.toString())
  }, [selectedVideo])

  useEffect(() => {
    localStorage.setItem('isMuted', isMuted.toString())
  }, [isMuted])

  const toggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  const value = {
    selectedSong,
    selectedVideo,
    setSelectedSong,
    setSelectedVideo,
    isMediaSelectorOpen,
    setIsMediaSelectorOpen,
    isMuted,
    toggleMute,
  }

  return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
}
