import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-festival-city/al-badia-residences'] || {
  title: 'AC Servicing in Al Badia Residences - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Badia Residences. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlBadiaResidencesPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="al-badia-residences"
      subareaName="Al Badia Residences"
    />
  );
}