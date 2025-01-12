'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 bg-black/90 backdrop-blur-sm`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logo_blanc.png"
              alt="FINDAARA Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-yellow-500 hover:text-yellow-400 transition-colors">
              Accueil
            </Link>
            <Link href="/solutions" className="text-yellow-500 hover:text-yellow-400 transition-colors">
              Solutions
            </Link>
            <Link href="/news" className="text-yellow-500 hover:text-yellow-400 transition-colors">
              Actualités
            </Link>
            <Link href="/about" className="text-yellow-500 hover:text-yellow-400 transition-colors">
              À propos
            </Link>
            <Link href="/team" className="text-yellow-500 hover:text-yellow-400 transition-colors">
              Équipe
            </Link>
            <Link href="/contact" className="text-yellow-500 hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden relative z-10 text-yellow-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <div className={`w-6 h-1 bg-current relative transform transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}>
                <div className={`absolute w-6 h-1 bg-current transform transition-all duration-200 ${isMobileMenuOpen ? '-rotate-90' : '-translate-y-2'}`}></div>
                <div className={`absolute w-6 h-1 bg-current transform transition-all duration-200 ${isMobileMenuOpen ? '-rotate-90' : 'translate-y-2'}`}></div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link 
                href="/"
                className="text-yellow-500 hover:text-yellow-400 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/solutions"
                className="text-yellow-500 hover:text-yellow-400 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                href="/news"
                className="text-yellow-500 hover:text-yellow-400 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Actualités
              </Link>
              <Link 
                href="/about"
                className="text-yellow-500 hover:text-yellow-400 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="/team"
                className="text-yellow-500 hover:text-yellow-400 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Équipe
              </Link>
              <Link 
                href="/contact"
                className="text-yellow-500 hover:text-yellow-400 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 