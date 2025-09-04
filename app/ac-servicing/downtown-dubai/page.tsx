import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/downtown-dubai'] || {
  title: 'AC Servicing in Downtown Dubai - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Downtown Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDowntownDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="downtown-dubai"
      areaName="Downtown Dubai"
    />
  );
}