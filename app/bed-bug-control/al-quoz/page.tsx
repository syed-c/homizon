import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-quoz'] || {
  title: 'Bed Bug Treatment in Al Quoz - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Quoz. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlQuozPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-quoz"
      areaName="Al Quoz"
    />
  );
}