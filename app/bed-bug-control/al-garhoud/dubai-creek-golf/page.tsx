import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-garhoud/dubai-creek-golf'] || {
  title: 'Bed Bug Treatment in Dubai Creek Golf - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Dubai Creek Golf. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentDubaiCreekGolfPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="dubai-creek-golf"
      subareaName="Dubai Creek Golf"
    />
  );
}