import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/silicon-central'] || {
  title: 'Pest Control in Silicon Central - Professional Services | HOMIZON',
  description: 'Professional pest control services in Silicon Central. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlSiliconCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="silicon-central"
      areaName="Silicon Central"
    />
  );
}