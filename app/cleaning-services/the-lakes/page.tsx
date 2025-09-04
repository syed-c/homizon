import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/the-lakes'] || {
  title: 'Cleaning Services in The Lakes - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in The Lakes. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesTheLakesPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="the-lakes"
      areaName="The Lakes"
    />
  );
}