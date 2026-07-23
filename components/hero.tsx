import Image from 'next/image'
import { Check } from 'lucide-react'
import { CtaButton } from './cta-button'

const bullets = [
  '100 recetas explicadas',
  'Ingredientes fáciles de conseguir',
  'Opciones económicas y premium',
  'Ideal para principiantes',
  'Acceso digital inmediato',
]

export function Hero({ price }: { price: string }) {
  return (
    <section className="px-4 pt-10 pb-6 sm:pt-14">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h1 className="font-display text-3xl font-extrabold leading-tight text-brand-brown text-balance sm:text-4xl">
          Ahora puedes preparar paletas cremosas para vender todos los días
        </h1>
        <p className="mt-4 font-display text-lg font-bold text-brand-coral sm:text-xl">
          + de 100 Recetas de Paletas Rellenas, Cremosas y Fáciles de Vender.
        </p>
        <p className="mt-2 text-base leading-relaxed text-foreground/80">
          Para quien quiere ganar dinero desde casa sin necesitar ingredientes caros ni pasar horas
          inventando recetas.
        </p>

        <div className="mt-6 w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/hero-recetario-paletas.png"
            alt="Recetario premium '100 Paletas Rellenas y Cremosas' rodeado de fichas de recetas de paletas cremosas de fresa, coco, maracuyá y cookies & cream, con paletas de varios sabores en la portada."
            width={800}
            height={800}
            priority
            className="h-auto w-full"
          />
        </div>

        <p className="mt-6 text-sm font-semibold text-foreground/70">
          De <span className="line-through">$19,90</span> por solo hoy
        </p>
        <p className="font-display text-5xl font-extrabold text-brand-green">{price}</p>

        <div className="mt-5 flex w-full flex-col items-center">
          <CtaButton
            label="QUIERO LAS 100 RECETAS"
            sublabel="Pago único · Sin mensualidades · Acceso inmediato"
          />
          <p className="mt-3 text-xs font-semibold text-foreground/60">
            Compra 100% segura · 7 días de garantía · Descarga al instante
          </p>
        </div>

        <div className="mt-8 space-y-2">
          <p className="font-display text-lg font-bold text-brand-brown text-pretty">
            Sin anunciar y sin hacer promoción, empiezas… y de repente hay gente esperando.
          </p>
          <p className="font-display text-lg font-bold text-brand-coral">
            Y el dinero empieza a entrar cada semana.
          </p>
        </div>

        <p className="mt-6 text-base leading-relaxed text-foreground/80 text-pretty">
          Deja de desperdiciar ingredientes inventando recetas desde cero. Con el paso a paso ya
          listo preparas sabores de chocolate, frutas, cajeta, leche condensada y postres famosos, y
          armas un menú que puedes vender desde el primer día.
        </p>

        <ul className="mt-6 grid w-full gap-3 text-left sm:grid-cols-2">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-sm"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                <Check className="size-4" strokeWidth={3} />
              </span>
              <span className="text-sm font-semibold text-brand-brown">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
