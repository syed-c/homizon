import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-warqa/warqa-3'] || {
  title: 'Cleaning Services in Warqa 3 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Warqa 3. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesWarqa3Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-3"
      subareaName="Warqa 3"
    />
  );
}