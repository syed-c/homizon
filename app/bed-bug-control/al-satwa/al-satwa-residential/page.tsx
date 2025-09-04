import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-satwa/al-satwa-residential'] || {
  title: 'Bed Bug Treatment in Al Satwa Residential - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Satwa Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlSatwaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="al-satwa-residential"
      subareaName="Al Satwa Residential"
    />
  );
}