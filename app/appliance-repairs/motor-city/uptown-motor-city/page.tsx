import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/motor-city/uptown-motor-city'] || {
  title: 'Appliance Repairs in Uptown Motor City - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Uptown Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsUptownMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="motor-city"
      areaName="Motor City"
      subarea="uptown-motor-city"
      subareaName="Uptown Motor City"
    />
  );
}