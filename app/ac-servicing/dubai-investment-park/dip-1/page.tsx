import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-investment-park/dip-1'] || {
  title: 'AC Servicing in DIP 1 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in DIP 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDIP1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-1"
      subareaName="DIP 1"
    />
  );
}