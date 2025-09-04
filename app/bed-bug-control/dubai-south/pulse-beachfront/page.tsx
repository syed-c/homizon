import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-south/pulse-beachfront'] || {
  title: 'Bed Bug Treatment in Pulse Beachfront - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Pulse Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentPulseBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-south"
      areaName="Dubai South"
      subarea="pulse-beachfront"
      subareaName="Pulse Beachfront"
    />
  );
}