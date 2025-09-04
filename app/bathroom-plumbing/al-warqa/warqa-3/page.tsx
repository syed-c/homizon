import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-warqa/warqa-3'] || {
  title: 'Bathroom Plumbing in Warqa 3 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Warqa 3. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingWarqa3Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-3"
      subareaName="Warqa 3"
    />
  );
}