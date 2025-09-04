import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/business-bay/canal-views'] || {
  title: 'Handyman Services in Canal Views, Business Bay - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Canal Views, Business Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesBusinessBayCanalViewsPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="business-bay"
      areaName="Business Bay"
      subArea="canal-views"
      subAreaName="Canal Views"
    />
  );
}