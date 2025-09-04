import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/silicon-central'] || {
  title: 'Carpet Cleaning in Silicon Central - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Silicon Central. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningSiliconCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="silicon-central"
      areaName="Silicon Central"
    />
  );
}