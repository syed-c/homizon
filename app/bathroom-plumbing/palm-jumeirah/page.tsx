import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/palm-jumeirah'] || {
  title: 'Bathroom Plumbing in Palm Jumeirah - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Palm Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingPalmJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
    />
  );
}