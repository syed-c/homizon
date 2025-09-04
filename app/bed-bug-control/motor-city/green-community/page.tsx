import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/motor-city/green-community'] || {
  title: 'Bed Bug Treatment in Green Community - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Green Community. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentGreenCommunityPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="motor-city"
      areaName="Motor City"
      subarea="green-community"
      subareaName="Green Community"
    />
  );
}