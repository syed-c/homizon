import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/motor-city/motor-city-central'] || {
  title: 'Cleaning Services in Motor City Central - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Motor City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMotorCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="motor-city"
      areaName="Motor City"
      subarea="motor-city-central"
      subareaName="Motor City Central"
    />
  );
}