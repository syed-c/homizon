import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jumeirah/jumeirah-1'] || {
  title: 'Cleaning Services in Jumeirah 1 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Jumeirah 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesJumeirah1Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-1"
      subareaName="Jumeirah 1"
    />
  );
}