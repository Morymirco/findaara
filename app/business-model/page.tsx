'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '../components/Header'
import MotionWrapper from '../components/MotionWrapper'

export default function BusinessModelPage() {
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
      <main className="min-h-screen bg-black">
        {/* Hero Section - Adoucir le gradient */}
        <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-black via-red-950 to-red-900/80 pt-20">
          <div className="absolute inset-0 -z-0 opacity-30">
            <Image
              src="/images/business-hero.jpg"
              alt="Business Model FINDAARA"
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
              Notre Modèle Économique
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-yellow-200 max-w-2xl mx-auto"
            >
              Une approche innovante pour révolutionner l'élevage avicole en Guinée
            </motion.p>
          </div>
        </section>

        {/* Proposition de Valeur - Rouge plus doux */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
                Notre Proposition de Valeur
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valuePropositions.map((prop, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-950 to-red-900/50 backdrop-blur-sm p-8 rounded-xl border border-red-900/20"
                >
                  <div className="text-3xl mb-4">{prop.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-500">{prop.title}</h3>
                  <p className="text-yellow-100">{prop.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gammes de Prix - Background plus subtil */}
        <section className="py-20 bg-gradient-to-b from-red-950/20 to-red-900/10">
          <div className="container mx-auto px-4">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
                Nos Gammes de Prix
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-950 to-red-900/50 rounded-xl overflow-hidden border border-red-900/20"
                >
                  <div className="bg-gradient-to-r from-red-950 to-red-900 p-6 text-center">
                    <h3 className="text-2xl font-bold text-yellow-500">{tier.name}</h3>
                    <p className="text-yellow-200 mt-2">{tier.description}</p>
                  </div>
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <span className="text-4xl font-bold text-yellow-500">{tier.price}</span>
                      <span className="text-yellow-200"> GNF</span>
                    </div>
                    <ul className="space-y-4">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-yellow-100">
                          <span className="text-yellow-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prévisions Financières - Fond plus élégant */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
                Prévisions Financières
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {financialProjections.map((projection, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-950 to-red-900/50 p-8 rounded-xl border border-red-900/20 backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-bold mb-6 text-yellow-500">
                    {projection.title}
                  </h3>
                  <div className="space-y-4">
                    {projection.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-yellow-200">{metric.label}</span>
                        <span className="text-yellow-500 font-bold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages Compétitifs - Background plus raffiné */}
        <section className="py-20 bg-gradient-to-b from-red-950/10 to-red-900/5">
          <div className="container mx-auto px-4">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
                Nos Avantages Compétitifs
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-950 to-red-900/50 p-8 rounded-xl border border-red-900/20 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold mb-4 text-yellow-500">
                    {advantage.title}
                  </h3>
                  <p className="text-yellow-100 mb-4">{advantage.description}</p>
                  <ul className="space-y-2">
                    {advantage.points.map((point, idx) => (
                      <li key={idx} className="flex items-center text-yellow-200">
                        <span className="text-yellow-500 mr-2">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const valuePropositions = [
  {
    icon: "🔧",
    title: "Automatisation Avancée",
    description: "Systèmes intelligents réduisant la charge de travail et optimisant la production"
  },
  {
    icon: "⚡",
    title: "Efficacité Énergétique",
    description: "Consommation réduite pour des coûts d'exploitation minimisés"
  },
  {
    icon: "🛠",
    title: "Service Complet",
    description: "Support technique, formation et maintenance inclus"
  }
]

const pricingTiers = [
  {
    name: "Starter",
    description: "Pour débuter",
    price: "1 500 000",
    features: [
      "Couveuse Mini (60-120 œufs)",
      "Application mobile basique",
      "Support technique standard",
      "Garantie 1 an"
    ]
  },
  {
    name: "Professional",
    description: "Pour les pros",
    price: "3 000 000",
    features: [
      "Couveuse Pro (120-500 œufs)",
      "Application mobile avancée",
      "Support prioritaire",
      "Garantie 2 ans",
      "Formation sur site"
    ]
  },
  {
    name: "Enterprise",
    description: "Pour l'industrie",
    price: "8 000 000",
    features: [
      "Couveuse Max (500-1000 œufs)",
      "Application premium",
      "Support 24/7",
      "Garantie 3 ans",
      "Formation complète",
      "Maintenance préventive"
    ]
  }
]

const financialProjections = [
  {
    title: "Objectifs 2024",
    metrics: [
      { label: "Ventes de couveuses", value: "500 unités" },
      { label: "Chiffre d'affaires", value: "1.5 Milliards GNF" },
      { label: "Parts de marché", value: "25%" },
      { label: "Retour sur investissement", value: "18 mois" }
    ]
  },
  {
    title: "Impact Économique",
    metrics: [
      { label: "Emplois créés", value: "50+" },
      { label: "Éleveurs formés", value: "200+" },
      { label: "Économies d'énergie", value: "40%" },
      { label: "Production locale", value: "+200%" }
    ]
  }
]

const competitiveAdvantages = [
  {
    title: "Innovation Technologique",
    description: "Notre technologie de pointe nous distingue de la concurrence",
    points: [
      "Intelligence artificielle intégrée",
      "Contrôle à distance via application",
      "Mise à jour automatique du système",
      "Analyse prédictive des performances"
    ]
  },
  {
    title: "Support Local",
    description: "Une présence forte en Guinée pour un service optimal",
    points: [
      "Équipe technique locale",
      "Pièces de rechange disponibles",
      "Formation en langue locale",
      "Maintenance rapide sur site"
    ]
  }
] 