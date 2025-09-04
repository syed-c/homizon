import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/the-views/fairways-north'] || {
  title: 'Handyman Services in Fairways North, The Views - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Fairways North, The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesTheViewsFairwaysNorthPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="the-views"
      areaName="The Views"
      subArea="fairways-north"
      subAreaName="Fairways North"
    />
  );
}