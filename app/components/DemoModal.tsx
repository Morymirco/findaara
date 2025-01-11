'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: 'mini',
    preferredDate: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 1500))
      onClose()
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        productInterest: 'mini',
        preferredDate: '',
        message: ''
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-gradient-to-br from-red-950 to-red-900/50 p-8 rounded-xl border border-red-900/20 backdrop-blur-sm max-w-2xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6 text-yellow-500">
              Planifier une démonstration
            </h2>
            
            <p className="text-yellow-100 mb-8">
              Découvrez en direct nos solutions innovantes et comment elles peuvent transformer votre exploitation avicole.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-yellow-200 mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-red-900/30 border border-red-700 text-yellow-100 placeholder-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-yellow-200 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-red-900/30 border border-red-700 text-yellow-100 placeholder-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-yellow-200 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-red-900/30 border border-red-700 text-yellow-100 placeholder-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-yellow-200 mb-2">Entreprise/Ferme</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-red-900/30 border border-red-700 text-yellow-100 placeholder-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-yellow-200 mb-2">Produit d'intérêt</label>
                <select
                  value={formData.productInterest}
                  onChange={e => setFormData(prev => ({ ...prev, productInterest: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-red-900/30 border border-red-700 text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="mini">Couveuse Mini</option>
                  <option value="pro">Couveuse Pro</option>
                  <option value="max">Couveuse Max</option>
                  <option value="farm">Ferme Intelligente</option>
                </select>
              </div>

              <div>
                <label className="block text-yellow-200 mb-2">Date souhaitée</label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={e => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-red-900/30 border border-red-700 text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-yellow-200 mb-2">Message (optionnel)</label>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-red-900/30 border border-red-700 text-yellow-100 placeholder-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 rounded-lg border border-red-700 text-yellow-500 hover:bg-red-900/50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded-lg bg-red-600 text-yellow-500 hover:bg-red-700 transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Envoi...' : 'Planifier la démo'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 