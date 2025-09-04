import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/palm-jumeirah'] || {
  title: 'Cleaning Services in Palm Jumeirah - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Palm Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesPalmJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
    />
  );
}