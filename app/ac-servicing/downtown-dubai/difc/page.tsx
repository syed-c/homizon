import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/downtown-dubai/difc'] || {
  title: 'AC Servicing in DIFC - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in DIFC. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDIFCPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="difc"
      subareaName="DIFC"
    />
  );
}