import type { Metadata, Viewport } from 'next'
import { Baloo_2, Nunito } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-baloo',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '100 Paletas Rellenas y Cremosas',
  description:
    '+ de 100 Recetas de Paletas Rellenas, Cremosas y Fáciles de Vender. Para quien quiere ganar dinero desde casa sin ingredientes caros ni pasar horas inventando recetas.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FFF8EC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${baloo.variable} ${nunito.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <Script
          src="https://gtm.maquinadeingresos.site/track1click.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://go.recetasrentables.site/track1click.js"
          strategy="afterInteractive"
        />
        {/* Pixel X App - START */}
        <Script id="pixel-x-app" strategy="afterInteractive">
          {`!function(){var e=window.location.href,t=document.title,n=Date.now(),o=document.createElement('script');o.src='https://pxa.recetasrentables.site/remote?url='+encodeURIComponent(e)+'&title='+encodeURIComponent(t)+'&time='+n,o.async=!0,document.head.appendChild(o)}()`}
        </Script>
        {/* Pixel X App - END */}
      </body>
    </html>
  )
}
