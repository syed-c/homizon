import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-nahda/nahda-2'] || {
  title: 'Bathroom Plumbing in Nahda 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Nahda 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingNahda2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-nahda"
      areaName="Al Nahda"
      subarea="nahda-2"
      subareaName="Nahda 2"
    />
  );
}