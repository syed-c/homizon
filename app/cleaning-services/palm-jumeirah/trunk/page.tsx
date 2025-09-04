import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/palm-jumeirah/trunk'] || {
  title: 'Cleaning Services in Trunk - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Trunk. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesTrunkPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="trunk"
      subareaName="Trunk"
    />
  );
}