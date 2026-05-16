"use client"

import { motion } from "framer-motion"
import { Monitor, MapPin, Clock, Shield, CheckCircle, Headphones } from "lucide-react"
import Link from "next/link"

const supportTypes = [
  {
    type: "Soporte Remoto",
    icon: Monitor,
    description:
      "Asistencia técnica desde cualquier lugar. Nos conectamos a tu equipo de forma segura para diagnosticar y resolver problemas en tiempo real.",
    features: [
      "Diagnóstico instantáneo",
      "Conexión segura encriptada",
      "Sin desplazamientos",
      "Disponible 24/7",
    ],
    cta: "Solicitar soporte remoto",
    highlight: true,
  },
  {
    type: "Soporte Presencial",
    icon: MapPin,
    description:
      "Servicio técnico a domicilio o en nuestras instalaciones. Ideal para reparaciones de hardware, upgrades y configuraciones complejas.",
    features: [
      "Visita a domicilio",
      "Reparación de hardware",
      "Instalación de componentes",
      "Garantía de servicio",
    ],
    cta: "Agendar visita técnica",
    highlight: false,
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Respuesta Rápida",
    description: "Atención en menos de 2 horas para casos urgentes.",
  },
  {
    icon: Shield,
    title: "Garantía Total",
    description: "Todos nuestros servicios incluyen garantía de satisfacción.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Equipo técnico disponible las 24 horas, los 7 días.",
  },
]

export function Support() {
  return (
    <section id="soporte" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
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
            Soporte Técnico
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Estamos para{" "}
            <span className="gradient-text">ayudarte</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Soporte técnico profesional cuando y donde lo necesites.
          </p>
        </motion.div>

        {/* Support Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {supportTypes.map((support, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`relative h-full p-8 rounded-2xl overflow-hidden transition-all duration-500 ${
                  support.highlight
                    ? "glass border-primary/30"
                    : "glass glass-hover"
                }`}
              >
                {/* Highlight Glow */}
                {support.highlight && (
                  <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-2xl" />
                )}

                <div className="relative z-10">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-4 rounded-xl ${
                        support.highlight
                          ? "bg-primary/20"
                          : "bg-gradient-to-br from-blue-500/20 to-blue-700/10 border border-blue-400/10 backdrop-blur-xl group-hover:bg-primary/20"
                      } transition-colors`}
                    >
                      <support.icon className="h-8 w-8 text-primary" />
                    </div>
                    {support.highlight && (
                      <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                        Recomendado
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{support.type}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {support.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {support.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="#contacto"
                    className={`inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      support.highlight
                        ? "text-primary-foreground bg-primary hover:bg-primary/90 glow-blue-sm hover:glow-blue"
                        : "text-foreground glass glass-hover"
                    }`}
                  >
                    {support.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl glass glass-hover"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
