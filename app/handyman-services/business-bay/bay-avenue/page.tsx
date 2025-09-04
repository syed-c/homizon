import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/business-bay/bay-avenue'] || {
  title: 'Handyman Services in Bay Avenue, Business Bay - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Bay Avenue, Business Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesBusinessBayBayAvenuePage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="business-bay"
      areaName="Business Bay"
      subArea="bay-avenue"
      subAreaName="Bay Avenue"
    />
  );
}