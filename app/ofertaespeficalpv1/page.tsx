import Image from 'next/image'
import { Check } from 'lucide-react'

const UPSELL_URL =
  'https://pay.hotmart.com/T106842867W?off=zkp7gvsk&checkoutMode=10&bump=1'

const DECLINE_URL = 'https://recetasrentables.site/acceso'

const features = [
  '150 packs de artes listas para publicar y vender en Instagram',
  'Plantillas para feed, stories y reels editables',
  'Diseños llamativos para mostrar tus paletas rellenas',
  'Frases y llamados a la acción que atraen clientes',
  'Fáciles de personalizar con tu marca y precios',
  'Acceso digital inmediato, incluso para principiantes',
]

export const metadata = {
  title: 'Oferta Especial · 150 Packs para Vender Paletas en Instagram',
  description:
    'Antes de acceder a tus paletas, aprovecha esta oferta única: 150 packs de artes profesionales listas para publicar y vender en Instagram.',
}

export default function OfertaEspecialPv1Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Alerta superior */}
      <div className="bg-brand-coral py-3 text-center">
        <p className="px-4 font-display text-sm font-extrabold tracking-wide text-white sm:text-base">
          ¡Espera! Tu compra aún no termina
        </p>
      </div>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-xl">
          <p className="text-center font-semibold text-brand-brown/80 text-pretty">
            Antes de acceder a tus paletas, aprovecha esta oferta única que no volverás a ver.
          </p>

          <div className="mt-5 flex justify-center">
            <span className="rounded-full bg-brand-gold/15 px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-wide text-brand-gold">
              Oferta exclusiva solo por hoy
            </span>
          </div>

          <h1 className="mt-5 text-center font-display text-3xl font-extrabold leading-tight text-brand-brown text-balance sm:text-4xl">
            Suma 150 Packs para Vender Paletas en Instagram
          </h1>

          <p className="mt-4 text-center font-semibold leading-relaxed text-brand-brown/80 text-pretty">
            Artes profesionales listas para publicar y atraer clientes. Perfectas para mostrar tus
            paletas y vender más todos los días desde tu Instagram.
          </p>

          {/* Card principal */}
          <div className="mt-8 overflow-hidden rounded-3xl bg-card shadow-xl">
            <div className="overflow-hidden">
              <Image
                src="/images/instagram-packs-mockup.png"
                alt="Colección de 150 packs de artes para Instagram mostrando plantillas de feed, stories y reels con fotos de paletas rellenas"
                width={700}
                height={500}
                className="h-auto w-full"
              />
            </div>

            <div className="p-6">
              <ul className="space-y-3">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-semibold text-brand-brown">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-center">
                <p className="text-sm font-semibold text-foreground/60">
                  Valor normal: <span className="line-through">$17,90</span>
                </p>
                <p className="font-display text-5xl font-extrabold text-brand-green">$4,90</p>
                <p className="mt-1 text-xs font-semibold text-foreground/60">
                  Pago único · Solo en esta página · Producto digital
                </p>
              </div>

              <div className="mt-6 flex flex-col items-center">
                <a
                  href={UPSELL_URL}
                  className="botao-compra flex w-full max-w-md flex-col items-center rounded-2xl bg-brand-green px-6 py-4 text-center font-display text-white shadow-lg shadow-brand-green/30 transition-all hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-xl active:translate-y-0"
                  data-buy-button="true"
                >
                  <span className="text-lg font-extrabold leading-tight sm:text-xl">
                    SÍ, QUIERO AGREGAR ESTOS PACKS
                  </span>
                  <span className="mt-1 text-xs font-semibold text-white/90 sm:text-sm">
                    Compra 100% segura
                  </span>
                </a>

                <a
                  href={DECLINE_URL}
                  className="mt-4 text-center text-sm font-semibold text-brand-brown/50 underline underline-offset-4 transition-colors hover:text-brand-brown/80"
                >
                  No, gracias. Prefiero seguir sin esta oferta
                </a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs font-semibold leading-relaxed text-foreground/50 text-pretty">
            Esta oferta solo está disponible en esta página y no se repetirá. Al continuar, aceptas
            recibir el acceso digital de forma inmediata.
          </p>
        </div>
      </section>
    </main>
  )
}
