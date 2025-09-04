import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/arabian-ranches'] || {
  title: 'Bed Bug Treatment in Arabian Ranches - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Arabian Ranches. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentArabianRanchesPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="arabian-ranches"
      areaName="Arabian Ranches"
    />
  );
}