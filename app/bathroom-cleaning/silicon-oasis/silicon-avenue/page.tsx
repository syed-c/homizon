import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/silicon-oasis/silicon-avenue'] || {
  title: 'Bathroom Deep Cleaning in Silicon Avenue - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Silicon Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningSiliconAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-avenue"
      subareaName="Silicon Avenue"
    />
  );
}