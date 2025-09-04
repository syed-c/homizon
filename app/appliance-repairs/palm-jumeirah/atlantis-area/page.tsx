import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/palm-jumeirah/atlantis-area'] || {
  title: 'Appliance Repairs in Atlantis Area - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Atlantis Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAtlantisAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="atlantis-area"
      subareaName="Atlantis Area"
    />
  );
}