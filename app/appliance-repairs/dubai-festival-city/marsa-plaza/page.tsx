import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-festival-city/marsa-plaza'] || {
  title: 'Appliance Repairs in Marsa Plaza - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Marsa Plaza. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMarsaPlazaPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="marsa-plaza"
      subareaName="Marsa Plaza"
    />
  );
}