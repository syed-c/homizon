import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/palm-jumeirah/atlantis-area'] || {
  title: 'AC Servicing in Atlantis Area - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Atlantis Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAtlantisAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="atlantis-area"
      subareaName="Atlantis Area"
    />
  );
}