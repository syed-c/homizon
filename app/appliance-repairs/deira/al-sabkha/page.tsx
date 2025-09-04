import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/deira/al-sabkha'] || {
  title: 'Appliance Repairs in Al Sabkha - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Sabkha. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlSabkhaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="deira"
      areaName="Deira"
      subarea="al-sabkha"
      subareaName="Al Sabkha"
    />
  );
}