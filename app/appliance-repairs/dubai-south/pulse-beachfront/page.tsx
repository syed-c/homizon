import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-south/pulse-beachfront'] || {
  title: 'Appliance Repairs in Pulse Beachfront - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Pulse Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsPulseBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-south"
      areaName="Dubai South"
      subarea="pulse-beachfront"
      subareaName="Pulse Beachfront"
    />
  );
}