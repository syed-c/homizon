import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-investment-park/green-community-dip'] || {
  title: 'Bed Bug Treatment in Green Community DIP - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Green Community DIP. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentGreenCommunityDIPPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="green-community-dip"
      subareaName="Green Community DIP"
    />
  );
}