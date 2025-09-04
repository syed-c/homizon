import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-karama/karama-residential'] || {
  title: 'Bathroom Plumbing in Karama Residential - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Karama Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingKaramaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-residential"
      subareaName="Karama Residential"
    />
  );
}