import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-barsha/al-barsha-heights'] || {
  title: 'Bed Bug Treatment in Al Barsha Heights - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Barsha Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlBarshaHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-heights"
      subareaName="Al Barsha Heights"
    />
  );
}