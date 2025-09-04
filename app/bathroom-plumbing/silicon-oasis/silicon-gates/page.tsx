import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/silicon-oasis/silicon-gates'] || {
  title: 'Bathroom Plumbing in Silicon Gates - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Silicon Gates. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingSiliconGatesPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-gates"
      subareaName="Silicon Gates"
    />
  );
}