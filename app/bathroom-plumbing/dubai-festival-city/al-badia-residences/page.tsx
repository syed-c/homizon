import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-festival-city/al-badia-residences'] || {
  title: 'Bathroom Plumbing in Al Badia Residences - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Badia Residences. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlBadiaResidencesPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="al-badia-residences"
      subareaName="Al Badia Residences"
    />
  );
}