import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-investment-park/dip-1'] || {
  title: 'Bed Bug Treatment in DIP 1 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in DIP 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentDIP1Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-1"
      subareaName="DIP 1"
    />
  );
}