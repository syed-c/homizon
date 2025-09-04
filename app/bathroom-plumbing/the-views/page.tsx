import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/the-views'] || {
  title: 'Bathroom Plumbing in The Views - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingTheViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="the-views"
      areaName="The Views"
    />
  );
}