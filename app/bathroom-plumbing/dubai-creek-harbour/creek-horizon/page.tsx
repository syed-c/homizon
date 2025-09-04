import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-creek-harbour/creek-horizon'] || {
  title: 'Bathroom Plumbing in Creek Horizon - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Creek Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingCreekHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-horizon"
      subareaName="Creek Horizon"
    />
  );
}