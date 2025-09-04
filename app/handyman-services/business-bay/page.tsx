import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/handyman-services/business-bay'] || {
  title: 'Handyman Services in Business Bay - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Business Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesBusinessBayPage() {
  return (
    <ServiceAreaPageContent 
      service="handyman-services"
      serviceName="Handyman Services"
      area="business-bay"
      areaName="Business Bay"
    />
  );
}