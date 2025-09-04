import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/academic-city'] || {
  title: 'Cleaning Services in Academic City - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Academic City. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAcademicCityPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="academic-city"
      areaName="Academic City"
    />
  );
}