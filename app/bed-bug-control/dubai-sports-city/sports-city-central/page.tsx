import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-sports-city/sports-city-central'] || {
  title: 'Bed Bug Treatment in Sports City Central - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Sports City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentSportsCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="sports-city-central"
      subareaName="Sports City Central"
    />
  );
}