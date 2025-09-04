import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-hills-estate/parkway'] || {
  title: 'Cleaning Services in Parkway - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Parkway. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesParkwayPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="parkway"
      subareaName="Parkway"
    />
  );
}