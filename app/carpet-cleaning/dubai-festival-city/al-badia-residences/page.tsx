import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-festival-city/al-badia-residences'] || {
  title: 'Carpet Cleaning in Al Badia Residences - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Badia Residences. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlBadiaResidencesPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="al-badia-residences"
      subareaName="Al Badia Residences"
    />
  );
}