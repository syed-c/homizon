import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/silicon-oasis/silicon-heights'] || {
  title: 'Pest Control in Silicon Heights - Professional Services | HOMIZON',
  description: 'Professional pest control services in Silicon Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlSiliconHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-heights"
      subareaName="Silicon Heights"
    />
  );
}