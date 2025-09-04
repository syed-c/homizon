import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-creek-harbour/creek-gate'] || {
  title: 'Bathroom Deep Cleaning in Creek Gate - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Creek Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningCreekGatePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-gate"
      subareaName="Creek Gate"
    />
  );
}