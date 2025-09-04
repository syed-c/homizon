import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/motor-city'] || {
  title: 'Cleaning Services in Motor City - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="motor-city"
      areaName="Motor City"
    />
  );
}