import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-knowledge-park'] || {
  title: 'AC Servicing in Dubai Knowledge Park - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Dubai Knowledge Park. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDubaiKnowledgeParkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-knowledge-park"
      areaName="Dubai Knowledge Park"
    />
  );
}