import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/bur-dubai/textile-souk'] || {
  title: 'Bed Bug Treatment in Textile Souk - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Textile Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentTextileSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="textile-souk"
      subareaName="Textile Souk"
    />
  );
}