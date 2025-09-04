import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/business-bay'] || {
  title: 'Bathroom Deep Cleaning in Business Bay - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Business Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningBusinessBayPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="business-bay"
      areaName="Business Bay"
    />
  );
}