import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/business-bay/canal-views'] || {
  title: 'AC Servicing in Canal Views - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Canal Views. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingCanalViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="business-bay"
      areaName="Business Bay"
      subarea="canal-views"
      subareaName="Canal Views"
    />
  );
}