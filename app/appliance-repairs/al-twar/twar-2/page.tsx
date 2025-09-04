import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-twar/twar-2'] || {
  title: 'Appliance Repairs in Twar 2 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Twar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsTwar2Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-twar"
      areaName="Al Twar"
      subarea="twar-2"
      subareaName="Twar 2"
    />
  );
}