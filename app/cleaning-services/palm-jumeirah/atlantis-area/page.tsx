import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/palm-jumeirah/atlantis-area'] || {
  title: 'Cleaning Services in Atlantis Area - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Atlantis Area. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAtlantisAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="atlantis-area"
      subareaName="Atlantis Area"
    />
  );
}