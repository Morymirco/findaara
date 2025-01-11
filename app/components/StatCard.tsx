'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatCard({ value, suffix = '', label, duration = 2 }: StatCardProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = value / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start > value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16.67) // ~60fps

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="bg-red-900 p-8 rounded-xl text-center"
    >
      <div className="text-4xl font-bold text-yellow-500 mb-2">
        {count}{suffix}
      </div>
      <p className="text-yellow-100">{label}</p>
    </motion.div>
  )
} 