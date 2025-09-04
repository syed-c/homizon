import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-festival-city/al-badia-residences'] || {
  title: 'Bathroom Deep Cleaning in Al Badia Residences - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Badia Residences. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlBadiaResidencesPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="al-badia-residences"
      subareaName="Al Badia Residences"
    />
  );
}