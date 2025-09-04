import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-mizhar/mizhar-2'] || {
  title: 'Appliance Repairs in Mizhar 2 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Mizhar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMizhar2Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-2"
      subareaName="Mizhar 2"
    />
  );
}