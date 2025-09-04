import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-creek-harbour/creek-gate'] || {
  title: 'Bathroom Plumbing in Creek Gate - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Creek Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingCreekGatePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-gate"
      subareaName="Creek Gate"
    />
  );
}