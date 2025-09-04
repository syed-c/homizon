import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/business-bay/canal-views'] || {
  title: 'Cleaning Services in Canal Views - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Canal Views. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesCanalViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="business-bay"
      areaName="Business Bay"
      subarea="canal-views"
      subareaName="Canal Views"
    />
  );
}