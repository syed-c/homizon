import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/academic-city'] || {
  title: 'Bed Bug Treatment in Academic City - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Academic City. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAcademicCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="academic-city"
      areaName="Academic City"
    />
  );
}