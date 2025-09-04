import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/business-bay/bay-square'] || {
  title: 'Handyman Services in Bay Square, Business Bay - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Bay Square, Business Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesBusinessBayBaySquarePage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="business-bay"
      areaName="Business Bay"
      subArea="bay-square"
      subAreaName="Bay Square"
    />
  );
}