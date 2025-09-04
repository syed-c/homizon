import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jebel-ali'] || {
  title: 'Bathroom Plumbing in Jebel Ali - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Jebel Ali. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingJebelAliPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jebel-ali"
      areaName="Jebel Ali"
    />
  );
}