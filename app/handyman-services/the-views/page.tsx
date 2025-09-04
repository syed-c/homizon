import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/the-views'] || {
  title: 'Handyman Services in The Views - Professional Services | HOMIZON',
  description: 'Professional handyman services services in The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesTheViewsPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="the-views"
      areaName="The Views"
      
      
    />
  );
}