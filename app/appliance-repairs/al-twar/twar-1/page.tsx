import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-twar/twar-1'] || {
  title: 'Appliance Repairs in Twar 1 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Twar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsTwar1Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-twar"
      areaName="Al Twar"
      subarea="twar-1"
      subareaName="Twar 1"
    />
  );
}