import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/the-greens'] || {
  title: 'Pest Control in The Greens - Professional Services | HOMIZON',
  description: 'Professional pest control services in The Greens. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlTheGreensPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="the-greens"
      areaName="The Greens"
    />
  );
}