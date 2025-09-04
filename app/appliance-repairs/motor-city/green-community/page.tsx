import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/motor-city/green-community'] || {
  title: 'Appliance Repairs in Green Community - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Green Community. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsGreenCommunityPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="motor-city"
      areaName="Motor City"
      subarea="green-community"
      subareaName="Green Community"
    />
  );
}