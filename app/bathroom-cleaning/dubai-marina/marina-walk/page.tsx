import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-marina/marina-walk'] || {
  title: 'Bathroom Deep Cleaning in Marina Walk - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Marina Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMarinaWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-walk"
      subareaName="Marina Walk"
    />
  );
}