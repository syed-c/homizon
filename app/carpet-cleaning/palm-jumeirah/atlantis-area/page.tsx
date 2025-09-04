import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/palm-jumeirah/atlantis-area'] || {
  title: 'Carpet Cleaning in Atlantis Area - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Atlantis Area. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAtlantisAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="atlantis-area"
      subareaName="Atlantis Area"
    />
  );
}