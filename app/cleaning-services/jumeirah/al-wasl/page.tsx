import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jumeirah/al-wasl'] || {
  title: 'Cleaning Services in Al Wasl - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Wasl. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlWaslPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-wasl"
      subareaName="Al Wasl"
    />
  );
}