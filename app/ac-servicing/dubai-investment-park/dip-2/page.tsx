import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-investment-park/dip-2'] || {
  title: 'AC Servicing in DIP 2 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in DIP 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDIP2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-2"
      subareaName="DIP 2"
    />
  );
}