import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-satwa'] || {
  title: 'Appliance Repairs in Al Satwa - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Satwa. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlSatwaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-satwa"
      areaName="Al Satwa"
    />
  );
}