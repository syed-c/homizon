import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/business-bay/canal-views'] || {
  title: 'Carpet Cleaning in Canal Views - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Canal Views. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningCanalViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="business-bay"
      areaName="Business Bay"
      subarea="canal-views"
      subareaName="Canal Views"
    />
  );
}