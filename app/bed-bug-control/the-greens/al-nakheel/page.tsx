import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/the-greens/al-nakheel'] || {
  title: 'Bed Bug Treatment in Al Nakheel - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Nakheel. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlNakheelPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="the-greens"
      areaName="The Greens"
      subarea="al-nakheel"
      subareaName="Al Nakheel"
    />
  );
}