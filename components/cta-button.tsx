import { cn } from '@/lib/utils'

export const CHECKOUT_URL =
  'https://pay.hotmart.com/L102630763K?off=mqy5d99k&checkoutMode=10'

interface CtaButtonProps {
  label: string
  sublabel?: string
  className?: string
}

export function CtaButton({ label, sublabel, className }: CtaButtonProps) {
  return (
    <a
      href={CHECKOUT_URL}
      className={cn(
        'botao-compra flex w-full max-w-md flex-col items-center rounded-2xl bg-brand-green px-6 py-4 text-center font-display text-white shadow-lg shadow-brand-green/30 transition-all hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-xl active:translate-y-0',
        className,
      )}
      data-buy-button="true"
    >
      <span className="text-lg font-extrabold leading-tight sm:text-xl">{label}</span>
      {sublabel ? (
        <span className="mt-1 text-xs font-semibold text-white/90 sm:text-sm">{sublabel}</span>
      ) : null}
    </a>
  )
}
