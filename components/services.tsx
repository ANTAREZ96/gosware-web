"use client"

import { motion } from "framer-motion"
import { Monitor, Wrench, Server, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "PCs Personalizadas",
    description:
      "Ensamblamos tu PC ideal con componentes premium. Gaming, workstation o uso profesional, diseñamos según tus necesidades.",
    features: ["Componentes certificados", "Garantía extendida", "Optimización incluida"],
  },
  {
    icon: Wrench,
    title: "Técnico Profesional",
    description:
      "Soporte técnico especializado con diagnóstico avanzado. Reparaciones, upgrades y mantenimiento preventivo.",
    features: ["Diagnóstico gratuito", "Servicio express", "Garantía de servicio"],
  },
  {
    icon: Server,
    title: "Soluciones TI",
    description:
      "Infraestructura tecnológica para empresas. Redes, servidores, seguridad y consultoría especializada.",
    features: ["Soporte 24/7", "Monitoreo proactivo", "Escalabilidad"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-5 py-2 text-sm font-semibold text-primary bg-primary/10 border border-blue-400/10 rounded-full mb-4 backdrop-blur-xl">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Soluciones integrales para tu{" "}
            <span className="gradient-text">tecnología</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Desde el ensamblaje de tu PC hasta la gestión completa de tu infraestructura TI.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/5 hover:border-blue-400/20 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(0,119,255,0.15)]">
                {/* Hover Glow Effect */}
                {/* Ambient Light */}
<div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-2xl" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-700/10 border border-blue-400/10 backdrop-blur-xl mb-6 group-hover:scale-110 transition-all duration-500 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold tracking-tight mb-3 flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight className="h-5 w-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed text-[15px] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,119,255,0.9)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
