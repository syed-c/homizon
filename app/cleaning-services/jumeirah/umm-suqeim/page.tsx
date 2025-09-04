import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jumeirah/umm-suqeim'] || {
  title: 'Cleaning Services in Umm Suqeim - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Umm Suqeim. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesUmmSuqeimPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="umm-suqeim"
      subareaName="Umm Suqeim"
    />
  );
}