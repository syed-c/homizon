import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/deira'] || {
  title: 'AC Servicing in Deira - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDeiraPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="deira"
      areaName="Deira"
    />
  );
}