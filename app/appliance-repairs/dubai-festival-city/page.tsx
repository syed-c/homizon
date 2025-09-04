import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-festival-city'] || {
  title: 'Appliance Repairs in Dubai Festival City - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Festival City. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiFestivalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
    />
  );
}