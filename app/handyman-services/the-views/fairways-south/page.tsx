import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/the-views/fairways-south'] || {
  title: 'Handyman Services in Fairways South, The Views - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Fairways South, The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesTheViewsFairwaysSouthPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="the-views"
      areaName="The Views"
      subArea="fairways-south"
      subAreaName="Fairways South"
    />
  );
}