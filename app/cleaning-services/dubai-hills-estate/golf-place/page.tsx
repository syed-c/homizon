import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-hills-estate/golf-place'] || {
  title: 'Cleaning Services in Golf Place - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Golf Place. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesGolfPlacePage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="golf-place"
      subareaName="Golf Place"
    />
  );
}