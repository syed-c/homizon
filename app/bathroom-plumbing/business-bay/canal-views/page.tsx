import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/business-bay/canal-views'] || {
  title: 'Bathroom Plumbing in Canal Views - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Canal Views. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingCanalViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="business-bay"
      areaName="Business Bay"
      subarea="canal-views"
      subareaName="Canal Views"
    />
  );
}