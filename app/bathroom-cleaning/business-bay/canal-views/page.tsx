import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/business-bay/canal-views'] || {
  title: 'Bathroom Deep Cleaning in Canal Views - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Canal Views. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningCanalViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="business-bay"
      areaName="Business Bay"
      subarea="canal-views"
      subareaName="Canal Views"
    />
  );
}