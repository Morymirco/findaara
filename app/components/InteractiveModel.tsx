'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface InteractiveModelProps {
  images: {
    front: string;
    side: string;
    perspective: string;
  };
  title: string;
}

export default function InteractiveModel({ images, title }: InteractiveModelProps) {
  const [currentView, setCurrentView] = useState<'front' | 'side' | 'perspective'>('front')

  return (
    <div className="relative bg-red-900/30 rounded-xl p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[300px] w-full"
      >
        <Image
          src={images[currentView]}
          alt={`${title} - ${currentView} view`}
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => setCurrentView('front')}
          className={`px-4 py-2 rounded-full ${
            currentView === 'front' 
              ? 'bg-yellow-500 text-black' 
              : 'bg-red-900 text-yellow-500'
          }`}
        >
          Face
        </button>
        <button
          onClick={() => setCurrentView('side')}
          className={`px-4 py-2 rounded-full ${
            currentView === 'side' 
              ? 'bg-yellow-500 text-black' 
              : 'bg-red-900 text-yellow-500'
          }`}
        >
          Côté
        </button>
        <button
          onClick={() => setCurrentView('perspective')}
          className={`px-4 py-2 rounded-full ${
            currentView === 'perspective' 
              ? 'bg-yellow-500 text-black' 
              : 'bg-red-900 text-yellow-500'
          }`}
        >
          3D
        </button>
      </div>

      <div className="text-center mt-4">
        <h4 className="text-xl font-bold text-yellow-500">{title}</h4>
      </div>
    </div>
  )
} 