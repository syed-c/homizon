import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-hills-estate'] || {
  title: 'AC Servicing in Dubai Hills Estate - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Dubai Hills Estate. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDubaiHillsEstatePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
    />
  );
}