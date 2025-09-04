import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-furjan'] || {
  title: 'Bathroom Plumbing in Al Furjan - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Furjan. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlFurjanPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-furjan"
      areaName="Al Furjan"
    />
  );
}