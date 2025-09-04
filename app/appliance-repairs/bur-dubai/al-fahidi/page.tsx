import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/bur-dubai/al-fahidi'] || {
  title: 'Appliance Repairs in Al Fahidi - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Fahidi. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlFahidiPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="al-fahidi"
      subareaName="Al Fahidi"
    />
  );
}