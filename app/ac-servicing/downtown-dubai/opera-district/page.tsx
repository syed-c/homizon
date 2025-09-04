import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/downtown-dubai/opera-district'] || {
  title: 'AC Servicing in Opera District - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Opera District. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingOperaDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="opera-district"
      subareaName="Opera District"
    />
  );
}