import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-knowledge-park'] || {
  title: 'Bed Bug Treatment in Dubai Knowledge Park - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Dubai Knowledge Park. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentDubaiKnowledgeParkPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-knowledge-park"
      areaName="Dubai Knowledge Park"
    />
  );
}