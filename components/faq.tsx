'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const buildFaqs = (price: string) => [
  {
    q: '¿El producto es físico o digital?',
    a: 'Es un producto completamente digital. No recibirás ningún material físico en tu domicilio.',
  },
  {
    q: '¿Cómo recibiré el acceso?',
    a: 'Después de la confirmación del pago, recibirás las instrucciones para acceder al recetario digital.',
  },
  {
    q: '¿Necesito experiencia?',
    a: 'No. El contenido fue organizado para principiantes, con ingredientes, cantidades y preparación paso a paso.',
  },
  {
    q: '¿Puedo verlo desde mi celular?',
    a: 'Sí. Puedes consultar el material desde tu celular, computadora o tablet.',
  },
  {
    q: '¿Los ingredientes se consiguen en México?',
    a: 'Las recetas priorizan ingredientes comunes y fáciles de encontrar en México. Algunas opciones premium pueden utilizar ingredientes específicos.',
  },
  {
    q: '¿Necesito una máquina profesional?',
    a: 'No. Puedes comenzar con utensilios básicos de cocina y moldes para paletas. Los materiales necesarios pueden variar según la receta.',
  },
  {
    q: '¿Tengo que pagar cada mes?',
    a: `No. El precio de ${price} corresponde a un pago único.`,
  },
  {
    q: '¿Puedo imprimir el material?',
    a: 'Sí. Puedes imprimir las páginas que prefieras utilizar durante la preparación.',
  },
  {
    q: '¿Las recetas sirven para vender?',
    a: 'Sí. El recetario contiene opciones económicas, premium, rellenas y mini paletas que pueden utilizarse para crear un menú. Los resultados dependen de factores como ejecución, calidad, costos, precios, divulgación y demanda local. El producto no garantiza ingresos.',
  },
]

export function Faq({ price }: { price: string }) {
  const [open, setOpen] = useState<number | null>(0)
  const faqs = buildFaqs(price)

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-display text-2xl font-extrabold text-brand-brown text-balance sm:text-3xl">
          Preguntas frecuentes
        </h2>

        <ul className="mt-8 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.q} className="overflow-hidden rounded-2xl bg-card shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base font-bold text-brand-brown">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      'flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-coral text-white transition-transform',
                      isOpen && 'rotate-180',
                    )}
                  >
                    <ChevronDown className="size-4" strokeWidth={3} />
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-foreground/75">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
