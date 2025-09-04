import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/downtown-dubai/opera-district'] || {
  title: 'Cleaning Services in Opera District - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Opera District. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesOperaDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="opera-district"
      subareaName="Opera District"
    />
  );
}