import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/silicon-oasis/silicon-heights'] || {
  title: 'Carpet Cleaning in Silicon Heights - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Silicon Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningSiliconHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-heights"
      subareaName="Silicon Heights"
    />
  );
}