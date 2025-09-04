import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-karama/karama-souk'] || {
  title: 'Bathroom Plumbing in Karama Souk - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Karama Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingKaramaSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-souk"
      subareaName="Karama Souk"
    />
  );
}