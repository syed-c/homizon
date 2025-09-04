import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/arabian-ranches/mirador'] || {
  title: 'Appliance Repairs in Mirador - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Mirador. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMiradorPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="mirador"
      subareaName="Mirador"
    />
  );
}