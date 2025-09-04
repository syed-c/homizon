import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-south/golf-links'] || {
  title: 'Appliance Repairs in Golf Links - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Golf Links. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsGolfLinksPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-south"
      areaName="Dubai South"
      subarea="golf-links"
      subareaName="Golf Links"
    />
  );
}