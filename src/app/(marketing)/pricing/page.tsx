import { Hero } from '@/components/marketing/hero/hero';
import { Features } from '@/components/marketing/features/features';
import { Pricing } from '@/components/marketing/pricing/pricing';
import { Testimonials } from '@/components/marketing/testimonials/testimonials';

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
    </>
  );
}
