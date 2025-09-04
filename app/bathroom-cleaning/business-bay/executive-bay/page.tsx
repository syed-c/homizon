import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/business-bay/executive-bay'] || {
  title: 'Bathroom Deep Cleaning in Executive Bay - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Executive Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningExecutiveBayPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="business-bay"
      areaName="Business Bay"
      subarea="executive-bay"
      subareaName="Executive Bay"
    />
  );
}