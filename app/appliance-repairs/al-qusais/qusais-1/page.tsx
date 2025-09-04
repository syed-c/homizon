import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-qusais/qusais-1'] || {
  title: 'Appliance Repairs in Qusais 1 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Qusais 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsQusais1Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-qusais"
      areaName="Al Qusais"
      subarea="qusais-1"
      subareaName="Qusais 1"
    />
  );
}