import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-investment-park/dip-1'] || {
  title: 'Appliance Repairs in DIP 1 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in DIP 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDIP1Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-1"
      subareaName="DIP 1"
    />
  );
}