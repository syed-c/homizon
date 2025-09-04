import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jbr'] || {
  title: 'Bed Bug Treatment in JBR - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in JBR. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentJBRPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jbr"
      areaName="JBR"
    />
  );
}