import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-creek-harbour/creek-gate'] || {
  title: 'AC Servicing in Creek Gate - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Creek Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingCreekGatePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-gate"
      subareaName="Creek Gate"
    />
  );
}