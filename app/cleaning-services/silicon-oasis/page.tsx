import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/silicon-oasis'] || {
  title: 'Cleaning Services in Silicon Oasis - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Silicon Oasis. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesSiliconOasisPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="silicon-oasis"
      areaName="Silicon Oasis"
    />
  );
}