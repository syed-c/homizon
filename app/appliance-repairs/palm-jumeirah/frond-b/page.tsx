import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/palm-jumeirah/frond-b'] || {
  title: 'Appliance Repairs in Frond B - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Frond B. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsFrondBPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-b"
      subareaName="Frond B"
    />
  );
}