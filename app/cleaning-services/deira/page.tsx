import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/deira'] || {
  title: 'Cleaning Services in Deira - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDeiraPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="deira"
      areaName="Deira"
    />
  );
}