import Image from 'next/image'
import { Check, Gift } from 'lucide-react'
import { CtaButton } from './cta-button'

const features = [
  '100 recetas organizadas',
  'Ingredientes y cantidades',
  'Preparación paso a paso',
  'Bases cremosas y frutales',
  'Rellenos y combinaciones',
  'Sabores económicos',
  'Sabores premium',
  'Paletas inspiradas en postres',
  'Mini paletas para reuniones y eventos',
  'Consejos de textura',
  'Ideas de presentación',
  'Acceso digital inmediato',
]

const bonuses = [
  'Bono: Precio Justo para Cada Paleta',
  'Bono: 12 Menús Listos para Paletas',
  'Bono: 50 Mensajes Listos para Vender',
  'Bono: 30 Combos Rentables de Paletas',
]

export function OfferCard({ price }: { price: string }) {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-xl overflow-hidden rounded-3xl bg-card shadow-xl">
        <div className="bg-brand-coral py-2 text-center">
          <span className="font-display text-sm font-extrabold tracking-wide text-white">
            PROMOCIÓN DE LANZAMIENTO
          </span>
        </div>

        <div className="p-6">
          <h2 className="text-center font-display text-2xl font-extrabold text-brand-brown text-balance">
            Todo lo que recibirás
          </h2>
          <p className="mt-1 text-center font-display font-bold text-brand-coral">
            100 Recetas de Paletas Rellenas
          </p>

          <div className="mt-4 overflow-hidden rounded-2xl">
            <Image
              src="/images/ebook-mockup.png"
              alt="Recetario '100 Paletas Rellenas y Cremosas' con 100 recetas, rodeado de fichas de recetas de fresa, coco, maracuyá, cookies & cream y un tablet con la receta de guayaba"
              width={700}
              height={500}
              className="h-auto w-full"
            />
          </div>

          <ul className="mt-6 space-y-2">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold text-brand-brown">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl bg-cream-card p-4">
            <p className="text-center font-display text-sm font-extrabold tracking-wide text-brand-coral">
              BONOS INCLUIDOS GRATIS
            </p>
            <ul className="mt-3 space-y-2">
              {bonuses.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-gold text-white">
                    <Gift className="size-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-semibold text-brand-brown">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-foreground/60">
              Valor de referencia: <span className="line-through">$19,90</span>
            </p>
            <p className="font-display text-5xl font-extrabold text-brand-green">{price}</p>
            <p className="mt-1 text-xs font-semibold text-foreground/60">
              Pago único · Sin mensualidades · Producto digital
            </p>
          </div>

          <div className="mt-5 flex justify-center">
            <CtaButton label="SÍ, QUIERO LAS 100 RECETAS" sublabel="Compra 100% segura" />
          </div>
        </div>
      </div>
    </section>
  )
}
