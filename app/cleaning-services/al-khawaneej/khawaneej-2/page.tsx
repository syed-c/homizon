import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-khawaneej/khawaneej-2'] || {
  title: 'Cleaning Services in Khawaneej 2 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Khawaneej 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesKhawaneej2Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-2"
      subareaName="Khawaneej 2"
    />
  );
}