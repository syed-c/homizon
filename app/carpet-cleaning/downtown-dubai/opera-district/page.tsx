import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/downtown-dubai/opera-district'] || {
  title: 'Carpet Cleaning in Opera District - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Opera District. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningOperaDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="opera-district"
      subareaName="Opera District"
    />
  );
}