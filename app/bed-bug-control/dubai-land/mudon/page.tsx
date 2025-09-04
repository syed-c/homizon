import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-land/mudon'] || {
  title: 'Bed Bug Treatment in Mudon - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Mudon. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMudonPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="mudon"
      subareaName="Mudon"
    />
  );
}