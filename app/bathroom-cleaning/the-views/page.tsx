import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/the-views'] || {
  title: 'Bathroom Deep Cleaning in The Views - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningTheViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="the-views"
      areaName="The Views"
    />
  );
}