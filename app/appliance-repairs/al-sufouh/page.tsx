import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-sufouh'] || {
  title: 'Appliance Repairs in Al Sufouh - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Sufouh. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlSufouhPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-sufouh"
      areaName="Al Sufouh"
    />
  );
}