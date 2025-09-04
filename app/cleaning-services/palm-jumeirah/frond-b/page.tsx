import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/palm-jumeirah/frond-b'] || {
  title: 'Cleaning Services in Frond B - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Frond B. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesFrondBPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-b"
      subareaName="Frond B"
    />
  );
}