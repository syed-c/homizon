import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jumeirah/al-safa'] || {
  title: 'Cleaning Services in Al Safa - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Safa. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlSafaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-safa"
      subareaName="Al Safa"
    />
  );
}