import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-marina/marina-crown'] || {
  title: 'AC Servicing in Marina Crown - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Marina Crown. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMarinaCrownPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-crown"
      subareaName="Marina Crown"
    />
  );
}