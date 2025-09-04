import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/business-bay/canal-views'] || {
  title: 'Bed Bug Treatment in Canal Views - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Canal Views. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentCanalViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="business-bay"
      areaName="Business Bay"
      subarea="canal-views"
      subareaName="Canal Views"
    />
  );
}