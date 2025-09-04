import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/the-greens'] || {
  title: 'AC Servicing in The Greens - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in The Greens. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingTheGreensPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="the-greens"
      areaName="The Greens"
    />
  );
}