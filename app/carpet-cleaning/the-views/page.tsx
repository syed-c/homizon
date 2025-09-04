import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/the-views'] || {
  title: 'Carpet Cleaning in The Views - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningTheViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="the-views"
      areaName="The Views"
    />
  );
}