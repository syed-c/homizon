import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-creek-harbour'] || {
  title: 'Bed Bug Treatment in Dubai Creek Harbour - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Dubai Creek Harbour. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentDubaiCreekHarbourPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
    />
  );
}