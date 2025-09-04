import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/the-greens/al-ghaf'] || {
  title: 'Appliance Repairs in Al Ghaf - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Ghaf. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlGhafPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="the-greens"
      areaName="The Greens"
      subarea="al-ghaf"
      subareaName="Al Ghaf"
    />
  );
}