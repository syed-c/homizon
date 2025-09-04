import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jumeirah/al-manara'] || {
  title: 'Bathroom Plumbing in Al Manara - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Manara. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlManaraPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-manara"
      subareaName="Al Manara"
    />
  );
}