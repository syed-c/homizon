import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jumeirah'] || {
  title: 'Bathroom Plumbing in Jumeirah - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jumeirah"
      areaName="Jumeirah"
    />
  );
}