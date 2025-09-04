import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/silicon-oasis/silicon-heights'] || {
  title: 'Bathroom Deep Cleaning in Silicon Heights - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Silicon Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningSiliconHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-heights"
      subareaName="Silicon Heights"
    />
  );
}