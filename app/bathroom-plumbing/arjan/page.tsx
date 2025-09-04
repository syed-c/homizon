import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/arjan'] || {
  title: 'Bathroom Plumbing in Arjan - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Arjan. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingArjanPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="arjan"
      areaName="Arjan"
    />
  );
}