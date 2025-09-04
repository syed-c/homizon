import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-creek-harbour/creek-gate'] || {
  title: 'Appliance Repairs in Creek Gate - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Creek Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsCreekGatePage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-gate"
      subareaName="Creek Gate"
    />
  );
}