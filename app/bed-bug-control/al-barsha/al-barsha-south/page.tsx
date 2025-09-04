import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-barsha/al-barsha-south'] || {
  title: 'Bed Bug Treatment in Al Barsha South - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Barsha South. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlBarshaSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-south"
      subareaName="Al Barsha South"
    />
  );
}