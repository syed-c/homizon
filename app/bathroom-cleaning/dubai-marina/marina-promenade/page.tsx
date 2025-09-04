import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-marina/marina-promenade'] || {
  title: 'Bathroom Deep Cleaning in Marina Promenade - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Marina Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMarinaPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-promenade"
      subareaName="Marina Promenade"
    />
  );
}