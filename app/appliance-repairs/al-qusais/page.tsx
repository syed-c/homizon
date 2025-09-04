import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-qusais'] || {
  title: 'Appliance Repairs in Al Qusais - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Qusais. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlQusaisPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-qusais"
      areaName="Al Qusais"
    />
  );
}