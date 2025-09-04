import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/emaar-beachfront'] || {
  title: 'Bed Bug Treatment in Emaar Beachfront - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Emaar Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentEmaarBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="emaar-beachfront"
      areaName="Emaar Beachfront"
    />
  );
}