import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-south/mag-city'] || {
  title: 'Bed Bug Treatment in MAG City - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in MAG City. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMAGCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-south"
      areaName="Dubai South"
      subarea="mag-city"
      subareaName="MAG City"
    />
  );
}