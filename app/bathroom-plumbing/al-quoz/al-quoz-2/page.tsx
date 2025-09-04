import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-quoz/al-quoz-2'] || {
  title: 'Bathroom Plumbing in Al Quoz 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Quoz 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlQuoz2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-2"
      subareaName="Al Quoz 2"
    />
  );
}