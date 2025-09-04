import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-creek-harbour/creek-beach'] || {
  title: 'Appliance Repairs in Creek Beach - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Creek Beach. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsCreekBeachPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-beach"
      subareaName="Creek Beach"
    />
  );
}