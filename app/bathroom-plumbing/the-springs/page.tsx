import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/the-springs'] || {
  title: 'Bathroom Plumbing in The Springs - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in The Springs. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingTheSpringsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="the-springs"
      areaName="The Springs"
    />
  );
}