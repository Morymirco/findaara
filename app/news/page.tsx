'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '../components/Header'
import MotionWrapper from '../components/MotionWrapper'
import NewsCard from '../components/NewsCard'
import TestimonialCard from '../components/TestimonialCard'
import ClientCarousel from '../components/ClientCarousel'

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
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-black to-red-900 pt-20">
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
        <section className="py-12 bg-red-900/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-2 rounded-full bg-red-900 text-yellow-500 hover:bg-red-800 transition-colors"
                >
                  {category.icon} {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Récents */}
        <section className="py-20">
          <div className="container mx-auto px-4">
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
        <section className="py-20 bg-red-900/20">
          <div className="container mx-auto px-4">
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
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
                  className="flex-1 px-4 py-3 rounded-full bg-red-900/30 border border-red-700 text-yellow-100 placeholder-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button className="bg-red-600 hover:bg-red-700 text-yellow-500 px-8 py-3 rounded-full transition-colors">
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

const articles = [
  {
    title: "Lancement de la nouvelle gamme FINDAARA",
    excerpt: "Découvrez notre nouvelle génération de couveuses encore plus performantes et économiques.",
    image: "/images/news/article1.jpg",
    date: "15 Mars 2024",
    slug: "nouvelle-gamme-2024"
  },
  {
    title: "Success Story : La ferme Diallo",
    excerpt: "Comment M. Diallo a augmenté sa production de 200% grâce à nos solutions.",
    image: "/images/news/article2.jpg",
    date: "10 Mars 2024",
    slug: "success-story-diallo"
  },
  {
    title: "Guide : Optimiser votre élevage",
    excerpt: "Conseils pratiques pour maximiser la productivité de votre exploitation avicole.",
    image: "/images/news/article3.jpg",
    date: "5 Mars 2024",
    slug: "guide-optimisation"
  },
  {
    title: "FINDAARA au salon de l'agriculture",
    excerpt: "Retrouvez-nous au salon de l'agriculture de Conakry du 20 au 25 avril.",
    image: "/images/news/article4.jpg",
    date: "1 Mars 2024",
    slug: "salon-agriculture-2024"
  },
  {
    title: "Formation : Maîtrisez votre couveuse",
    excerpt: "Programme de formation complet pour les nouveaux utilisateurs.",
    image: "/images/news/article5.jpg",
    date: "25 Février 2024",
    slug: "formation-utilisateurs"
  },
  {
    title: "Innovation : L'IA au service de l'élevage",
    excerpt: "Comment l'intelligence artificielle révolutionne l'aviculture moderne.",
    image: "/images/news/article6.jpg",
    date: "20 Février 2024",
    slug: "ia-aviculture"
  }
]

const testimonials = [
  {
    content: "Les solutions FINDAARA ont transformé notre exploitation. La productivité a augmenté de manière significative.",
    author: "Mamadou Diallo",
    role: "Éleveur Professionnel",
    image: "/images/testimonials/testimonial1.jpg"
  },
  {
    content: "Le support technique est exceptionnel. L'équipe est toujours disponible pour nous aider.",
    author: "Fatoumata Bah",
    role: "Gérante de Ferme",
    image: "/images/testimonials/testimonial2.jpg"
  },
  {
    content: "L'application mobile est un vrai plus. Je peux surveiller mes couveuses même à distance.",
    author: "Ibrahim Souaré",
    role: "Entrepreneur Agricole",
    image: "/images/testimonials/testimonial3.jpg"
  }
] 