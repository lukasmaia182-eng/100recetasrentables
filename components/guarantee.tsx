import Image from 'next/image'

export function Guarantee() {
  return (
    <section className="bg-cream-card px-4 py-12">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Image
          src="/images/guarantee.png"
          alt="Sello de garantía de 7 días"
          width={160}
          height={160}
          className="h-32 w-32 object-contain"
        />
        <h2 className="mt-4 font-display text-2xl font-extrabold text-brand-brown text-balance sm:text-3xl">
          Prueba el recetario durante 7 días
        </h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/80 text-pretty">
          Después de realizar la compra, tendrás siete días naturales para revisar el contenido. Si
          durante ese plazo consideras que el material no corresponde a lo presentado en esta
          página, podrás solicitar el reembolso de acuerdo con las condiciones de la plataforma de
          pago utilizada. Así puedes acceder al recetario y comprobar el contenido con tranquilidad.
        </p>
      </div>
    </section>
  )
}
