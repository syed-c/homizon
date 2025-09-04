import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-nahda/nahda-1'] || {
  title: 'Appliance Repairs in Nahda 1 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Nahda 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsNahda1Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-nahda"
      areaName="Al Nahda"
      subarea="nahda-1"
      subareaName="Nahda 1"
    />
  );
}