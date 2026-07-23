'use client'

import { useEffect, useState } from 'react'
import { CtaButton } from './cta-button'

const TOTAL_SECONDS = 15 * 60

export function CountdownOffer({ price }: { price: string }) {
  const [remaining, setRemaining] = useState(TOTAL_SECONDS)

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((prev) => (prev <= 0 ? 0 : prev - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const minutes = Math.floor(remaining / 60)
  const seconds = remaining % 60

  return (
    <section className="bg-brand-brown px-4 py-12 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-2xl font-extrabold text-cream text-balance sm:text-3xl">
          Oferta por tiempo limitado
        </h2>

        <div className="mt-6 flex items-center justify-center gap-3">
          <TimeBox value={minutes} label="MIN" />
          <span className="font-display text-3xl font-extrabold text-cream">:</span>
          <TimeBox value={seconds} label="SEG" />
        </div>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-cream/85 text-pretty">
          El precio de {price} es solo por hoy. Cuando el cronómetro llegue a cero, el valor vuelve a
          subir. Pago único, sin mensualidades y con acceso digital. Asegura tu acceso ahora mismo.
        </p>

        <div className="mt-6 flex justify-center">
          <CtaButton
            label="QUIERO MIS 100 RECETAS"
            sublabel={`Solo hoy por ${price} en lugar de $19,90`}
          />
        </div>
      </div>
    </section>
  )
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex w-20 flex-col items-center rounded-2xl bg-cream px-4 py-3 shadow-lg">
      <span className="font-display text-4xl font-extrabold tabular-nums text-brand-brown">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 text-xs font-bold tracking-wide text-brand-coral">{label}</span>
    </div>
  )
}
