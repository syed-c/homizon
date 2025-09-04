import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/handyman-services/academic-city'] || {
  title: 'Handyman Services in Academic City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Academic City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAcademicCityPage() {
  return (
    <ServiceAreaPageContent 
      service="handyman-services"
      serviceName="Handyman Services"
      area="academic-city"
      areaName="Academic City"
    />
  );
}