"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Cpu, Zap, Shield } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.65 0.22 250 / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.65 0.22 250 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm text-muted-foreground">
                Tecnología de próxima generación
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-6xl md:text-7xl lg:text-[7rem] leading-[0.95] tracking-tight font-black font-bold leading-tight tracking-tight"
            >
              <span className="text-foreground">MÁS QUE HARDWARE,</span>
              <br />
              <span className="gradient-text">UNA EXPERIENCIA.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Ensamblaje de PCs de alto rendimiento, soporte técnico especializado 
              y hardware premium para gamers, creadores y empresas.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-all duration-300 glow-blue-sm hover:glow-blue"
              >
                Agendar Cita
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#catalogo"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground glass rounded-xl glass-hover transition-all duration-300"
              >
                <Play className="h-5 w-5" />
                Ver Productos
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: "500+", label: "PCs Ensambladas" },
                { value: "98%", label: "Satisfacción" },
                { value: "24/7", label: "Soporte" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary glow-text-blue">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="relative hidden lg:block"
>
  <div className="relative flex items-center justify-center">
    
    {/* Background Glow */}
    <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />

    {/* Rotating Ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute w-[520px] h-[520px] rounded-full border border-primary/20"
    />

    {/* Secondary Ring */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute w-[420px] h-[420px] rounded-full border border-primary/10"
    />

    {/* PC IMAGE */}
    <motion.img
      src="/LOGOW3.png"
      alt="GOSWARE PC"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 w-[480px] drop-shadow-[0_0_40px_rgba(0,119,255,0.45)]"
    />

    {/* Floating Glass Cards */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute top-10 left-0 glass rounded-2xl px-5 py-4 glow-blue-sm"
    >
      <div className="text-sm text-muted-foreground">FPS ULTRA</div>
      <div className="text-2xl font-bold text-primary">240+</div>
    </motion.div>

    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute bottom-10 right-0 glass rounded-2xl px-5 py-4 glow-blue-sm"
    >
      <div className="text-sm text-muted-foreground">RTX READY</div>
      <div className="text-2xl font-bold text-primary">AI POWER</div>
    </motion.div>
  </div>
</motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,119,255,0.9)]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
