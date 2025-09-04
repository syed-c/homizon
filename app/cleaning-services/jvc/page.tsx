import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jvc'] || {
  title: 'Cleaning Services in JVC - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in JVC. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesJVCPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jvc"
      areaName="JVC"
    />
  );
}