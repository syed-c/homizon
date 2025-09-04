import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/business-bay/bay-square'] || {
  title: 'Cleaning Services in Bay Square - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Bay Square. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesBaySquarePage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-square"
      subareaName="Bay Square"
    />
  );
}