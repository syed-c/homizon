import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-sports-city/sports-city-central'] || {
  title: 'Appliance Repairs in Sports City Central - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Sports City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsSportsCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="sports-city-central"
      subareaName="Sports City Central"
    />
  );
}