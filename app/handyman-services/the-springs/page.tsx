import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/the-springs'] || {
  title: 'Handyman Services in The Springs - Professional Services | HOMIZON',
  description: 'Professional handyman services services in The Springs. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesTheSpringsPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="the-springs"
      areaName="The Springs"
      
      
    />
  );
}