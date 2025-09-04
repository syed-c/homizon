import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jvc'] || {
  title: 'AC Servicing in JVC - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in JVC. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingJVCPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jvc"
      areaName="JVC"
    />
  );
}