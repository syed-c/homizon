import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/bluewaters-island'] || {
  title: 'AC Servicing in Bluewaters Island - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Bluewaters Island. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingBluewatersIslandPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="bluewaters-island"
      areaName="Bluewaters Island"
    />
  );
}