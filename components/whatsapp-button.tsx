"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "1234567890"
  const defaultMessage = encodeURIComponent(
    "Hola! Me gustaría obtener más información sobre sus servicios."
  )

  const quickMessages = [
    { label: "Cotizar una PC", message: "Hola! Me gustaría cotizar una PC personalizada." },
    { label: "Soporte técnico", message: "Hola! Necesito soporte técnico para mi equipo." },
    { label: "Consultar productos", message: "Hola! Me interesa consultar sobre sus productos." },
    { label: "Información general", message: "Hola! Me gustaría obtener más información sobre GOSWARE." },
  ]

  const handleQuickMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-72 p-4 rounded-2xl glass shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">Chat con nosotros</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              ¡Hola! ¿En qué podemos ayudarte hoy?
            </p>

            <div className="space-y-2">
              {quickMessages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickMessage(item.message)}
                  className="w-full text-left px-4 py-3 text-sm rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Abrir WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-4 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-colors"
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-25" />
        
        {/* Online Indicator */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-background" />
      </motion.button>
    </div>
  )
}
