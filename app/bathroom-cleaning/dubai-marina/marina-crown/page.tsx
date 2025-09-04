import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-marina/marina-crown'] || {
  title: 'Bathroom Deep Cleaning in Marina Crown - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Marina Crown. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMarinaCrownPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-crown"
      subareaName="Marina Crown"
    />
  );
}