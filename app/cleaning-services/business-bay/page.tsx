import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/business-bay'] || {
  title: 'Cleaning Services in Business Bay - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Business Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesBusinessBayPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="business-bay"
      areaName="Business Bay"
    />
  );
}