import { CtaButton } from './cta-button'

export function FooterCta({ price, checkoutUrl }: { price: string; checkoutUrl?: string }) {
  return (
    <footer className="bg-brand-brown px-4 py-12">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="flex w-full justify-center">
          <CtaButton
            label="QUIERO MIS 100 RECETAS"
            sublabel={`Acceso inmediato por solo ${price}`}
            href={checkoutUrl}
          />
        </div>
        <p className="mt-8 text-xs leading-relaxed text-cream/70 text-pretty">
          Este es un producto digital. El resultado depende de la aplicación de las recetas. 100
          Paletas Rellenas y Cremosas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
