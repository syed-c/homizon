import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/palm-jumeirah/atlantis-area'] || {
  title: 'Bathroom Deep Cleaning in Atlantis Area - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Atlantis Area. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAtlantisAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="atlantis-area"
      subareaName="Atlantis Area"
    />
  );
}