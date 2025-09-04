import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/the-views'] || {
  title: 'Pest Control in The Views - Professional Services | HOMIZON',
  description: 'Professional pest control services in The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlTheViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="the-views"
      areaName="The Views"
    />
  );
}