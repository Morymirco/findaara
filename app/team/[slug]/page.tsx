'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Header from '../../components/Header'
import Link from 'next/link'

interface TeamMember {
  name: string
  role: string
  description: string
  image: string
  bio: string
  expertise: string[]
  education: string[]
  achievements: string[]
  contact: {
    email: string
    linkedin?: string
    twitter?: string
  }
  projects: {
    title: string
    description: string
    image: string
  }[]
}

const teamMembers: { [key: string]: TeamMember } = {
  "almamy-fode-sylla": {
    name: "Almamy Fodé Sylla",
    role: "Fondateur",
    description: "Ingénieur Réseau et Télécoms spécialisé en IoT et Intelligence Artificielle",
    image: "/images/team/deen.jpg",
    bio: "Fort de plus de 10 ans d'expérience dans le domaine des technologies innovantes, Almamy a fondé FINDAARA avec la vision de révolutionner l'élevage avicole en Afrique. Son expertise en IoT et en IA guide l'innovation technologique de l'entreprise.",
    expertise: [
      "Internet des Objets (IoT)",
      "Intelligence Artificielle",
      "Gestion de Projet",
      "Architecture Système",
      "Innovation Technologique"
    ],
    education: [
      "Master en Ingénierie des Systèmes Embarqués",
      "Diplôme d'Ingénieur en Télécommunications",
      "Certification en Management de l'Innovation"
    ],
    achievements: [
      "Prix de l'Innovation Technologique 2023",
      "Leader Tech Africain de l'Année 2022",
      "10+ brevets déposés dans le domaine de l'IoT"
    ],
    contact: {
      email: "almamy@findaara.com",
      linkedin: "https://linkedin.com/in/almamy",
      twitter: "https://twitter.com/almamy"
    },
    projects: [
      {
        title: "Système de Contrôle Intelligent",
        description: "Développement du système central de contrôle des couveuses FINDAARA",
        image: "/images/projects/control-system.jpg"
      },
      {
        title: "Plateforme IoT",
        description: "Architecture de la plateforme de connexion des appareils",
        image: "/images/projects/iot-platform.jpg"
      }
    ]
  },
  "uwonkunda-makuza-josiane": {
    name: "Uwonkunda Makuza Josiane",
    role: "Finance et Marketing",
    description: "Experte en stratégie marketing et gestion financière",
    image: "/images/team/josiane.jpg",
    bio: "Avec une solide expérience en finance et marketing, Josiane apporte une vision stratégique essentielle au développement de FINDAARA. Elle supervise les aspects financiers et marketing de l'entreprise.",
    expertise: [
      "Marketing Digital",
      "Gestion Financière",
      "Stratégie d'Entreprise",
      "Analyse de Marché",
      "Communication Corporate"
    ],
    education: [
      "Master en Finance d'Entreprise",
      "Bachelor en Marketing International",
      "Certification en Marketing Digital"
    ],
    achievements: [
      "Développement de la stratégie marketing de FINDAARA",
      "Mise en place du système de gestion financière",
      "Augmentation de 200% de la visibilité de la marque"
    ],
    contact: {
      email: "josiane@findaara.com",
      linkedin: "https://linkedin.com/in/josiane"
    },
    projects: [
      {
        title: "Stratégie Marketing 2024",
        description: "Élaboration et mise en œuvre de la stratégie marketing globale",
        image: "/images/projects/marketing.jpg"
      },
      {
        title: "Optimisation Financière",
        description: "Restructuration des processus financiers de l'entreprise",
        image: "/images/projects/finance.jpg"
      }
    ]
  },
  "mory-koulibaly": {
    name: "Mory Mirco Koulibaly",
    role: "Ingénieur Logiciel",
    description: "Expert en développement logiciel et architecture des systèmes",
    image: "/images/team/mor.jpg",
    bio: "Expert en développement logiciel avec une solide expérience dans la conception et l'implémentation de solutions innovantes. Mory dirige le développement technique de FINDAARA, en mettant l'accent sur la qualité et la performance des solutions.",
    expertise: [
      "Architecture Logicielle",
      "Développement Full-Stack",
      "DevOps & Cloud",
      "Systèmes Distribués",
      "Sécurité des Applications"
    ],
    education: [
      "Master en Génie Logiciel",
      "Diplôme d'Ingénieur en Informatique",
      "Certifications Cloud & DevOps"
    ],
    achievements: [
      "Architecture de la plateforme FINDAARA",
      "Mise en place de l'infrastructure cloud",
      "Développement du système de monitoring en temps réel"
    ],
    contact: {
      email: "mory@findaara.com",
      linkedin: "https://linkedin.com/in/mory",
      twitter: "https://twitter.com/mory"
    },
    projects: [
      {
        title: "Plateforme FINDAARA",
        description: "Architecture et développement de la plateforme centrale de gestion",
        image: "/images/projects/platform.jpg"
      },
      {
        title: "Système de Monitoring",
        description: "Conception du système de surveillance en temps réel",
        image: "/images/projects/monitoring.jpg"
      }
    ]
  },
  "mouloukou-souleymane-deen-sylla": {
    name: "Mouloukou Souleymane Deen Sylla",
    role: "Architecte Désigner 3D",
    description: "Expert en conception 3D et visualisation de produits",
    image: "/images/team/soule.jpg",
    bio: "Spécialiste en conception 3D, Souleymane apporte son expertise dans la création et l'optimisation des designs de produits FINDAARA. Sa vision créative contribue à l'excellence de nos solutions.",
    expertise: [
      "Conception 3D",
      "Design Industriel",
      "Prototypage",
      "CAO",
      "Visualisation Produit"
    ],
    education: [
      "Master en Design Industriel",
      "Formation en CAO Avancée",
      "Certification en Prototypage Rapide"
    ],
    achievements: [
      "Design de la gamme de couveuses FINDAARA",
      "Optimisation des processus de fabrication",
      "Réduction des coûts de production de 30%"
    ],
    contact: {
      email: "souleymane@findaara.com",
      linkedin: "https://linkedin.com/in/souleymane"
    },
    projects: [
      {
        title: "Design Couveuse Pro",
        description: "Conception et optimisation de la nouvelle gamme",
        image: "/images/projects/design-3d.jpg"
      },
      {
        title: "Prototypes Innovants",
        description: "Développement de nouveaux concepts de produits",
        image: "/images/projects/prototypes.jpg"
      }
    ]
  },
  "naomi-guilavogui": {
    name: "Naomi Guilavogui",
    role: "Ingénieure en informatique",
    description: "Spécialiste en développement de solutions embarquées",
    image: "/images/team/naomi.jpg",
    bio: "Experte en systèmes embarqués, Naomi dirige le développement des solutions techniques de FINDAARA. Son expertise en électronique et en programmation est cruciale pour nos innovations.",
    expertise: [
      "Systèmes Embarqués",
      "Programmation C++",
      "Électronique",
      "IoT",
      "Automatisation"
    ],
    education: [
      "Master en Systèmes Embarqués",
      "Diplôme d'Ingénieur en Électronique",
      "Certification IoT"
    ],
    achievements: [
      "Développement du firmware des couveuses",
      "Optimisation de la consommation énergétique",
      "Innovation en contrôle automatique"
    ],
    contact: {
      email: "naomi@findaara.com",
      linkedin: "https://linkedin.com/in/naomi"
    },
    projects: [
      {
        title: "Système Embarqué",
        description: "Développement du système de contrôle embarqué",
        image: "/images/projects/embedded.jpg"
      },
      {
        title: "Optimisation Énergétique",
        description: "Amélioration de l'efficacité énergétique",
        image: "/images/projects/energy.jpg"
      }
    ]
  }
}

export default function TeamMemberPage() {
  const { slug } = useParams()
  const member = teamMembers[slug as string]

  if (!member) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-black via-red-950/20 to-black pt-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl text-yellow-500 mb-4">Membre non trouvé</h1>
            <Link href="/team" className="text-white/80 hover:text-white">
              Retourner à l'équipe
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
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-black via-white/5 to-red-900 pt-20">
          <div className="absolute inset-0 -z-0 opacity-30">
            <Image
              src={member.image}
              alt={member.name}
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
              {member.role}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text"
            >
              {member.name}
            </motion.h1>
          </div>
        </section>

        {/* Contenu Principal */}
        <section className="py-16 bg-gradient-to-t from-black/50 via-transparent to-black/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Profil et Contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg">
                  <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Contact</h3>
                    <p className="text-white/80">{member.contact.email}</p>
                    <div className="flex gap-4">
                      {member.contact.linkedin && (
                        <a href={member.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                          LinkedIn
                        </a>
                      )}
                      {member.contact.twitter && (
                        <a href={member.contact.twitter} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                          Twitter
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bio et Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-2 space-y-8"
              >
                <div className="bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 text-white">Biographie</h2>
                  <p className="text-white/80 leading-relaxed">{member.bio}</p>
                </div>

                <div className="bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 text-white">Expertise</h2>
                  <div className="flex flex-wrap gap-3">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-red-900/50 rounded-full text-white/80">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Réalisations et Projets */}
            <div className="mt-12 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6 text-white">Réalisations</h2>
                <ul className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <span className="text-yellow-500 mr-2">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-red-950/80 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6 text-white">Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {member.projects.map((project, index) => (
                    <div key={index} className="space-y-4">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-white/80">{project.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 