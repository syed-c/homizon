import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/silicon-oasis'] || {
  title: 'Pest Control in Silicon Oasis - Professional Services | HOMIZON',
  description: 'Professional pest control services in Silicon Oasis. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlSiliconOasisPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="silicon-oasis"
      areaName="Silicon Oasis"
    />
  );
}