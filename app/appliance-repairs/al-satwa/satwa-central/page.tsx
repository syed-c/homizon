import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-satwa/satwa-central'] || {
  title: 'Appliance Repairs in Satwa Central - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Satwa Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsSatwaCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="satwa-central"
      subareaName="Satwa Central"
    />
  );
}