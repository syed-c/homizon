import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jumeirah/al-safa'] || {
  title: 'Bathroom Plumbing in Al Safa - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Safa. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlSafaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-safa"
      subareaName="Al Safa"
    />
  );
}