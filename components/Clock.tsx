'use client'

import React, { useState, useEffect } from 'react'

export default function Clock() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rounded-md p-2 gothic-btn text-sm font-mono">
      <span className="text-[#7a003c] dark:text-[#ff4da6]">{time}</span>
    </div>
  )
}
