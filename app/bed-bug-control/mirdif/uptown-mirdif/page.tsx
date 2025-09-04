import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/mirdif/uptown-mirdif'] || {
  title: 'Bed Bug Treatment in Uptown Mirdif - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Uptown Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentUptownMirdifPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="mirdif"
      areaName="Mirdif"
      subarea="uptown-mirdif"
      subareaName="Uptown Mirdif"
    />
  );
}