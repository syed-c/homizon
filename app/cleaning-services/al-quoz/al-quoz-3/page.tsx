import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-quoz/al-quoz-3'] || {
  title: 'Cleaning Services in Al Quoz 3 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Quoz 3. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlQuoz3Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-3"
      subareaName="Al Quoz 3"
    />
  );
}