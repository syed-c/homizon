import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/the-springs'] || {
  title: 'Pest Control in The Springs - Professional Services | HOMIZON',
  description: 'Professional pest control services in The Springs. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlTheSpringsPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="the-springs"
      areaName="The Springs"
    />
  );
}