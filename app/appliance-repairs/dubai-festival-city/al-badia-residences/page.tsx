import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-festival-city/al-badia-residences'] || {
  title: 'Appliance Repairs in Al Badia Residences - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Badia Residences. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlBadiaResidencesPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="al-badia-residences"
      subareaName="Al Badia Residences"
    />
  );
}