import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-marina/marina-wharf'] || {
  title: 'Bathroom Deep Cleaning in Marina Wharf - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Marina Wharf. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMarinaWharfPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-wharf"
      subareaName="Marina Wharf"
    />
  );
}