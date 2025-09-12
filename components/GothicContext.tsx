'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

type GothicContextType = {
  gothicMode: 'modern' | 'gothic' | 'hybrid'
  setGothicMode: (mode: 'modern' | 'gothic' | 'hybrid') => void
}

const GothicContext = createContext<GothicContextType | undefined>(undefined)

export const GothicProvider = ({ children }: { children: ReactNode }) => {
  const [gothicMode, setGothicMode] = useState<'modern' | 'gothic' | 'hybrid'>('hybrid')

  return (
    <GothicContext.Provider value={{ gothicMode, setGothicMode }}>
      {children}
    </GothicContext.Provider>
  )
}

export const useGothic = () => {
  const ctx = useContext(GothicContext)
  if (!ctx) throw new Error('useGothic must be used within GothicProvider')
  return ctx
}
