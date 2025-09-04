import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-sports-city/golf-promenade'] || {
  title: 'Bed Bug Treatment in Golf Promenade - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Golf Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentGolfPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-promenade"
      subareaName="Golf Promenade"
    />
  );
}