import { Hero } from '@/components/hero'
import { PracticeSection } from '@/components/practice-section'
import { ForYouSection } from '@/components/for-you-section'
import { CountdownOffer } from '@/components/countdown-offer'
import { SocialProof } from '@/components/social-proof'
import { OfferCard } from '@/components/offer-card'
import { Guarantee } from '@/components/guarantee'
import { Faq } from '@/components/faq'
import { FooterCta } from '@/components/footer-cta'

<!-- Pixel X App - START -->
<script type='text/javascript'>
!function(){var e=window.location.href,t=document.title,n=Date.now(),o=document.createElement('script');o.src='https://pxa.ingresosrentables.site/remote?url='+encodeURIComponent(e)+'&title='+encodeURIComponent(t)+'&time='+n,o.async=!0,document.head.appendChild(o)}()
</script>
<!-- Pixel X App - END -->

export function SalesPage({ price }: { price: string }) {
  return (
    <main className="min-h-screen bg-background">
      <Hero price={price} />
      <PracticeSection />
      <ForYouSection />
      <CountdownOffer price={price} />
      <SocialProof />
      <OfferCard price={price} />
      <Guarantee />
      <Faq price={price} />
      <FooterCta price={price} />
    </main>
  )
}
