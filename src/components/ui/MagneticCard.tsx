'use client'

import React, { useRef } from 'react'

type MagneticCardProps = {
  children: React.ReactNode
  className?: string
}

export default function MagneticCard({ children, className = '' }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden rounded-xl bg-slate-700 p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-transparent before:absolute before:inset-0 before:rounded-xl before:content-[''] before:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(99,102,241,0.15),transparent_40%)] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
