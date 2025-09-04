import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-investment-park'] || {
  title: 'Bed Bug Treatment in Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentDubaiInvestmentParkPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
    />
  );
}