import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-creek-harbour/creek-beach'] || {
  title: 'Bathroom Deep Cleaning in Creek Beach - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Creek Beach. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningCreekBeachPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-beach"
      subareaName="Creek Beach"
    />
  );
}