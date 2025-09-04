import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-creek-harbour/creek-horizon'] || {
  title: 'Bathroom Deep Cleaning in Creek Horizon - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Creek Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningCreekHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-horizon"
      subareaName="Creek Horizon"
    />
  );
}