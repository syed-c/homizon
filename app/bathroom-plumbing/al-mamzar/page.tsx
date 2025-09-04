import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-mamzar'] || {
  title: 'Bathroom Plumbing in Al Mamzar - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Mamzar. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlMamzarPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-mamzar"
      areaName="Al Mamzar"
    />
  );
}