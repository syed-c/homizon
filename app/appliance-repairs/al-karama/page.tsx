import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-karama'] || {
  title: 'Appliance Repairs in Al Karama - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Karama. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlKaramaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-karama"
      areaName="Al Karama"
    />
  );
}