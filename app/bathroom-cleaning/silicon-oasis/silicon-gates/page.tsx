import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/silicon-oasis/silicon-gates'] || {
  title: 'Bathroom Deep Cleaning in Silicon Gates - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Silicon Gates. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningSiliconGatesPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-gates"
      subareaName="Silicon Gates"
    />
  );
}