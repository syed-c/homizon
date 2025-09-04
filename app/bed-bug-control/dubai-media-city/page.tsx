import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-media-city'] || {
  title: 'Bed Bug Treatment in Dubai Media City - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Dubai Media City. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentDubaiMediaCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-media-city"
      areaName="Dubai Media City"
    />
  );
}