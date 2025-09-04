import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/bur-dubai/textile-souk'] || {
  title: 'Appliance Repairs in Textile Souk - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Textile Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsTextileSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="textile-souk"
      subareaName="Textile Souk"
    />
  );
}