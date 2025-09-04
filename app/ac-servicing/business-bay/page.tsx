import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/business-bay'] || {
  title: 'AC Servicing in Business Bay - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Business Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingBusinessBayPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="business-bay"
      areaName="Business Bay"
    />
  );
}