import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-knowledge-park'] || {
  title: 'Bathroom Deep Cleaning in Dubai Knowledge Park - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Dubai Knowledge Park. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDubaiKnowledgeParkPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-knowledge-park"
      areaName="Dubai Knowledge Park"
    />
  );
}