import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/silicon-oasis/silicon-avenue'] || {
  title: 'AC Servicing in Silicon Avenue - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Silicon Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingSiliconAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-avenue"
      subareaName="Silicon Avenue"
    />
  );
}