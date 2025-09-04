import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/the-meadows'] || {
  title: 'AC Servicing in The Meadows - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in The Meadows. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingTheMeadowsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="the-meadows"
      areaName="The Meadows"
    />
  );
}