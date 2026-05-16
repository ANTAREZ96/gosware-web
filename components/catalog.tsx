"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

export function Catalog() {
  return (
    <section
      id="catalogo"
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto relative z-10">

        {/* TITULO */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary tracking-wide">
              Catálogo Premium
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hardware y accesorios
            <span className="block gradient-text">
              seleccionados
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Componentes, periféricos y tecnología premium disponibles
            bajo pedido y asesoría personalizada.
          </p>
        </div>

        {/* COLLAGE */}
        <div className="relative group">

          {/* Glow */}
          <div className="absolute -inset-1 bg-primary/20 blur-3xl opacity-40 group-hover:opacity-70 transition duration-700" />

          <div className="relative glass rounded-3xl overflow-hidden border border-primary/20">

            <Image
              src="/catalog-collage.png"
              alt="Catálogo GOSWARE"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">

              <div className="max-w-2xl">

                <h3 className="text-2xl md:text-4xl font-bold mb-4">
                  Tecnología premium para
                  <span className="gradient-text"> setups modernos</span>
                </h3>

                <p className="text-muted-foreground mb-6 max-w-xl">
                  SSDs, memorias RAM, monitores gaming, periféricos RGB,
                  accesorios y hardware cuidadosamente seleccionado.
                </p>

                <div className="flex flex-wrap gap-4">

                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 glow-blue"
                    asChild
                  >
                    <a
                      href="https://wa.me/529517774460"
                      target="_blank"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Ver disponibilidad
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href="https://wa.me/529517774460"
                      target="_blank"
                    >
                      Solicitar cotización
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}