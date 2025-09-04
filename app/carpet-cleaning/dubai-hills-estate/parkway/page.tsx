import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-hills-estate/parkway'] || {
  title: 'Carpet Cleaning in Parkway - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Parkway. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningParkwayPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="parkway"
      subareaName="Parkway"
    />
  );
}