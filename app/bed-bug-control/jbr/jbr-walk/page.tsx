import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jbr/jbr-walk'] || {
  title: 'Bed Bug Treatment in JBR Walk - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in JBR Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentJBRWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jbr"
      areaName="JBR"
      subarea="jbr-walk"
      subareaName="JBR Walk"
    />
  );
}