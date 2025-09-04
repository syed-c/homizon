import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-barsha/al-barsha-1'] || {
  title: 'Bed Bug Treatment in Al Barsha 1 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Barsha 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlBarsha1Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-1"
      subareaName="Al Barsha 1"
    />
  );
}