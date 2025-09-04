import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/business-bay/business-central'] || {
  title: 'AC Servicing in Business Central - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Business Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingBusinessCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="business-bay"
      areaName="Business Bay"
      subarea="business-central"
      subareaName="Business Central"
    />
  );
}