'use client'

import { motion } from 'framer-motion'

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-600" />
      
      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
          >
            {/* Contenu */}
            <div className="w-1/2 p-4">
              <div className={`bg-red-900 p-6 rounded-xl ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                <span className="text-yellow-500 font-bold text-xl mb-2 block">
                  {event.year}
                </span>
                <h3 className="text-yellow-500 font-bold mb-2">{event.title}</h3>
                <p className="text-yellow-100">{event.description}</p>
              </div>
            </div>
            
            {/* Point central */}
            <div className="w-4 h-4 bg-yellow-500 rounded-full absolute left-1/2 transform -translate-x-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  )
} 