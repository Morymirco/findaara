'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import MotionWrapper from '../components/MotionWrapper'

export default function TeamPage() {
  const router = useRouter()

  const handleMemberClick = (memberName: string) => {
    const slug = memberName.toLowerCase().replace(/\s+/g, '-')
    router.push(`/team/${slug}`)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-black via-red-950/20 to-black">
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
        <section className="py-20 bg-gradient-to-t from-black/50 via-transparent to-black/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  onClick={() => handleMemberClick(member.name)}
                  className="bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-lg cursor-pointer group hover:border-white/40 transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="p-6 relative">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-yellow-500 mb-3">{member.role}</p>
                    <p className="text-white/80">{member.description}</p>
                    <div className="mt-4 flex gap-4">
                      {member.social?.linkedin && (
                        <a 
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.social?.twitter && (
                        <a 
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          Twitter
                        </a>
                      )}
                    </div>
                    <div className="absolute bottom-6 right-6 text-yellow-500 group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
    social: {
      linkedin: "https://linkedin.com/in/josiane"
    }
  },
  {
    name: "Mory Koulibaly",
    role: "Ingénieur Logiciel",
    description: "Expert en développement logiciel et architecture des systèmes",
    image: "/images/team/mor.jpg",
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
    social: {
      linkedin: "https://linkedin.com/in/souleymane"
    }
  },
  {
    name: "Naomi Guilavogui",
    role: "Ingénieure en informatique",
    description: "Spécialiste en développement de solutions embarquées",
    image: "/images/team/naomi.jpg",
    social: {
      linkedin: "https://linkedin.com/in/naomi"
    }
  }
] 