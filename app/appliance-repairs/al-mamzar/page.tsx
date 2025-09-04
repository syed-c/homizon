import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-mamzar'] || {
  title: 'Appliance Repairs in Al Mamzar - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Mamzar. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlMamzarPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-mamzar"
      areaName="Al Mamzar"
    />
  );
}