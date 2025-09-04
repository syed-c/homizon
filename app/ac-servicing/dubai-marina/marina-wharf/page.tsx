import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-marina/marina-wharf'] || {
  title: 'AC Servicing in Marina Wharf - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Marina Wharf. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMarinaWharfPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-wharf"
      subareaName="Marina Wharf"
    />
  );
}