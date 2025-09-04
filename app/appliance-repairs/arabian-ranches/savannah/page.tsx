import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/arabian-ranches/savannah'] || {
  title: 'Appliance Repairs in Savannah - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Savannah. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsSavannahPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="savannah"
      subareaName="Savannah"
    />
  );
}