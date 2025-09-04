import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/palm-jumeirah/frond-a'] || {
  title: 'Cleaning Services in Frond A - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Frond A. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesFrondAPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-a"
      subareaName="Frond A"
    />
  );
}