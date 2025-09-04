import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-investment-park/green-community-dip'] || {
  title: 'Appliance Repairs in Green Community DIP - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Green Community DIP. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsGreenCommunityDIPPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="green-community-dip"
      subareaName="Green Community DIP"
    />
  );
}