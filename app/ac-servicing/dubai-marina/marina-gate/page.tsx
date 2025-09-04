import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-marina/marina-gate'] || {
  title: 'AC Servicing in Marina Gate - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Marina Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMarinaGatePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-gate"
      subareaName="Marina Gate"
    />
  );
}