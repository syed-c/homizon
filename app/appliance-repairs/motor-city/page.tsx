import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/motor-city'] || {
  title: 'Appliance Repairs in Motor City - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="motor-city"
      areaName="Motor City"
    />
  );
}