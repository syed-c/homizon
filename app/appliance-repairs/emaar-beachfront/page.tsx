import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/emaar-beachfront'] || {
  title: 'Appliance Repairs in Emaar Beachfront - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Emaar Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsEmaarBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="emaar-beachfront"
      areaName="Emaar Beachfront"
    />
  );
}