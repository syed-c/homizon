import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/deira/port-saeed'] || {
  title: 'Bed Bug Treatment in Port Saeed - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Port Saeed. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentPortSaeedPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="deira"
      areaName="Deira"
      subarea="port-saeed"
      subareaName="Port Saeed"
    />
  );
}