import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-festival-city/al-badia-residences'] || {
  title: 'Cleaning Services in Al Badia Residences - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Badia Residences. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlBadiaResidencesPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="al-badia-residences"
      subareaName="Al Badia Residences"
    />
  );
}