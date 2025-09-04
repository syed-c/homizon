import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/business-bay/bay-square'] || {
  title: 'Bathroom Deep Cleaning in Bay Square - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Bay Square. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningBaySquarePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-square"
      subareaName="Bay Square"
    />
  );
}