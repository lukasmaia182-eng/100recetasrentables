import Image from 'next/image'

const cards = [
  {
    src: '/images/social-1.png',
    alt: 'Mujer empacando paletas cremosas en una caja lista para vender desde casa',
    caption: 'Lista para vender desde casa.',
  },
  {
    src: '/images/social-2.png',
    alt: 'Mujer consultando las recetas de paletas desde su celular en la cocina',
    caption: 'Ya tengo mis recetas.',
  },
  {
    src: '/images/social-3.png',
    alt: 'Mujer sonriente mostrando una tabla con sus primeras paletas cremosas',
    caption: 'Mis primeras paletas.',
  },
  {
    src: '/images/social-4.png',
    alt: 'Manos sosteniendo la ficha de la receta paleta cremosa de mango',
    caption: 'Seguí el paso a paso.',
  },
  {
    src: '/images/social-5.png',
    alt: "Mujer empacando paletas con etiquetas 'Hecho con amor' y recibiendo pedidos por WhatsApp",
    caption: 'Mi producción en casa.',
  },
  {
    src: '/images/social-6.png',
    alt: 'Mujer sosteniendo una ficha de receta de paleta cremosa de fresa en su negocio de postres',
    caption: 'Nuevo producto para mi menú.',
  },
]

export function SocialProof() {
  return (
    <section className="bg-brand-coral px-0 py-12">
      <h2 className="px-4 text-center font-display text-2xl font-extrabold text-white text-balance sm:text-3xl">
        Ellas ya están creando sus propias paletas
      </h2>

      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cards.map((card, i) => (
          <figure
            key={`${card.src}-${i}`}
            className="w-56 shrink-0 snap-center overflow-hidden rounded-2xl bg-card shadow-lg"
          >
            <Image
              src={card.src || '/placeholder.svg'}
              alt={card.alt}
              width={320}
              height={320}
              className="h-56 w-full object-cover"
            />
            <figcaption className="px-4 py-3">
              <p className="text-center text-sm font-bold text-brand-brown">{card.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
