import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/the-springs'] || {
  title: 'AC Servicing in The Springs - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in The Springs. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingTheSpringsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="the-springs"
      areaName="The Springs"
    />
  );
}