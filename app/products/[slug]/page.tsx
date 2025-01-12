'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Header from '../../components/Header'
import Link from 'next/link'

interface Product {
  title: string
  type: string
  description: string
  image: string
  price: string
  features: string[]
  specifications: {
    dimensions: string
    puissance: string
    poids: string
    materiaux: string
  }
  details: {
    description_longue: string
    avantages: string[]
    caracteristiques_techniques: string[]
    garantie: string
    support: string
  }
}

const products: { [key: string]: Product } = {
  "couveuse-mini": {
    title: "Couveuse Mini",
    type: "Débutant",
    description: "La solution idéale pour débuter dans l'élevage avicole",
    image: "/images/couveuse_1.jpg",
    price: "XXXX GNF",
    features: [
      "Capacité de 100 œufs",
      "Contrôle automatique",
      "Application mobile basique",
      "Garantie 1 an"
    ],
    specifications: {
      dimensions: "80 x 60 x 50 cm",
      puissance: "200W",
      poids: "15 kg",
      materiaux: "Acier inoxydable et plastique ABS"
    },
    details: {
      description_longue: "La Couveuse Mini est spécialement conçue pour les éleveurs débutants souhaitant démarrer leur activité avec un équipement professionnel mais accessible. Elle combine simplicité d'utilisation et technologie avancée pour garantir d'excellents résultats.",
      avantages: [
        "Installation facile et rapide",
        "Interface utilisateur intuitive",
        "Consommation électrique optimisée",
        "Maintenance simplifiée",
        "Support technique inclus"
      ],
      caracteristiques_techniques: [
        "Régulation automatique de la température",
        "Contrôle d'humidité intégré",
        "Système de retournement automatique",
        "Alarme de surveillance",
        "Connection WiFi pour monitoring à distance"
      ],
      garantie: "Garantie complète d'un an avec possibilité d'extension",
      support: "Assistance technique 24/7 via l'application mobile"
    }
  },
  "couveuse-pro": {
    title: "Couveuse Pro",
    type: "Professionnel",
    description: "Pour les éleveurs professionnels exigeants",
    image: "/images/couveuse_5.jpg",
    price: "XXXX GNF",
    features: [
      "Capacité de 500 œufs",
      "Double système de contrôle",
      "Application mobile avancée",
      "Garantie 2 ans"
    ],
    specifications: {
      dimensions: "120 x 80 x 70 cm",
      puissance: "400W",
      poids: "25 kg",
      materiaux: "Acier inoxydable premium et aluminium"
    },
    details: {
      description_longue: "La Couveuse Pro répond aux besoins des éleveurs professionnels avec des fonctionnalités avancées et une fiabilité exceptionnelle. Sa capacité accrue et ses systèmes de contrôle sophistiqués en font l'outil idéal pour une production à grande échelle.",
      avantages: [
        "Production à grande échelle",
        "Contrôle multi-zones",
        "Analyse des performances en temps réel",
        "Système de backup intégré",
        "Formation professionnelle incluse"
      ],
      caracteristiques_techniques: [
        "Double système de régulation thermique",
        "Contrôle d'humidité multi-points",
        "Retournement programmable avancé",
        "Système de ventilation intelligent",
        "Interface de gestion professionnelle"
      ],
      garantie: "Garantie étendue de deux ans avec service premium",
      support: "Support technique dédié et maintenance préventive"
    }
  },
  "couveuse-max": {
    title: "Couveuse Max",
    type: "Industriel",
    description: "La solution industrielle haute performance",
    image: "/images/couveuse_3.jpg",
    price: "XXXX GNF",
    features: [
      "Capacité de 1000 œufs",
      "Système intelligent AI",
      "Application mobile premium",
      "Garantie 3 ans"
    ],
    specifications: {
      dimensions: "180 x 100 x 90 cm",
      puissance: "800W",
      poids: "45 kg",
      materiaux: "Acier inoxydable industriel et composites haute résistance"
    },
    details: {
      description_longue: "La Couveuse Max représente le summum de la technologie d'incubation industrielle. Dotée d'intelligence artificielle et de capacités d'analyse avancées, elle garantit une production optimale à grande échelle.",
      avantages: [
        "Production industrielle optimisée",
        "IA prédictive pour l'optimisation",
        "Gestion multi-unités centralisée",
        "Économies d'échelle maximales",
        "ROI optimisé"
      ],
      caracteristiques_techniques: [
        "IA de contrôle environnemental",
        "Système de désinfection automatique",
        "Gestion énergétique intelligente",
        "Monitoring multi-paramètres",
        "Interface industrielle personnalisable"
      ],
      garantie: "Garantie industrielle de trois ans avec extension possible",
      support: "Support technique 24/7 et maintenance prédictive"
    }
  },
  "couveuse-smart": {
    title: "Couveuse Smart",
    type: "Semi-Pro",
    description: "La solution connectée pour les éleveurs ambitieux",
    image: "/images/couveuse_2.jpg",
    price: "XXXX GNF",
    features: [
      "Capacité de 300 œufs",
      "Contrôle via smartphone",
      "Analytics avancés",
      "Garantie 18 mois"
    ],
    specifications: {
      dimensions: "100 x 70 x 60 cm",
      puissance: "300W",
      poids: "20 kg",
      materiaux: "Alliage d'aluminium et plastique technique"
    },
    details: {
      description_longue: "La Couveuse Smart combine technologies modernes et facilité d'utilisation pour les éleveurs souhaitant développer leur activité. Son système connecté permet un contrôle total depuis votre smartphone.",
      avantages: [
        "Contrôle à distance complet",
        "Analyses statistiques détaillées",
        "Notifications en temps réel",
        "Mise à jour automatique",
        "Interface personnalisable"
      ],
      caracteristiques_techniques: [
        "Connectivité WiFi et Bluetooth",
        "Capteurs haute précision",
        "Système d'alerte intelligent",
        "Base de données cloud",
        "API ouverte pour intégrations"
      ],
      garantie: "Garantie de 18 mois avec support premium",
      support: "Assistance technique et mises à jour régulières"
    }
  }
}

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = products[slug as string]

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-black pt-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl text-yellow-500 mb-4">Produit non trouvé</h1>
            <Link href="/solutions" className="text-white/80 hover:text-white">
              Retourner aux solutions
            </Link>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-black via-white/5 to-red-900 pt-20">
          <div className="absolute inset-0 -z-0 opacity-30">
            <Image
              src={product.image}
              alt={product.title}
              fill
              objectFit="cover"
            />
          </div>
          <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-white/80 mb-4"
            >
              {product.type}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text"
            >
              {product.title}
            </motion.h1>
          </div>
        </section>

        {/* Détails du produit */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image et galerie */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Galerie miniature à ajouter ici */}
              </motion.div>

              {/* Informations produit */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-red-950 to-red-900/50 p-8 rounded-xl border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-4">{product.price}</h2>
                  <p className="text-white/80 mb-6">{product.details.description_longue}</p>
                  
                  <h3 className="text-xl font-bold text-white mb-4">Caractéristiques principales</h3>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/80">
                        <span className="text-yellow-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/20">
                    Commander maintenant
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Spécifications techniques */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
                Spécifications techniques
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-red-950 to-red-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Dimensions et poids</h3>
                  <ul className="space-y-2">
                    <li className="text-white/80">Dimensions: {product.specifications.dimensions}</li>
                    <li className="text-white/80">Poids: {product.specifications.poids}</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-red-950 to-red-900/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Caractéristiques</h3>
                  <ul className="space-y-2">
                    <li className="text-white/80">Puissance: {product.specifications.puissance}</li>
                    <li className="text-white/80">Matériaux: {product.specifications.materiaux}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Support et garantie */}
            <div className="mt-16 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
                Support et garantie
              </h2>
              <div className="bg-gradient-to-br from-red-950 to-red-900/50 p-8 rounded-xl border border-white/10">
                <p className="text-white/80 mb-4">{product.details.garantie}</p>
                <p className="text-white/80">{product.details.support}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 