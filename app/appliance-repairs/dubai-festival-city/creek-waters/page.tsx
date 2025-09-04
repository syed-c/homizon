import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-festival-city/creek-waters'] || {
  title: 'Appliance Repairs in Creek Waters - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Creek Waters. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsCreekWatersPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="creek-waters"
      subareaName="Creek Waters"
    />
  );
}