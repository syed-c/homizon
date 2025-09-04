import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/silicon-central'] || {
  title: 'Cleaning Services in Silicon Central - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Silicon Central. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesSiliconCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="silicon-central"
      areaName="Silicon Central"
    />
  );
}