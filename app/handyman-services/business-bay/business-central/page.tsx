import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/business-bay/business-central'] || {
  title: 'Handyman Services in Business Central, Business Bay - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Business Central, Business Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesBusinessBayBusinessCentralPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="business-bay"
      areaName="Business Bay"
      subArea="business-central"
      subAreaName="Business Central"
    />
  );
}