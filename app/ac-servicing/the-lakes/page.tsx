import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/the-lakes'] || {
  title: 'AC Servicing in The Lakes - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in The Lakes. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingTheLakesPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="the-lakes"
      areaName="The Lakes"
    />
  );
}