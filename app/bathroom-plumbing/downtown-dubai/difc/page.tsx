import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/downtown-dubai/difc'] || {
  title: 'Bathroom Plumbing in DIFC - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in DIFC. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDIFCPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="difc"
      subareaName="DIFC"
    />
  );
}