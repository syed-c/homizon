import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/city-walk'] || {
  title: 'Cleaning Services in City Walk - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in City Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesCityWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="city-walk"
      areaName="City Walk"
    />
  );
}