"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Cpu } from "lucide-react"
import Link from "next/link"
import { Orbitron } from "next/font/google"
const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Servicios", href: "#servicios" },
  { name: "PCs", href: "#pcs" },
  { name: "Productos", href: "#catalogo" },
  { name: "Soporte", href: "#soporte" },
  { name: "Contacto", href: "#contacto" },
]
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})
export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/25 border-b border-white/5"    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-2 group">
            <div className="relative">
  <img
    src="/LOGOWHITE.png"
    alt="GOSWARE"
    className="h-10 w-auto object-contain transition-all duration-300group-hover:scale-110 brightness-[0.92] contrast-125 saturate-125"
  />
  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
            <span className={`${orbitron.className} text-[1.35rem] leading-none font-medium tracking-[0.18em] uppercase`}>
              <span className="font orbitron text-foreground">GOS</span>
<span className="text-primary glow-text-blue">WARE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 shadow-[0_0_12px_rgba(0,119,255,0.8)] rounded-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-xl border border-blue-400/20 hover:scale-105-primary/90 transition-all duration-300 glow-blue-sm hover:glow-blue"
            >
              Agendar Cita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden mt-2 glass rounded-2xl border border-white/5"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-2"
                >
                  <Link
                    href="#contacto"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-3 text-primary-foreground bg-primary rounded-xl border border-blue-400/20 hover:scale-105 font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Agendar Cita
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
