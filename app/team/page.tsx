'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '../components/Header'
import MotionWrapper from '../components/MotionWrapper'
import Link from 'next/link'

export default function TeamPage() {
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
        <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-black via-white/5 to-red-900 pt-20">
          <div className="absolute inset-0 -z-0 opacity-30">
            <Image
              src="/images/team-hero.jpg"
              alt="L'équipe FINDAARA"
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
              Notre Équipe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Découvrez les personnes passionnées qui font de FINDAARA une réalité
            </motion.p>
          </div>
        </section>

        {/* Section Équipe */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-red-950 to-red-900/50 rounded-xl overflow-hidden group border border-white/10"
                >
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-white/60 mb-4">{member.role}</p>
                    <p className="text-white/80 mb-4">{member.description}</p>
                    
                    {/* Compétences */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Compétences</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills?.map((skill, idx) => (
                          <span key={idx} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                      {member.social?.linkedin && (
                        <Link href={member.social.linkedin} target="_blank" className="text-white/60 hover:text-white">
                          LinkedIn
                        </Link>
                      )}
                      {member.social?.twitter && (
                        <Link href={member.social.twitter} target="_blank" className="text-white/60 hover:text-white">
                          Twitter
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-black via-white/5 to-black">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <MotionWrapper>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
                Rejoignez notre équipe
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Vous souhaitez participer à l'aventure FINDAARA ? 
                Découvrez nos opportunités de carrière.
              </p>
              <Link 
                href="/careers"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
              >
                Voir les postes disponibles
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
    image: "/images/team/deen.jpg",
    skills: ["IoT", "IA", "Gestion de Projet", "Innovation"],
    social: {
      linkedin: "https://linkedin.com/in/almamy",
      twitter: "https://twitter.com/almamy"
    }
  },
  {
    name: "Uwonkunda Makuza Josiane",
    role: "Finance et Marketing",
    description: "Experte en stratégie marketing et gestion financière",
    image: "/images/team/josiane.jpg",
    skills: ["Marketing Digital", "Finance", "Stratégie", "Communication"],
    social: {
      linkedin: "https://linkedin.com/in/josiane"
    }
  },
  {
    name: "Mory Koulibaly",
    role: "Développeur",
    description: "Responsable de la conception de l'application mobile",
    image: "/images/team/mory.jpg",
    skills: ["React Native", "Node.js", "UX/UI", "Mobile Dev"],
    social: {
      linkedin: "https://linkedin.com/in/mory",
      twitter: "https://twitter.com/mory"
    }
  },
  {
    name: "Mouloukou Souleymane Deen Sylla",
    role: "Architecte Désigner 3D",
    description: "Expert en conception 3D et visualisation de produits",
    image: "/images/team/soule.jpg",
    skills: ["3D Modeling", "Design", "CAO", "Prototypage"],
    social: {
      linkedin: "https://linkedin.com/in/souleymane"
    }
  },
  {
    name: "Naomi Guilavogui",
    role: "Ingénieure en informatique",
    description: "Spécialiste en développement de solutions embarquées",
    image: "/images/team/naomi.jpg",
    skills: ["Systèmes Embarqués", "C++", "Python", "Électronique"],
    social: {
      linkedin: "https://linkedin.com/in/naomi"
    }
  }
] 