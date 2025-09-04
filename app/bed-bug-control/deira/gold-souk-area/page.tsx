import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/deira/gold-souk-area'] || {
  title: 'Bed Bug Treatment in Gold Souk Area - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Gold Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentGoldSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="deira"
      areaName="Deira"
      subarea="gold-souk-area"
      subareaName="Gold Souk Area"
    />
  );
}