import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/palm-jumeirah/trunk'] || {
  title: 'AC Servicing in Trunk - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Trunk. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingTrunkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="trunk"
      subareaName="Trunk"
    />
  );
}