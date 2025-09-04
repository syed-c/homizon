import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/downtown-dubai/burj-khalifa-area'] || {
  title: 'Bed Bug Treatment in Burj Khalifa Area - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Burj Khalifa Area. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentBurjKhalifaAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="burj-khalifa-area"
      subareaName="Burj Khalifa Area"
    />
  );
}