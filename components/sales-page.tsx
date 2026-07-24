import { Hero } from '@/components/hero'
import { PracticeSection } from '@/components/practice-section'
import { ForYouSection } from '@/components/for-you-section'
import { CountdownOffer } from '@/components/countdown-offer'
import { SocialProof } from '@/components/social-proof'
import { OfferCard } from '@/components/offer-card'
import { Guarantee } from '@/components/guarantee'
import { Faq } from '@/components/faq'
import { FooterCta } from '@/components/footer-cta'


<<<<<<< HEAD
export function SalesPage({ price, checkoutUrl }: { price: string; checkoutUrl?: string }) {
=======
export function SalesPage({ price }: { price: string }) {
>>>>>>> d08a7aa6fb7f56c6d22f2eccd15f0f06d40b5f78
  return (
    <main className="min-h-screen bg-background">
      <Hero price={price} checkoutUrl={checkoutUrl} />
      <PracticeSection />
      <ForYouSection />
      <CountdownOffer price={price} checkoutUrl={checkoutUrl} />
      <SocialProof />
      <OfferCard price={price} checkoutUrl={checkoutUrl} />
      <Guarantee />
      <Faq price={price} />
      <FooterCta price={price} checkoutUrl={checkoutUrl} />
    </main>
  )
}
