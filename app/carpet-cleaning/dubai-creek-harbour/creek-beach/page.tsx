import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-creek-harbour/creek-beach'] || {
  title: 'Carpet Cleaning in Creek Beach - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Creek Beach. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningCreekBeachPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-beach"
      subareaName="Creek Beach"
    />
  );
}