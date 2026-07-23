import { Hero } from '@/components/hero'
import { PracticeSection } from '@/components/practice-section'
import { ForYouSection } from '@/components/for-you-section'
import { CountdownOffer } from '@/components/countdown-offer'
import { SocialProof } from '@/components/social-proof'
import { OfferCard } from '@/components/offer-card'
import { Guarantee } from '@/components/guarantee'
import { Faq } from '@/components/faq'
import { FooterCta } from '@/components/footer-cta'

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
