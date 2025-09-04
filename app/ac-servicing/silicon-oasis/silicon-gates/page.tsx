import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/silicon-oasis/silicon-gates'] || {
  title: 'AC Servicing in Silicon Gates - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Silicon Gates. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingSiliconGatesPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-gates"
      subareaName="Silicon Gates"
    />
  );
}