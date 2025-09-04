import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/bur-dubai/meena-bazaar'] || {
  title: 'Bed Bug Treatment in Meena Bazaar - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Meena Bazaar. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMeenaBazaarPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="meena-bazaar"
      subareaName="Meena Bazaar"
    />
  );
}