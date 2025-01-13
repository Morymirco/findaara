'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ClientCarousel from '../components/ClientCarousel'
import Header from '../components/Header'
import MotionWrapper from '../components/MotionWrapper'
import NewsCard from '../components/NewsCard'
import TestimonialCard from '../components/TestimonialCard'
import { articles } from '../data/articles'

export default function NewsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-black via-red-950/20 to-black">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-black via-white/5 to-red-900 pt-20">
          <div className="absolute inset-0 -z-0 opacity-30">
            <Image
              src="/images/news-hero.jpg"
              alt="Actualités FINDAARA"
              fill
              objectFit="cover"
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6 text-yellow-500"
            >
              Actualités
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-yellow-200 max-w-2xl mx-auto"
            >
              Découvrez les dernières nouvelles et succès de FINDAARA
            </motion.p>
          </div>
        </section>

        {/* Catégories */}
        <section className="py-12 bg-gradient-to-t from-black/50 via-transparent to-black/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-2 rounded-full bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm text-white hover:from-red-900/80 hover:to-black/60 transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  {category.icon} {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Récents */}
        <section className="py-20 bg-gradient-to-b from-black via-red-950/10 to-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <MotionWrapper>
              <h2 className="text-3xl font-bold text-center mb-16 text-yellow-500">
                Articles Récents
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <NewsCard {...article} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-20 bg-gradient-to-t from-black/50 via-transparent to-black/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <MotionWrapper>
              <h2 className="text-3xl font-bold text-center mb-16 text-yellow-500">
                Témoignages de nos clients
              </h2>
            </MotionWrapper>

            <ClientCarousel>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </ClientCarousel>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-gradient-to-b from-black via-red-950/10 to-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mx-auto text-center">
              <MotionWrapper>
                <h2 className="text-3xl font-bold mb-6 text-yellow-500">
                  Restez informé
                </h2>
                <p className="text-yellow-200 mb-8">
                  Abonnez-vous à notre newsletter pour recevoir les dernières actualités 
                  et mises à jour de FINDAARA
                </p>
              </MotionWrapper>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-full bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/20">
                  S'abonner
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const categories = [
  {
    name: "Tous",
    icon: "🌟"
  },
  {
    name: "Innovation",
    icon: "🚀"
  },
  {
    name: "Success Stories",
    icon: "📈"
  },
  {
    name: "Guides",
    icon: "📚"
  },
  {
    name: "Événements",
    icon: "📅"
  }
]

const testimonials = [
  {
    content: "Les solutions FINDAARA ont transformé notre exploitation. La productivité a augmenté de manière significative.",
    author: "Mamadou Diallo",
    role: "Éleveur Professionnel",
    image: "/images/temoin.webp"
  },
  {
    content: "Le support technique est exceptionnel. L'équipe est toujours disponible pour nous aider.",
    author: "Fatoumata Bah",
    role: "Gérante de Ferme",
    image: "/images/temoin.webp"
  },
  {
    content: "L'application mobile est un vrai plus. Je peux surveiller mes couveuses même à distance.",
    author: "Ibrahim Souaré",
    role: "Entrepreneur Agricole",
    image: "/images/temoin.webp"
  }
] 