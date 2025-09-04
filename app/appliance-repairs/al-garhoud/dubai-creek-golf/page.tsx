import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-garhoud/dubai-creek-golf'] || {
  title: 'Appliance Repairs in Dubai Creek Golf - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Creek Golf. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiCreekGolfPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="dubai-creek-golf"
      subareaName="Dubai Creek Golf"
    />
  );
}