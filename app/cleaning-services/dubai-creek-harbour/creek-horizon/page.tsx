import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-creek-harbour/creek-horizon'] || {
  title: 'Cleaning Services in Creek Horizon - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Creek Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesCreekHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-horizon"
      subareaName="Creek Horizon"
    />
  );
}