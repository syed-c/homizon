import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-quoz/al-quoz-2'] || {
  title: 'Cleaning Services in Al Quoz 2 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Quoz 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlQuoz2Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-2"
      subareaName="Al Quoz 2"
    />
  );
}