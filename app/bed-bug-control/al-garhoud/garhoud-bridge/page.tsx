import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-garhoud/garhoud-bridge'] || {
  title: 'Bed Bug Treatment in Garhoud Bridge - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Garhoud Bridge. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentGarhoudBridgePage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="garhoud-bridge"
      subareaName="Garhoud Bridge"
    />
  );
}