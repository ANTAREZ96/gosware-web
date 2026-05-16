"use client"

import { motion } from "framer-motion"
import { Cpu, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  servicios: [
    { name: "PCs Gaming", href: "#pcs" },
    { name: "PCs Oficina", href: "#pcs" },
    { name: "PCs Streaming", href: "#pcs" },
    { name: "Soporte Técnico", href: "#soporte" },
    { name: "Soluciones TI", href: "#servicios" },
  ],
  productos: [
    { name: "Periféricos", href: "#catalogo" },
    { name: "Componentes", href: "#catalogo" },
    { name: "Monitores", href: "#catalogo" },
    { name: "Audio", href: "#catalogo" },
    { name: "Accesorios", href: "#catalogo" },
  ],
  empresa: [
    { name: "Sobre nosotros", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Trabaja con nosotros", href: "#" },
    { name: "Términos y condiciones", href: "#" },
    { name: "Política de privacidad", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden border-t border-white/5 bg-black/20 backdrop-blur-3xl">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 pb-12 border-b border-border">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="#hero" className="inline-flex items-center gap-2 group mb-6">
              <div className="relative">
  <img
    src="/LOGOWHITE.png"
    alt="GOSWARE"
    className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
              <span className="text-3xl font-black tracking-[0.25em] uppercase">
                <span className="text-foreground">GOS</span>
                <span className="text-primary glow-text-blue">WARE</span>
              </span>
            </Link>
            <p className="text-white/55 max-w-md leading-relaxed mb-8 text-[15px]">
              Más que hardware, una experiencia. Somos tu aliado tecnológico para 
              gaming, productividad y soluciones empresariales de alto rendimiento.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:contacto@gosware.com"
                className="flex items-center gap-3 text-white/55 hover:text-primary transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                contacto@gosware.com
              </a>
              <a
                href="tel:+521234567890"
                className="flex items-center gap-3 text-white/55 hover:text-primary transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                +52 123 456 7890
              </a>
              <div className="flex items-center gap-3 text-white/55">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>Av. Tecnología #1234, Ciudad de México</span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid sm:grid-cols-3 gap-8"
          >
            <div>
              <h4 className="font-bold uppercase tracking-wider text-white mb-5 text-sm">Servicios</h4>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/45 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-white mb-5 text-sm">Productos</h4>
              <ul className="space-y-3">
                {footerLinks.productos.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/45 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-white mb-5 text-sm">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/45 hover:text-primary transition-all duration-300 text-sm hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40 tracking-wide">
            © {new Date().getFullYear()} GOSWARE. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-white/50 hover:text-primary hover:border-blue-400/20 hover:shadow-[0_0_25px_rgba(0,119,255,0.2)] transition-all duration-300"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
