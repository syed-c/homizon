import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/emirates-hills'] || {
  title: 'Pest Control in Emirates Hills - Professional Services | HOMIZON',
  description: 'Professional pest control services in Emirates Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlEmiratesHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="emirates-hills"
      areaName="Emirates Hills"
    />
  );
}