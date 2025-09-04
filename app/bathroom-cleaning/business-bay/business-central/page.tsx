import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/business-bay/business-central'] || {
  title: 'Bathroom Deep Cleaning in Business Central - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Business Central. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningBusinessCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="business-bay"
      areaName="Business Bay"
      subarea="business-central"
      subareaName="Business Central"
    />
  );
}