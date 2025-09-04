import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/silicon-central'] || {
  title: 'Bathroom Deep Cleaning in Silicon Central - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Silicon Central. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningSiliconCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="silicon-central"
      areaName="Silicon Central"
    />
  );
}