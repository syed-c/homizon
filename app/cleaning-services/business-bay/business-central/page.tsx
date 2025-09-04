import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/business-bay/business-central'] || {
  title: 'Cleaning Services in Business Central - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Business Central. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesBusinessCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="business-bay"
      areaName="Business Bay"
      subarea="business-central"
      subareaName="Business Central"
    />
  );
}