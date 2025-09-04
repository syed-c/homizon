import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/silicon-oasis/silicon-avenue'] || {
  title: 'Bathroom Plumbing in Silicon Avenue - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Silicon Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingSiliconAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-avenue"
      subareaName="Silicon Avenue"
    />
  );
}