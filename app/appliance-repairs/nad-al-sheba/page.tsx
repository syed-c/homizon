import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/nad-al-sheba'] || {
  title: 'Appliance Repairs in Nad Al Sheba - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Nad Al Sheba. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsNadAlShebaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="nad-al-sheba"
      areaName="Nad Al Sheba"
    />
  );
}