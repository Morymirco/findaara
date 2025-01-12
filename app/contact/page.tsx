'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import MotionWrapper from '../components/MotionWrapper'

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-black via-white/5 to-red-900 pt-20">
          <div className="absolute inset-0 -z-0 opacity-30">
            <Image
              src="/images/contact-hero.jpg"
              alt="Contactez FINDAARA"
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
              Contactez-nous
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Formulaire */}
              <div className="max-w-xl">
                <MotionWrapper>
                  <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
                    Envoyez-nous un message
                  </h2>
                </MotionWrapper>

                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">Sujet</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-red-500/20'
                    }`}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>

                  {submitStatus === 'success' && (
                    <p className="text-green-500 text-center">Message envoyé avec succès !</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-center">Une erreur est survenue. Veuillez réessayer.</p>
                  )}
                </motion.form>
              </div>

              {/* Informations de contact */}
              <div className="bg-gradient-to-br from-red-950 to-red-900/50 p-8 rounded-xl border border-white/10">
                <MotionWrapper>
                  <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-500 to-white inline-block text-transparent bg-clip-text">
                    Nos coordonnées
                  </h2>
                </MotionWrapper>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Adresse</h3>
                    <p className="text-white/80">
                      123 Rue Example<br />
                      Conakry, Guinée
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
                    <p className="text-white/80">
                      Email: contact@findaara.com<br />
                      Tél: +224 XX XX XX XX
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Horaires</h3>
                    <p className="text-white/80">
                      Lundi - Vendredi: 8h00 - 18h00<br />
                      Samedi: 9h00 - 13h00
                    </p>
                  </div>

                  {/* Carte Google Maps */}
                  <div className="h-[300px] rounded-lg overflow-hidden border border-white/10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.735223744367!2d-13.6784973!3d9.5357099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd6de25e6d2c3%3A0x6d6fc861f5f754d9!2sConakry%2C%20Guinea!5e0!3m2!1sen!2s!4v1660000000000!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 