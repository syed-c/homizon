import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/downtown-dubai/opera-district'] || {
  title: 'Bathroom Deep Cleaning in Opera District - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Opera District. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningOperaDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="opera-district"
      subareaName="Opera District"
    />
  );
}