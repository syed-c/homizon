import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-nahda'] || {
  title: 'Appliance Repairs in Al Nahda - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Nahda. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlNahdaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-nahda"
      areaName="Al Nahda"
    />
  );
}