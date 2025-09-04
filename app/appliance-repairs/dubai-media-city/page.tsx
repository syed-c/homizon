import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-media-city'] || {
  title: 'Appliance Repairs in Dubai Media City - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Media City. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiMediaCityPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-media-city"
      areaName="Dubai Media City"
    />
  );
}