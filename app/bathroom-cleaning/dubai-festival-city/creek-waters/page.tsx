import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-festival-city/creek-waters'] || {
  title: 'Bathroom Deep Cleaning in Creek Waters - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Creek Waters. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningCreekWatersPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="creek-waters"
      subareaName="Creek Waters"
    />
  );
}