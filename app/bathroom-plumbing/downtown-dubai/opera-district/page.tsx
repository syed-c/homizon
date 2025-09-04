import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/downtown-dubai/opera-district'] || {
  title: 'Bathroom Plumbing in Opera District - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Opera District. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingOperaDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="opera-district"
      subareaName="Opera District"
    />
  );
}