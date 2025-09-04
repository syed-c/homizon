import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/deira/al-rigga'] || {
  title: 'Bed Bug Treatment in Al Rigga - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Rigga. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlRiggaPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="deira"
      areaName="Deira"
      subarea="al-rigga"
      subareaName="Al Rigga"
    />
  );
}