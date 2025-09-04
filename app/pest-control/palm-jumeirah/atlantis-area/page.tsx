import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/palm-jumeirah/atlantis-area'] || {
  title: 'Pest Control in Atlantis Area - Professional Services | HOMIZON',
  description: 'Professional pest control services in Atlantis Area. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAtlantisAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="atlantis-area"
      subareaName="Atlantis Area"
    />
  );
}