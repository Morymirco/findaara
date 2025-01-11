'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '../components/Header'
import MotionWrapper from '../components/MotionWrapper'
import InteractiveModel from '../components/InteractiveModel'

// Ajouter l'interface pour le type Incubator
interface Incubator {
  title: string;
  type: string;
  description: string;
  image: string;
  images: {
    front: string;
    side: string;
    perspective: string;
  };
  price: string;
  capacity: string;
  features: string[];
  specifications?: {
    dimensions: string;
    puissance: string;
    poids: string;
    materiaux: string;
  };
}

export default function SolutionsPage() {
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

  const features = [
    {
      icon: "🔧",
      title: "Automatisation avancée",
      description: "Régulation automatique de la température et de l'humidité pour optimiser l'incubation des œufs."
    },
    {
      icon: "⚡",
      title: "Faible consommation",
      description: "Conçues pour fonctionner efficacement avec une consommation réduite d'électricité, idéale pour les zones à ressources limitées."
    },
    {
      icon: "🛡️",
      title: "Fiabilité",
      description: "Résistantes et conçues pour une utilisation intensive avec une durabilité maximale."
    }
  ]

  const incubators: Incubator[] = [
    {
      title: "Couveuse Mini",
      type: "Débutant",
      description: "La solution idéale pour débuter dans l'élevage avicole",
      image: "/images/couveuse-mini.jpg",
      images: {
        front: "/images/couveuse-mini/front.jpg",
        side: "/images/couveuse-mini/side.jpg",
        perspective: "/images/couveuse-mini/perspective.jpg"
      },
      price: "1 500 000 GNF à 2 500 000 GNF",
      capacity: "60 à 120 œufs",
      features: [
        "Contrôle de température précis",
        "Système de ventilation optimisé",
        "Interface tactile intuitive",
        "Connexion WiFi intégrée"
      ],
      specifications: {
        dimensions: "80 x 60 x 50 cm",
        puissance: "200W",
        poids: "15 kg",
        materiaux: "Acier inoxydable et plastique ABS"
      }
    },
    {
      title: "Couveuse Midi",
      type: "Professionnel",
      description: "Pour les exploitations de taille moyenne",
      image: "/images/couveuse-midi.jpg",
      images: {
        front: "/images/couveuse-midi/front.jpg",
        side: "/images/couveuse-midi/side.jpg",
        perspective: "/images/couveuse-midi/perspective.jpg"
      },
      price: "3 000 000 GNF à 7 000 000 GNF",
      capacity: "120 à 500 œufs",
      features: [
        "Double système de contrôle",
        "Monitoring avancé",
        "Alertes en temps réel",
        "Support technique prioritaire"
      ],
      specifications: {
        dimensions: "120 x 80 x 60 cm",
        puissance: "400W",
        poids: "25 kg",
        materiaux: "Acier inoxydable renforcé"
      }
    },
    {
      title: "Couveuse Max Pro",
      type: "Industriel",
      description: "La solution pour les grandes exploitations",
      image: "/images/couveuse-max.jpg",
      images: {
        front: "/images/couveuse-max/front.jpg",
        side: "/images/couveuse-max/side.jpg",
        perspective: "/images/couveuse-max/perspective.jpg"
      },
      price: "8 000 000 GNF à 15 000 000 GNF",
      capacity: "500 à 1000 œufs",
      features: [
        "Intelligence artificielle intégrée",
        "Système multi-zones",
        "Analyse prédictive",
        "Maintenance préventive"
      ],
      specifications: {
        dimensions: "200 x 100 x 80 cm",
        puissance: "800W",
        poids: "45 kg",
        materiaux: "Acier inoxydable industriel"
      }
    }
  ]

  const appFeatures = [
    {
      icon: "📱",
      title: "Suivi en temps réel",
      description: "Visualisez la température, l'humidité et d'autres paramètres essentiels directement sur votre smartphone."
    },
    {
      icon: "🔔",
      title: "Alertes automatiques",
      description: "Notifications immédiates en cas d'anomalie, comme une température instable."
    },
    {
      icon: "📊",
      title: "Historique et analyse",
      description: "Accédez aux données de performance de vos couveuses pour optimiser votre production."
    },
    {
      icon: "🎮",
      title: "Contrôle flexible",
      description: "Passez facilement du mode manuel au mode automatique selon vos besoins."
    }
  ]

  const farmFeatures = [
    {
      title: "Régulateur de Température Avicole (RTA)",
      description: "Système centralisé pour maintenir des conditions optimales",
      benefits: [
        "Contrôle précis de la température",
        "Gestion automatisée de l'humidité",
        "Économies d'énergie significatives"
      ]
    },
    {
      title: "Systèmes de surveillance connectés",
      description: "Surveillance complète de votre exploitation",
      benefits: [
        "Suivi de la santé des animaux",
        "Contrôle de la qualité de l'air",
        "Gestion des niveaux d'alimentation"
      ]
    }
  ]

  const services = [
    {
      icon: "👨‍🏫",
      title: "Formation et sensibilisation",
      description: "Ateliers complets pour maîtriser l'utilisation de nos solutions"
    },
    {
      icon: "🔧",
      title: "Installation et maintenance",
      description: "Assistance technique professionnelle pour vos équipements"
    },
    {
      icon: "🤝",
      title: "Service après-vente",
      description: "Garantie et suivi personnalisé pour votre tranquillité"
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-black to-red-900 pt-20">
          <div className="absolute inset-0 -z-0 opacity-30">
            <Image
              src="/images/solutions-hero.jpg"
              alt="Solutions FINDAARA"
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
              Nos Solutions Innovantes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-yellow-200 max-w-3xl mx-auto"
            >
              Des solutions technologiques avancées pour révolutionner l'élevage avicole
            </motion.p>
          </div>
        </section>

        {/* Couveuses Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
                Couveuses Intelligentes
              </h2>
            </MotionWrapper>

            {/* Caractéristiques principales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-red-900 p-6 rounded-xl"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-500">{feature.title}</h3>
                  <p className="text-yellow-100">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Gamme de couveuses */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {incubators.map((incubator, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-red-900/50 rounded-xl overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={incubator.image}
                      alt={incubator.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-500">{incubator.title}</h3>
                    <ul className="space-y-2 mb-4">
                      <li className="text-yellow-100">
                        <span className="font-bold text-yellow-500">Capacité:</span> {incubator.capacity}
                      </li>
                      <li className="text-yellow-100">
                        <span className="font-bold text-yellow-500">Prix:</span> {incubator.price}
                      </li>
                    </ul>
                    <p className="text-yellow-200">{incubator.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Modèles interactifs des couveuses */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-yellow-500">
                Explorez nos modèles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {incubators.map((incubator, index) => (
                  <InteractiveModel
                    key={index}
                    images={{
                      front: incubator.images.front,
                      side: incubator.images.side,
                      perspective: incubator.images.perspective
                    }}
                    title={incubator.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Mobile Section */}
        <section className="py-20 bg-red-900/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <MotionWrapper>
                  <h2 className="text-4xl font-bold mb-8 text-yellow-500">
                    Application Mobile
                  </h2>
                  <p className="text-yellow-100 mb-8">
                    Une solution technologique pour gérer votre élevage à distance.
                  </p>
                </MotionWrapper>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {appFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-4"
                    >
                      <div className="text-yellow-500 text-2xl">{feature.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-yellow-500">
                          {feature.title}
                        </h3>
                        <p className="text-yellow-100">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="flex-1">
                <Image
                  src="/images/app-mockup.png"
                  alt="Application FINDAARA"
                  width={500}
                  height={600}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ferme Intelligente Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
                Ferme Intelligente
              </h2>
            </MotionWrapper>

            {/* Remplacer la visualisation 3D par une image interactive */}
            <div className="mb-16">
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/images/smart-farm.jpg"
                  alt="Ferme Intelligente FINDAARA"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                    Une solution complète pour votre exploitation
                  </h3>
                  <p className="text-yellow-100 max-w-2xl">
                    Notre concept de ferme intelligente intègre les dernières technologies 
                    pour une gestion optimale de votre élevage.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-yellow-100 text-center max-w-3xl mx-auto mb-12">
              Une solution globale pour une production avicole durable et efficace, intégrant 
              les dernières innovations technologiques.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {farmFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-red-900 p-8 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-4 text-yellow-500">
                    {feature.title}
                  </h3>
                  <p className="text-yellow-100 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-yellow-200">
                        <span className="text-yellow-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Complémentaires */}
        <section className="py-20 bg-red-900/20">
          <div className="container mx-auto px-4">
            <MotionWrapper>
              <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
                Services Complémentaires
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-red-900 p-6 rounded-xl text-center"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-500">
                    {service.title}
                  </h3>
                  <p className="text-yellow-100">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

// Les données pour les différentes sections... 