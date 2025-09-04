import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/silicon-oasis/silicon-avenue'] || {
  title: 'Carpet Cleaning in Silicon Avenue - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Silicon Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningSiliconAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-avenue"
      subareaName="Silicon Avenue"
    />
  );
}