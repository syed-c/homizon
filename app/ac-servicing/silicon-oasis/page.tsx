import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/silicon-oasis'] || {
  title: 'AC Servicing in Silicon Oasis - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Silicon Oasis. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingSiliconOasisPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="silicon-oasis"
      areaName="Silicon Oasis"
    />
  );
}