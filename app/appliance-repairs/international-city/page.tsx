import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/international-city'] || {
  title: 'Appliance Repairs in International City - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in International City. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsInternationalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="international-city"
      areaName="International City"
    />
  );
}