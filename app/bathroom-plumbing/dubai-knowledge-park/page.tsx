import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-knowledge-park'] || {
  title: 'Bathroom Plumbing in Dubai Knowledge Park - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Dubai Knowledge Park. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDubaiKnowledgeParkPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-knowledge-park"
      areaName="Dubai Knowledge Park"
    />
  );
}