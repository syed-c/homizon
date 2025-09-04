import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/silicon-oasis/silicon-heights'] || {
  title: 'Bathroom Plumbing in Silicon Heights - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Silicon Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingSiliconHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-heights"
      subareaName="Silicon Heights"
    />
  );
}