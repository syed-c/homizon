import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-land/living-legends'] || {
  title: 'Bed Bug Treatment in Living Legends - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Living Legends. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentLivingLegendsPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="living-legends"
      subareaName="Living Legends"
    />
  );
}