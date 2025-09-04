import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/silicon-oasis/silicon-gates'] || {
  title: 'Carpet Cleaning in Silicon Gates - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Silicon Gates. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningSiliconGatesPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-gates"
      subareaName="Silicon Gates"
    />
  );
}