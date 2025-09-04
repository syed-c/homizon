import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/the-meadows'] || {
  title: 'Pest Control in The Meadows - Professional Services | HOMIZON',
  description: 'Professional pest control services in The Meadows. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlTheMeadowsPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="the-meadows"
      areaName="The Meadows"
    />
  );
}