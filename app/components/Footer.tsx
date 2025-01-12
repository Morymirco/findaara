import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-yellow-500 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo_blanc.png"
              alt="FINDAARA Logo"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-400">
              Solutions innovantes pour l'élevage avicole
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Rue Example</p>
              <p>Conakry, Guinée</p>
              <p>+224 XX XX XX XX</p>
              <p>contact@findaara.com</p>
            </address>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liens rapides</h4>
            <nav className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white">
                À propos
              </Link>
              <Link href="/solutions" className="block text-gray-400 hover:text-white">
                Solutions
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-bold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                className="text-gray-400 hover:text-white"
              >
                Facebook
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                className="text-gray-400 hover:text-white"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-red-800 mt-8 pt-8 text-center text-yellow-400">
          <p>© {new Date().getFullYear()} FINDAARA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
} 