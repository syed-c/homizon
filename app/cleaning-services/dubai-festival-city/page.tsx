import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-festival-city'] || {
  title: 'Cleaning Services in Dubai Festival City - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai Festival City. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiFestivalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
    />
  );
}