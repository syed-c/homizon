import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jbr/beach-residence-3'] || {
  title: 'Bed Bug Treatment in Beach Residence 3 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Beach Residence 3. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentBeachResidence3Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-3"
      subareaName="Beach Residence 3"
    />
  );
}