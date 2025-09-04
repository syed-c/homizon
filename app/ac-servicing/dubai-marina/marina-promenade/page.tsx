import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-marina/marina-promenade'] || {
  title: 'AC Servicing in Marina Promenade - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Marina Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMarinaPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-promenade"
      subareaName="Marina Promenade"
    />
  );
}