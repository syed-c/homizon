import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/palm-jumeirah/frond-c'] || {
  title: 'Appliance Repairs in Frond C - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Frond C. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsFrondCPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-c"
      subareaName="Frond C"
    />
  );
}