import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/the-springs'] || {
  title: 'Cleaning Services in The Springs - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in The Springs. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesTheSpringsPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="the-springs"
      areaName="The Springs"
    />
  );
}