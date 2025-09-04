import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-barsha/al-barsha-south'] || {
  title: 'Appliance Repairs in Al Barsha South - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Barsha South. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlBarshaSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-south"
      subareaName="Al Barsha South"
    />
  );
}