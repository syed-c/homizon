import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/business-bay/executive-bay'] || {
  title: 'Handyman Services in Executive Bay, Business Bay - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Executive Bay, Business Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesBusinessBayExecutiveBayPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="business-bay"
      areaName="Business Bay"
      subArea="executive-bay"
      subAreaName="Executive Bay"
    />
  );
}