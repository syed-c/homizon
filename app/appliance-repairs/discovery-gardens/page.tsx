import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/discovery-gardens'] || {
  title: 'Appliance Repairs in Discovery Gardens - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Discovery Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDiscoveryGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="discovery-gardens"
      areaName="Discovery Gardens"
    />
  );
}