import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/arjan'] || {
  title: 'Cleaning Services in Arjan - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Arjan. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesArjanPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="arjan"
      areaName="Arjan"
    />
  );
}