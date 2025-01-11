import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-yellow-500 hover:text-red-500 transition-colors">Accueil</Link>
            <Link href="/about" className="text-yellow-500 hover:text-red-500 transition-colors">À propos</Link>
            <Link href="/solutions" className="text-yellow-500 hover:text-red-500 transition-colors">Solutions</Link>
            <Link href="/business-model" className="text-yellow-500 hover:text-red-500 transition-colors">Business Model</Link>
            <Link href="/news" className="text-yellow-500 hover:text-red-500 transition-colors">Actualités</Link>
            <Link href="/contact" className="text-yellow-500 hover:text-red-500 transition-colors">Contact</Link>
          </nav>

          {/* CTA Button */}
          <button className="bg-red-600 text-yellow-500 px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
            Demandez une Démo
          </button>
        </div>
      </div>
    </header>
  )
} 