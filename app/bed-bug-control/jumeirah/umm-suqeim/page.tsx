import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jumeirah/umm-suqeim'] || {
  title: 'Bed Bug Treatment in Umm Suqeim - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Umm Suqeim. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentUmmSuqeimPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="umm-suqeim"
      subareaName="Umm Suqeim"
    />
  );
}