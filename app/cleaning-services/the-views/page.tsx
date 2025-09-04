import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/the-views'] || {
  title: 'Cleaning Services in The Views - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesTheViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="the-views"
      areaName="The Views"
    />
  );
}