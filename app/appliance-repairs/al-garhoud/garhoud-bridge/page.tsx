import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-garhoud/garhoud-bridge'] || {
  title: 'Appliance Repairs in Garhoud Bridge - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Garhoud Bridge. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsGarhoudBridgePage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="garhoud-bridge"
      subareaName="Garhoud Bridge"
    />
  );
}