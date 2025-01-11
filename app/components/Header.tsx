'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import DemoModal from './DemoModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/business-model', label: 'Business Model' },
    { href: '/news', label: 'Actualités' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <>
      <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="FINDAARA Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-yellow-500 hover:text-red-500 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="hidden md:block bg-red-600 text-yellow-500 px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Demandez une Démo
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-yellow-500 p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95"
            >
              <nav className="container mx-auto px-4 py-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-yellow-500 hover:text-red-500 transition-colors border-b border-red-900/20"
                  >
                    {item.label}
                  </Link>
                ))}
                <button className="w-full mt-4 bg-red-600 text-yellow-500 px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
                  Demandez une Démo
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  )
} 