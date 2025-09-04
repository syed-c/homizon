import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/arabian-ranches'] || {
  title: 'Appliance Repairs in Arabian Ranches - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Arabian Ranches. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsArabianRanchesPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="arabian-ranches"
      areaName="Arabian Ranches"
    />
  );
}