import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-barari'] || {
  title: 'Appliance Repairs in Al Barari - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Barari. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlBarariPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-barari"
      areaName="Al Barari"
    />
  );
}