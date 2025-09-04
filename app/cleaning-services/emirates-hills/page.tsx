import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/emirates-hills'] || {
  title: 'Cleaning Services in Emirates Hills - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Emirates Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesEmiratesHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="emirates-hills"
      areaName="Emirates Hills"
    />
  );
}