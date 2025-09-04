import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/palm-jumeirah/frond-c'] || {
  title: 'Cleaning Services in Frond C - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Frond C. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesFrondCPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-c"
      subareaName="Frond C"
    />
  );
}