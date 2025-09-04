import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/palm-jumeirah'] || {
  title: 'Appliance Repairs in Palm Jumeirah - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Palm Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsPalmJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
    />
  );
}