import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-warqa/warqa-2'] || {
  title: 'Cleaning Services in Warqa 2 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Warqa 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesWarqa2Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-2"
      subareaName="Warqa 2"
    />
  );
}