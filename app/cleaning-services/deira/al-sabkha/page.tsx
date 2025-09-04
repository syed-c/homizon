import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/deira/al-sabkha'] || {
  title: 'Cleaning Services in Al Sabkha - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Sabkha. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlSabkhaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="deira"
      areaName="Deira"
      subarea="al-sabkha"
      subareaName="Al Sabkha"
    />
  );
}