const items = [
  {
    n: '1',
    title: 'Crear un menú variado',
    text: 'Ten opciones cremosas, frutales, económicas y premium para diferentes clientes.',
  },
  {
    n: '2',
    title: 'Mejorar la textura',
    text: 'Sigue cantidades y recomendaciones que ayudan a reducir errores comunes.',
  },
  {
    n: '3',
    title: 'Evitar pruebas innecesarias',
    text: 'No desperdicies tiempo ni ingredientes inventando cada combinación desde cero.',
  },
  {
    n: '4',
    title: 'Comenzar como principiante',
    text: 'Consulta instrucciones claras y organizadas, aunque nunca hayas preparado paletas rellenas.',
  },
]

export function ForYouSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-display text-2xl font-extrabold text-brand-brown text-balance sm:text-3xl">
          Este recetario fue creado para ti que…
        </h2>

        <ul className="mt-8 space-y-4">
          {items.map((item) => (
            <li
              key={item.n}
              className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-sm"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-coral font-display text-lg font-extrabold text-white">
                {item.n}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-brand-brown">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/75">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
