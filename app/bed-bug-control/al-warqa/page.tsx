import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-warqa'] || {
  title: 'Bed Bug Treatment in Al Warqa - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Warqa. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlWarqaPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-warqa"
      areaName="Al Warqa"
    />
  );
}