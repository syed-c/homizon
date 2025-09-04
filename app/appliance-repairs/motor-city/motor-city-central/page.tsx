import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/motor-city/motor-city-central'] || {
  title: 'Appliance Repairs in Motor City Central - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Motor City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMotorCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="motor-city"
      areaName="Motor City"
      subarea="motor-city-central"
      subareaName="Motor City Central"
    />
  );
}