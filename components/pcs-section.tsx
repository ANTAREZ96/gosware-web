"use client"

import { motion } from "framer-motion"
import { Gamepad2, Briefcase, Video, Cpu, Zap, Fan } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const pcCategories = [
  {
    id: "gaming",
    title: "PC Gaming",
    subtitle: "Máximo rendimiento",
    description:
      "PCs de alto rendimiento para gaming competitivo y AAA. RTX Series, procesadores de última generación y refrigeración premium.",
    icon: Gamepad2,
    specs: ["RTX 4070/4080/4090", "Intel i7/i9 o AMD Ryzen 9", "32GB+ DDR5 RAM", "RGB Personalizable"],
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=600&fit=crop",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    id: "oficina",
    title: "PC Oficina",
    subtitle: "Productividad sin límites",
    description:
      "Estaciones de trabajo optimizadas para profesionales. Silenciosas, eficientes y con componentes de alta durabilidad.",
    icon: Briefcase,
    specs: ["Intel i5/i7 o AMD Ryzen 7", "16GB-32GB DDR5 RAM", "SSD NVMe 1TB+", "Diseño compacto"],
    image: "/3.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "streaming",
    title: "PC Streaming",
    subtitle: "Crea contenido profesional",
    description:
      "Configuraciones optimizadas para streaming, edición de video y creación de contenido con rendimiento multitarea excepcional.",
    icon: Video,
    specs: ["RTX 4070+ / AMD", "AMD Ryzen 9 / Intel i9", "64GB DDR5 RAM", "Doble SSD NVMe"],
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=800&h=600&fit=crop",
    gradient: "from-red-500/20 to-orange-500/20",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export function PcsSection() {
  return (
    <section id="pcs" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(oklch(0.65 0.22 250 / 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
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
          <span className="inline-block px-5 py-2 text-sm font-semibold text-primary bg-gradient-to-br from-blue-500/20 to-blue-700/10 border border-blue-400/10 backdrop-blur-xl border border-blue-400/10 rounded-full mb-4 backdrop-blur-xl">
            Nuestras PCs
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Configuraciones{" "}
            <span className="gradient-text">a tu medida</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Desde gaming extremo hasta productividad profesional, cada PC es ensamblada con precisión.
          </p>
        </motion.div>

        {/* PC Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {pcCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className={`group relative rounded-3xl overflow-hidden ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-white/[0.03] backdrop-blur-2xl border border-white/5 hover:border-blue-400/20 transition-all duration-700 hover:shadow-[0_0_80px_rgba(0,119,255,0.12)]">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className={`relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-700/10 border border-blue-400/10 backdrop-blur-xl">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {category.subtitle}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                      {category.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
                      {category.description}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {category.specs.map((spec, specIndex) => (
                        <div
                          key={specIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,119,255,0.9)]" />
                          <span className="text-muted-foreground">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="#contacto"
                      className="inline-flex items-center justify-center w-fit px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-2xl border border-blue-400/20 hover:scale-105 hover:bg-primary/90 transition-all duration-300 glow-blue-sm hover:glow-blue"
                    >
                      Cotizar ahora
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.92] contrast-100 saturate-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                      
                      {/* Floating Specs Badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10">
                          <div className="flex items-center gap-2">
                            <Cpu className="h-4 w-4 text-primary" />
                            <span className="text-xs text-muted-foreground">High Performance</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-primary" />
                            <span className="text-xs text-muted-foreground">Premium</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Fan className="h-4 w-4 text-primary" />
                            <span className="text-xs text-muted-foreground">Silent</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
