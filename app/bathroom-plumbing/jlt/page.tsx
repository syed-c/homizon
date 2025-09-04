import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jlt'] || {
  title: 'Bathroom Plumbing in JLT - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in JLT. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingJLTPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jlt"
      areaName="JLT"
    />
  );
}