import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-investment-park/dip-2'] || {
  title: 'Appliance Repairs in DIP 2 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in DIP 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDIP2Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-2"
      subareaName="DIP 2"
    />
  );
}