import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-creek-harbour/creek-beach'] || {
  title: 'Cleaning Services in Creek Beach - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Creek Beach. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesCreekBeachPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-beach"
      subareaName="Creek Beach"
    />
  );
}