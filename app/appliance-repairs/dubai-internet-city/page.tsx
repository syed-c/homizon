import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-internet-city'] || {
  title: 'Appliance Repairs in Dubai Internet City - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Internet City. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiInternetCityPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-internet-city"
      areaName="Dubai Internet City"
    />
  );
}