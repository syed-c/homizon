import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/the-meadows'] || {
  title: 'Cleaning Services in The Meadows - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in The Meadows. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesTheMeadowsPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="the-meadows"
      areaName="The Meadows"
    />
  );
}