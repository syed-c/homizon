import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jumeirah'] || {
  title: 'Appliance Repairs in Jumeirah - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jumeirah"
      areaName="Jumeirah"
    />
  );
}