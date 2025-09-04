import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/business-bay/bay-square'] || {
  title: 'AC Servicing in Bay Square - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Bay Square. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingBaySquarePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-square"
      subareaName="Bay Square"
    />
  );
}