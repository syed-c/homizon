import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/international-city'] || {
  title: 'Bed Bug Treatment in International City - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in International City. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentInternationalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="international-city"
      areaName="International City"
    />
  );
}