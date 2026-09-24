import { HeroAtmosphere } from '@/components/home/hero-atmosphere';
import { ManifestoSection } from '@/components/home/manifesto-section';
import { CuratedCollection } from '@/components/home/curated-collection';
import { IntelligenceDesk } from '@/components/home/intelligence-desk';
import { PrivateGateway } from '@/components/home/private-gateway';

export default function HomePage() {
  return (
    <>
      <HeroAtmosphere />
      <ManifestoSection />
      <CuratedCollection />
      <IntelligenceDesk />
      <PrivateGateway />
    </>
  );
}
