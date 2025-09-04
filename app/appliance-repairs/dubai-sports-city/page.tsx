import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-sports-city'] || {
  title: 'Appliance Repairs in Dubai Sports City - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Sports City. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiSportsCityPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
    />
  );
}