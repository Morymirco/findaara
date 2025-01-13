'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ClientCarousel from './components/ClientCarousel'
import Footer from './components/Footer'
import Header from './components/Header'
import MotionWrapper from './components/MotionWrapper'
import NewsCard from './components/NewsCard'
import TestimonialCard from './components/TestimonialCard'
import TypewriterText from './components/TypewriterText'
import { useRouter } from 'next/navigation'

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

  const router = useRouter()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-black via-red-950/20 to-black">
        {/* Hero Section avec vidéo */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-white/5 to-red-900 pt-20"
        >
          {/* Vidéo en arrière-plan */}
          <div className="absolute inset-0 -z-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay pour la lisibilité */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
            >
              <source src="/videos/back.mp4" type="video/mp4" />
              {/* Image de fallback */}
              <Image
                src="/images/hero-background.jpg"
                alt="Élevage avicole moderne"
                fill
                objectFit="cover"
              />
            </video>
          </div>

          {/* Le contenu du Hero reste identique */}
          <div className="container mx-auto px-4 max-w-5xl text-center text-white relative z-10">
            <TypewriterText
              text="Révolutionnez l'élevage avicole avec des solutions intelligentes et durables"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white/90 max-w-3xl mx-auto px-4"
            >
              Des couveuses intelligentes. Une application mobile performante. Une productivité augmentée.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col md:flex-row justify-center gap-4 px-4"
            >
              <Link 
                href="/solutions"
                className="bg-gradient-to-r from-red-600 to-red-700 text-white text-sm md:text-base font-bold py-3 px-6 md:px-8 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
              >
                Découvrir nos solutions
              </Link>
              <button 
                className="bg-gradient-to-r from-white to-yellow-500 text-black text-sm md:text-base font-bold py-3 px-6 md:px-8 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20"
              >
                Télécharger la brochure
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Section Avantages */}
        <section className="py-12 md:py-20 bg-gradient-to-t from-black/50 via-transparent to-black/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text px-4">
                Pourquoi choisir FINDAARA ?
              </h2>
            </MotionWrapper>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm rounded-xl p-6 md:p-8 transition-all duration-300 group"
                >
                  {/* Cercle décoratif */}
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-yellow-500/10 rounded-full" />
                  
                  {/* Icône */}
                  <div className="relative z-10 mb-6 w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center text-3xl transform group-hover:rotate-6 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  
                  {/* Titre */}
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-yellow-500 relative z-10">
                    {advantage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-yellow-100/90 relative z-10 leading-relaxed">
                    {advantage.description}
                  </p>
                  
                  {/* Ligne décorative */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-yellow-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section Impact */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-black via-red-950/10 to-black">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <MotionWrapper>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text px-4">
                Les impacts de FINDAARA en un coup d'œil
              </h2>
            </MotionWrapper>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
            >
              {impacts.map((impact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-500 mb-2"
                  >
                    {impact.value}
                  </motion.div>
                  <p className="text-sm md:text-base text-yellow-100">{impact.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section Solutions avec animation */}
        <section className="py-20 bg-gradient-to-t from-black/50 via-transparent to-black/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
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
                  className="bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-red-950 to-transparent" />
                  </div>

                  {/* Contenu */}
                  <div className="p-8 relative">
                    {/* Badge type */}
                    <span className="absolute -top-4 right-8 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
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
                    <div className="flex justify-between items-center mt-8 pt-6 border-t border-red-800/30">
                      <div>
                        <p className="text-sm text-yellow-200/80">À partir de</p>
                        <p className="text-2xl font-bold text-yellow-500">{solution.price}</p>
                      </div>
                      <button 
                        onClick={() => router.push(`/products/${solution.title.toLowerCase().replace(/\s+/g, '-')}`)}
                        className="bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-yellow-500 px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                      >
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
        <section className="py-20 bg-gradient-to-b from-black via-red-950/10 to-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
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
        <section className="py-20 bg-gradient-to-t from-black/50 via-transparent to-black/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
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
            <div className="max-w-2xl mx-auto text-center mt-16 px-4">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">
                Abonnez-vous à notre newsletter
              </h3>
              <p className="text-sm md:text-base text-white/80 mb-6 md:mb-8">
                Recevez nos dernières actualités et mises à jour directement dans votre boîte mail
              </p>
              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base"
                />
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 md:px-8 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/20 text-sm md:text-base">
                  S'abonner
                </button>
              </div>
            </div>

            {/* Catégories d'actualités */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {categories.map((category, index) => (
                <Link 
                  href={`/news/category/${category.slug}`} 
                  key={index}
                  className="bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm p-4 rounded-lg text-center group hover:bg-red-900/50 transition-all duration-300 border border-white/10 hover:border-white/20"
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
      </main>
      <Footer />
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
    image: "/images/couveuse_1.jpg",
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
    image: "/images/couveuse_5.jpg",
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
    image: "/images/couveuse_3.jpg",
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
    image: "/images/temoin.webp"
  },
  {
    content: "Le support technique est exceptionnel. Ils sont toujours disponibles pour nous aider.",
    author: "Fatoumata Bah",
    role: "Gérante de Ferme",
    image: "/images/temoin.webp"
  },
  {
    content: "L'application mobile me permet de surveiller mes couveuses même à distance. C'est révolutionnaire !",
    author: "Ibrahim Souaré",
    role: "Entrepreneur Agricole",
    image: "/images/temoin.webp"
  },
  {
    content: "La formation fournie par l'équipe FINDAARA a été cruciale pour notre succès.",
    author: "Aissatou Camara",
    role: "Directrice de Coopérative",
    image: "/images/temoin.webp"
  },
  {
    content: "Excellent retour sur investissement. Nos pertes ont été réduites de 40%.",
    author: "Ousmane Barry",
    role: "Propriétaire de Ferme",
    image: "/images/temoin.webp"
  }
]

const news = [
  {
    title: "Nouvelle gamme de couveuses FINDAARA Mini",
    excerpt: "Découvrez notre nouvelle gamme spécialement conçue pour les petits éleveurs, alliant performance et accessibilité.",
    image: "/images/startup.jpg",
    date: "15 Mars 2024",
    slug: "nouvelle-gamme-couveuses"
  },
  {
    title: "Success Story : Ferme Diallo",
    excerpt: "Comment la ferme Diallo a augmenté sa production de 200% en utilisant nos solutions intelligentes.",
    image: "/images/ansuten.jpg",
    date: "10 Mars 2024",
    slug: "success-story-ferme-diallo"
  },
  {
    title: "Guide : Optimiser votre élevage",
    excerpt: "Nos experts partagent leurs meilleures pratiques pour maximiser la productivité de votre exploitation.",
    image: "/images/odc.jpg",
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
