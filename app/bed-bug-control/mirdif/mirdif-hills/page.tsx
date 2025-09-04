import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/mirdif/mirdif-hills'] || {
  title: 'Bed Bug Treatment in Mirdif Hills - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Mirdif Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMirdifHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="mirdif"
      areaName="Mirdif"
      subarea="mirdif-hills"
      subareaName="Mirdif Hills"
    />
  );
}