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
  isPlaying: boolean
  togglePlay: () => void
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
  const [isPlaying, setIsPlaying] = useState(true)

  // Load from localStorage on mount
  useEffect(() => {
    const savedSong = localStorage.getItem('selectedSong')
    const savedVideo = localStorage.getItem('selectedVideo')
    const savedIsPlaying = localStorage.getItem('isPlaying')

    if (savedSong) setSelectedSong(Number(savedSong))
    if (savedVideo) setSelectedVideo(Number(savedVideo))
    if (savedIsPlaying) setIsPlaying(savedIsPlaying === 'true')
  }, [])

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem('selectedSong', selectedSong.toString())
  }, [selectedSong])

  useEffect(() => {
    localStorage.setItem('selectedVideo', selectedVideo.toString())
  }, [selectedVideo])

  useEffect(() => {
    localStorage.setItem('isPlaying', isPlaying.toString())
  }, [isPlaying])

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  const value = {
    selectedSong,
    selectedVideo,
    setSelectedSong,
    setSelectedVideo,
    isMediaSelectorOpen,
    setIsMediaSelectorOpen,
    isPlaying,
    togglePlay,
  }

  return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
}
