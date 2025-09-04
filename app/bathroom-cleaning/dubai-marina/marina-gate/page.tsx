import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-marina/marina-gate'] || {
  title: 'Bathroom Deep Cleaning in Marina Gate - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Marina Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMarinaGatePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-gate"
      subareaName="Marina Gate"
    />
  );
}