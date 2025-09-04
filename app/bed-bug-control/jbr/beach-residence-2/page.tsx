import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jbr/beach-residence-2'] || {
  title: 'Bed Bug Treatment in Beach Residence 2 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Beach Residence 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentBeachResidence2Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-2"
      subareaName="Beach Residence 2"
    />
  );
}