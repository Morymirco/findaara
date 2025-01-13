'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '../../components/Header'
import { useParams } from 'next/navigation'
import { articles } from '../../data/articles'
import NewsCard from '../../components/NewsCard'
import Link from 'next/link'

export default function ArticleDetailPage() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)
  const relatedArticles = articles.filter(a => a.slug !== slug).slice(0, 3)

  if (!article) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-black pt-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl text-yellow-500 mb-4">Article non trouvé</h1>
            <Link href="/news" className="text-yellow-200 hover:text-yellow-400">
              Retourner aux actualités
            </Link>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-black via-red-950/20 to-black">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-black via-white/5 to-red-900 pt-20">
          <div className="absolute inset-0 -z-0 opacity-30">
            <Image
              src={article.image}
              alt={article.title}
              fill
              objectFit="cover"
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-yellow-200 mb-4"
            >
              {article.date}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6 text-yellow-500"
            >
              {article.title}
            </motion.h1>
          </div>
        </section>

        {/* Contenu de l'article */}
        <section className="py-16 bg-gradient-to-t from-black/50 via-transparent to-black/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-invert prose-yellow mx-auto bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg"
            >
              <p className="text-xl text-yellow-200 mb-8">
                {article.excerpt}
              </p>
              
              <div className="space-y-6 text-yellow-100"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Section partage */}
              <div className="mt-12 border-t border-red-900/30 pt-8">
                <h3 className="text-yellow-500 font-bold mb-4">
                  Partager cet article
                </h3>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-yellow-200 rounded-full transition-colors">
                    Facebook
                  </button>
                  <button className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-yellow-200 rounded-full transition-colors">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-yellow-200 rounded-full transition-colors">
                    LinkedIn
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Articles connexes */}
        <section className="py-16 bg-gradient-to-b from-black via-red-950/10 to-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">
              Articles connexes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <NewsCard {...relatedArticle} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 