import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/silicon-oasis/silicon-avenue'] || {
  title: 'Pest Control in Silicon Avenue - Professional Services | HOMIZON',
  description: 'Professional pest control services in Silicon Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlSiliconAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-avenue"
      subareaName="Silicon Avenue"
    />
  );
}