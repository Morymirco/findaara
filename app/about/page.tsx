'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import MotionWrapper from '../components/MotionWrapper'
import StatCard from '../components/StatCard'
import Timeline from '../components/Timeline'

export default function AboutPage() {
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
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-black via-white/5 to-red-900 pt-20">
          <div className="absolute inset-0 -z-0 opacity-30">
            <Image
              src="/images/about-hero.jpg"
              alt="FINDAARA Innovation"
              fill
              objectFit="cover"
            />
          </div>
          <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text"
            >
              À propos de FINDAARA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Innovation et durabilité au service de l'élevage avicole en Guinée
            </motion.p>
          </div>
        </section>

        {/* Vision et Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
                Notre Vision et Mission
              </h2>
            </MotionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-950 to-red-900/50 p-8 rounded-xl border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Notre Vision</h3>
                <p className="text-white/80">
                  Devenir un acteur clé de l'innovation dans l'élevage avicole, en améliorant 
                  la productivité locale et en soutenant l'autosuffisance alimentaire en Guinée.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-950 to-red-900/50 p-8 rounded-xl border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Notre Mission</h3>
                <p className="text-white/80">
                  Fournir des solutions technologiques durables et accessibles, tout en accompagnant 
                  les éleveurs dans leur transition vers des pratiques modernes et efficaces.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-20 bg-gradient-to-b from-black via-white/5 to-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
                Comment tout a commencé
              </h2>
            </MotionWrapper>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-white/80 space-y-6 mb-16"
            >
              <p>
                Face à la concurrence déloyale et aux défis de productivité dans l'élevage avicole 
                en Guinée, FINDAARA est née de la volonté de combiner technologie et tradition pour 
                répondre à ces problématiques.
              </p>
            </motion.div>

            <Timeline events={timelineEvents} />
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
                Les personnes derrière FINDAARA
              </h2>
            </MotionWrapper>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {team.map((member, index) => (
                <Link href={`/team#${member.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-br from-red-950 to-red-900/50 rounded-xl overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="relative h-64">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-white/60 mb-2">{member.role}</p>
                      <p className="text-white/80">{member.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
            <div className="text-center mt-8">
              <Link 
                href="/team"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
              >
                Voir toute l'équipe
              </Link>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-20 bg-gradient-to-b from-black via-white/5 to-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
                Nos engagements fondamentaux
              </h2>
            </MotionWrapper>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-red-950 to-red-900/50 p-6 rounded-xl text-center border border-white/10"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Nos Partenaires */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
                Collaborer pour un impact durable
              </h2>
            </MotionWrapper>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-red-950 to-red-900/50 p-4 rounded-xl flex items-center justify-center border border-white/10"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nos Réalisations */}
        <section className="py-20 bg-gradient-to-b from-black via-white/5 to-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
                Ce que nous avons accompli
              </h2>
            </MotionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <StatCard value={1000} suffix="+" label="Couveuses vendues" />
              <StatCard value={20} suffix="+" label="Fermes modernisées" />
              <StatCard value={50} suffix="%" label="Réduction des coûts" />
              <StatCard value={95} suffix="%" label="Clients satisfaits" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <MotionWrapper>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
                Rejoignez-nous dans notre mission
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Vous souhaitez en savoir plus sur FINDAARA ou collaborer avec nous ? 
                Contactez-nous dès aujourd'hui !
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
              >
                Nous contacter
              </Link>
            </MotionWrapper>
          </div>
        </section>
      </main>
    </>
  )
}

const team = [
  {
    name: "Almamy Fodé Sylla",
    role: "Fondateur",
    description: "Ingénieur Réseau et Télécoms spécialisé en IoT et Intelligence Artificielle",
    image: "/images/team/deen.jpg"
  },
  {
    name: "Uwonkunda Makuza Josiane",
    role: "Finance et Marketing",
    description: "Experte en stratégie marketing et gestion financière",
    image: "/images/team/josiane.jpg"
  },
  {
    name: "Mory Koulibaly",
    role: "Développeur",
    description: "Responsable de la conception de l'application mobile",
    image: "/images/team/mory.jpg"
  },
  {
    name: "Mouloukou Souleymane Deen Sylla",
    role: "Architecte Désigner 3D",
    description: "Responsable de la conception de l'application mobile",
    image: "/images/team/soule.jpg"
  },
  {
    name: "Naomi Guilavogui",
    role: "Ingenieure en informatique",
    description: "Responsable de la conception de l'application mobile",
    image: "/images/team/naomi.jpg"
  }
]

const values = [
  {
    icon: "🚀",
    title: "Innovation",
    description: "Toujours proposer des solutions à la pointe de la technologie"
  },
  {
    icon: "🌱",
    title: "Durabilité",
    description: "Promouvoir des pratiques respectueuses de l'environnement"
  },
  {
    icon: "🤝",
    title: "Proximité",
    description: "Accompagner les éleveurs avec un service humain et personnalisé"
  },
  {
    icon: "⭐",
    title: "Qualité",
    description: "Garantir des produits fiables et efficaces"
  }
]

const partners = [
  {
    name: "APIP",
    logo: "/images/partners/apip.png"
  },
  {
    name: "Orange digital center",
    logo: "/images/partners/coop.png"
  },
  {
    name: "Medi",
    logo: "/images/partners/media.png"
  },
  {
    name: "ONG Partenaire",
    logo: "/images/partners/ong.png"
  }
]

const achievements = [
  {
    value: "1000+",
    description: "Couveuses vendues à ce jour"
  },
  {
    value: "20+",
    description: "Fermes avicoles modernisées"
  },
  {
    value: "50%",
    description: "De réduction des coûts de production"
  }
]

const timelineEvents = [
  {
    year: "2020",
    title: "Naissance de l'idée",
    description: "Observation des défis de l'élevage avicole en Guinée et conception initiale du projet."
  },
  {
    year: "2021",
    title: "Développement du prototype",
    description: "Création du premier prototype de couveuse intelligente et tests initiaux."
  },
  {
    year: "2022",
    title: "Lancement officiel",
    description: "Création de FINDAARA et lancement de la première gamme de produits."
  },
  {
    year: "2023",
    title: "Expansion régionale",
    description: "Déploiement dans plusieurs régions de la Guinée et premiers partenariats stratégiques."
  },
  {
    year: "2024",
    title: "Innovation continue",
    description: "Lancement de nouvelles solutions et renforcement de notre présence nationale."
  }
] 