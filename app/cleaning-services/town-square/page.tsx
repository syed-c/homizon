import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/town-square'] || {
  title: 'Cleaning Services in Town Square - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Town Square. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesTownSquarePage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="town-square"
      areaName="Town Square"
    />
  );
}