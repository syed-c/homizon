import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-hills-estate/parkway'] || {
  title: 'AC Servicing in Parkway - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Parkway. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingParkwayPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="parkway"
      subareaName="Parkway"
    />
  );
}