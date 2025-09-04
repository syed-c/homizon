import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jlt'] || {
  title: 'Pest Control in JLT - Professional Services | HOMIZON',
  description: 'Professional pest control services in JLT. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlJLTPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jlt"
      areaName="JLT"
    />
  );
}