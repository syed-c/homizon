import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/the-lakes'] || {
  title: 'Pest Control in The Lakes - Professional Services | HOMIZON',
  description: 'Professional pest control services in The Lakes. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlTheLakesPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="the-lakes"
      areaName="The Lakes"
    />
  );
}