import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/bluewaters-island'] || {
  title: 'Cleaning Services in Bluewaters Island - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Bluewaters Island. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesBluewatersIslandPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="bluewaters-island"
      areaName="Bluewaters Island"
    />
  );
}