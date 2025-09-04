import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/the-views'] || {
  title: 'AC Servicing in The Views - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingTheViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="the-views"
      areaName="The Views"
    />
  );
}