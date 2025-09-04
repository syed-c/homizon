import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-mizhar'] || {
  title: 'Appliance Repairs in Al Mizhar - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Mizhar. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlMizharPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-mizhar"
      areaName="Al Mizhar"
    />
  );
}