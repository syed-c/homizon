import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-south/mag-city'] || {
  title: 'Appliance Repairs in MAG City - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in MAG City. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMAGCityPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-south"
      areaName="Dubai South"
      subarea="mag-city"
      subareaName="MAG City"
    />
  );
}