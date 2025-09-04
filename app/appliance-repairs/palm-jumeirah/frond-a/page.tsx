import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/palm-jumeirah/frond-a'] || {
  title: 'Appliance Repairs in Frond A - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Frond A. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsFrondAPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-a"
      subareaName="Frond A"
    />
  );
}