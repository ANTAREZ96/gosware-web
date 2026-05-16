"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"


const testimonials = [
  {
    name: "Carlos M.",
    role: "Arquitecto · Oaxaca Centro",
    content:
      "Le da mantenimiento a nuestros equipos del despacho y siempre responde rápido. Muy recomendado.",
  },
  {
    name: "Escuela Primaria",
    role: "Tlalixtac de Cabrera",
    content:
      "Nos ayudó con el laboratorio de cómputo completo y quedó funcionando muy bien.",
  },
  {
    name: "Ing. Javier R.",
    role: "Ingeniero Civil",
    content:
      "Armó una workstation para renders y quedó excelente. Muy buena atención.",
  },
  {
    name: "Mariana T.",
    role: "Diseñadora",
    content:
      "La PC que me recomendó para edición quedó perfecta y muy rápida.",
  },
  {
    name: "Luis A.",
    role: "Streaming y gaming",
    content:
      "Muy buena asesoría para elegir componentes. Todo quedó limpio y funcionando excelente.",
  },
  {
    name: "Laboratorio Escolar",
    role: "Oaxaca",
    content:
      "Nos ayudó con mantenimiento y optimización de varios equipos. Servicio profesional.",
  },
]
export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
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
            Testimonios
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Lo que dicen{" "}
            <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Más de 500 clientes satisfechos respaldan nuestro trabajo.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl glass glass-hover transition-all duration-500">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

               <div className="flex gap-1 mb-4">
  {[...Array(5)].map((_, i) => (
    <Star
      key={i}
      className="h-4 w-4 fill-primary text-primary"
    />
  ))}
</div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
              <div className="flex flex-col">
           <div className="flex flex-col">
  <div className="font-semibold text-foreground">
    {testimonial.name}
  </div>

  <div className="text-sm text-muted-foreground">
    {testimonial.role}
  </div>
</div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
