import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-creek-harbour/creek-horizon'] || {
  title: 'Appliance Repairs in Creek Horizon - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Creek Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsCreekHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-horizon"
      subareaName="Creek Horizon"
    />
  );
}