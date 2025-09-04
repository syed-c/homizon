import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/business-bay/bay-avenue'] || {
  title: 'Cleaning Services in Bay Avenue - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Bay Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesBayAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-avenue"
      subareaName="Bay Avenue"
    />
  );
}