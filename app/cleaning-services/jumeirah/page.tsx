import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jumeirah'] || {
  title: 'Cleaning Services in Jumeirah - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jumeirah"
      areaName="Jumeirah"
    />
  );
}