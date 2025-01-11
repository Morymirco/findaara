'use client'

import { motion } from 'framer-motion'
import MotionWrapper from '../components/MotionWrapper'
import Image from 'next/image'
import Header from '../components/Header'
import TestimonialCard from '../components/TestimonialCard'
import NewsCard from '../components/NewsCard'
import Link from 'next/link'
import ClientCarousel from '../components/ClientCarousel'

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section avec animation */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-red-900 pt-20"
        >
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-bold mb-6"
            >
              Révolutionnez l'élevage avicole avec des solutions intelligentes et durables
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-8"
            >
              Des couveuses intelligentes. Une application mobile performante. Une productivité augmentée.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              <button className="bg-red-600 hover:bg-red-700 text-yellow-500 font-bold py-3 px-8 rounded-full">
                Découvrir nos solutions
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full">
                Télécharger la brochure
              </button>
            </motion.div>
          </div>
          
          <div className="absolute inset-0 -z-0 opacity-30">
            <Image
              src="/images/hero-background.jpg"
              alt="Élevage avicole moderne"
              fill
              objectFit="cover"
            />
          </div>
        </motion.section>

        {/* Section Avantages avec animation */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
                Pourquoi choisir FINDAARA ?
              </h2>
            </MotionWrapper>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden bg-red-900 rounded-xl p-8 transition-all duration-300 group"
                >
                  {/* Cercle décoratif */}
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-yellow-500/10 rounded-full" />
                  
                  {/* Icône */}
                  <div className="relative z-10 mb-6 w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center text-3xl transform group-hover:rotate-6 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  
                  {/* Titre */}
                  <h3 className="text-xl font-bold mb-4 text-yellow-500 relative z-10">
                    {advantage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-yellow-100/90 relative z-10 leading-relaxed">
                    {advantage.description}
                  </p>
                  
                  {/* Ligne décorative */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-yellow-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section Impact avec animation */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 text-center">
            <MotionWrapper>
              <h2 className="text-3xl font-bold mb-12 text-yellow-500">
                Les impacts de FINDAARA en un coup d'œil
              </h2>
            </MotionWrapper>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {impacts.map((impact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-900 p-6 rounded-lg shadow-lg"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-yellow-500 mb-2"
                  >
                    {impact.value}
                  </motion.div>
                  <p className="text-yellow-100">{impact.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section Solutions avec animation */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
                Découvrez nos solutions innovantes
              </h2>
            </MotionWrapper>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-red-900 rounded-xl overflow-hidden shadow-lg"
                >
                  {/* Image avec overlay */}
                  <div className="relative">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* Contenu */}
                  <div className="p-8 relative">
                    {/* Badge type */}
                    <span className="absolute -top-4 right-8 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      {solution.type}
                    </span>

                    {/* Titre et description */}
                    <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                      {solution.title}
                    </h3>
                    <p className="text-yellow-100/90 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Caractéristiques */}
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-yellow-200">
                          <span className="text-yellow-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Prix et CTA */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-yellow-200">À partir de</p>
                        <p className="text-2xl font-bold text-yellow-500">{solution.price}</p>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-yellow-500 px-6 py-2 rounded-full transition-colors">
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section Témoignages */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
              Ils nous font confiance
            </h2>
            <ClientCarousel>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </ClientCarousel>
          </div>
        </section>

        {/* Section Actualités */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
              Restez informés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {news.map((item, index) => (
                <div key={index} className="group">
                  <NewsCard {...item} />
                  {/* Effet de ligne décorative */}
                  <div className="h-1 bg-gradient-to-r from-red-600 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              ))}
            </div>
            
            {/* Section Newsletter */}
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6 text-yellow-500">
                Abonnez-vous à notre newsletter
              </h3>
              <p className="text-yellow-200 mb-8">
                Recevez nos dernières actualités et mises à jour directement dans votre boîte mail
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-full bg-red-900/50 border border-red-700 text-yellow-100 placeholder-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button className="bg-red-600 hover:bg-red-700 text-yellow-500 px-8 py-3 rounded-full transition-colors">
                  S'abonner
                </button>
              </div>
            </div>

            {/* Catégories d'actualités */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <Link 
                  href={`/news/category/${category.slug}`} 
                  key={index}
                  className="bg-red-900/50 p-4 rounded-lg text-center group hover:bg-red-800 transition-colors"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h4 className="text-yellow-500 font-semibold mb-2">{category.name}</h4>
                  <p className="text-yellow-200/70 text-sm">{category.count} articles</p>
                  <div className="mt-2 text-red-500 group-hover:text-yellow-500 transition-colors">
                    Voir plus →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-yellow-500 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Image
                  src="/images/logo-white.png"
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
                  <Link href="/about" className="block text-gray-400 hover:text-white">À propos</Link>
                  <Link href="/solutions" className="block text-gray-400 hover:text-white">Solutions</Link>
                  <Link href="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
                </nav>
              </div>
              <div>
                <h4 className="font-bold mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  {/* Ajouter les icônes des réseaux sociaux ici */}
                </div>
              </div>
            </div>
            <div className="border-t border-red-800 mt-8 pt-8 text-center text-yellow-400">
              <p>© 2024 FINDAARA. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

const advantages = [
  {
    icon: '⚡',
    title: 'Technologie avancée',
    description: 'Couveuses automatisées avec contrôle intelligent et faible consommation énergétique'
  },
  {
    icon: '🌍',
    title: 'Soutien local',
    description: 'Contribution active au développement de l\'aviculture en Guinée'
  },
  {
    icon: '🎓',
    title: 'Formation experte',
    description: 'Programme complet d\'accompagnement et formation personnalisée'
  },
  {
    icon: '🛠',
    title: 'Service premium',
    description: 'Support technique 24/7 et maintenance préventive régulière'
  }
]

const impacts = [
  {
    value: '50%',
    description: "d'augmentation de la productivité"
  },
  {
    value: '10+',
    description: 'partenariats stratégiques'
  },
  {
    value: '1000+',
    description: 'couveuses déployées'
  },
  {
    value: '30%',
    description: 'de réduction des coûts'
  }
]

const solutions = [
  {
    title: "Couveuse Mini",
    type: "Débutant",
    description: "La solution idéale pour débuter dans l'élevage avicole",
    image: "/images/couveuse-mini.jpg",
    price: "XXXX GNF",
    features: [
      "Capacité de 100 œufs",
      "Contrôle automatique",
      "Application mobile basique",
      "Garantie 1 an"
    ]
  },
  {
    title: "Couveuse Pro",
    type: "Professionnel",
    description: "Pour les éleveurs professionnels exigeants",
    image: "/images/couveuse-pro.jpg",
    price: "XXXX GNF",
    features: [
      "Capacité de 500 œufs",
      "Double système de contrôle",
      "Application mobile avancée",
      "Garantie 2 ans"
    ]
  },
  {
    title: "Couveuse Max",
    type: "Industriel",
    description: "La solution industrielle haute performance",
    image: "/images/couveuse-max.jpg",
    price: "XXXX GNF",
    features: [
      "Capacité de 1000 œufs",
      "Système intelligent AI",
      "Application mobile premium",
      "Garantie 3 ans"
    ]
  }
]

const testimonials = [
  {
    content: "Grâce à FINDAARA, j'ai doublé ma production en 6 mois. Le système est vraiment intuitif et efficace.",
    author: "Mamadou Diallo",
    role: "Éleveur Professionnel",
    image: "/images/testimonial-1.jpg"
  },
  {
    content: "Le support technique est exceptionnel. Ils sont toujours disponibles pour nous aider.",
    author: "Fatoumata Bah",
    role: "Gérante de Ferme",
    image: "/images/testimonial-2.jpg"
  },
  {
    content: "L'application mobile me permet de surveiller mes couveuses même à distance. C'est révolutionnaire !",
    author: "Ibrahim Souaré",
    role: "Entrepreneur Agricole",
    image: "/images/testimonial-3.jpg"
  },
  {
    content: "La formation fournie par l'équipe FINDAARA a été cruciale pour notre succès.",
    author: "Aissatou Camara",
    role: "Directrice de Coopérative",
    image: "/images/testimonial-4.jpg"
  },
  {
    content: "Excellent retour sur investissement. Nos pertes ont été réduites de 40%.",
    author: "Ousmane Barry",
    role: "Propriétaire de Ferme",
    image: "/images/testimonial-5.jpg"
  }
]

const news = [
  {
    title: "Nouvelle gamme de couveuses FINDAARA Mini",
    excerpt: "Découvrez notre nouvelle gamme spécialement conçue pour les petits éleveurs, alliant performance et accessibilité.",
    image: "/images/news-1.jpg",
    date: "15 Mars 2024",
    slug: "nouvelle-gamme-couveuses"
  },
  {
    title: "Success Story : Ferme Diallo",
    excerpt: "Comment la ferme Diallo a augmenté sa production de 200% en utilisant nos solutions intelligentes.",
    image: "/images/news-2.jpg",
    date: "10 Mars 2024",
    slug: "success-story-ferme-diallo"
  },
  {
    title: "Guide : Optimiser votre élevage",
    excerpt: "Nos experts partagent leurs meilleures pratiques pour maximiser la productivité de votre exploitation.",
    image: "/images/news-3.jpg",
    date: "5 Mars 2024",
    slug: "guide-optimisation-elevage"
  }
]

const categories = [
  {
    name: "Innovation",
    icon: "🚀",
    count: 12,
    slug: "innovation"
  },
  {
    name: "Success Stories",
    icon: "🌟",
    count: 8,
    slug: "success-stories"
  },
  {
    name: "Guides",
    icon: "📚",
    count: 15,
    slug: "guides"
  },
  {
    name: "Événements",
    icon: "📅",
    count: 6,
    slug: "evenements"
  }
]
