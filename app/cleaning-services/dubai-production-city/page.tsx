import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-production-city'] || {
  title: 'Cleaning Services in Dubai Production City - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai Production City. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiProductionCityPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-production-city"
      areaName="Dubai Production City"
    />
  );
}