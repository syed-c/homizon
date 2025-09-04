import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/deira/spice-souk-area'] || {
  title: 'Bed Bug Treatment in Spice Souk Area - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Spice Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentSpiceSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="deira"
      areaName="Deira"
      subarea="spice-souk-area"
      subareaName="Spice Souk Area"
    />
  );
}