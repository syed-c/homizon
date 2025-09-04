import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/silicon-central'] || {
  title: 'AC Servicing in Silicon Central - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Silicon Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingSiliconCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="silicon-central"
      areaName="Silicon Central"
    />
  );
}