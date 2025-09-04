import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/international-city'] || {
  title: 'Cleaning Services in International City - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in International City. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesInternationalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="international-city"
      areaName="International City"
    />
  );
}