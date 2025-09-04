import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/palm-jumeirah/atlantis-area'] || {
  title: 'Bathroom Plumbing in Atlantis Area - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Atlantis Area. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAtlantisAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="atlantis-area"
      subareaName="Atlantis Area"
    />
  );
}