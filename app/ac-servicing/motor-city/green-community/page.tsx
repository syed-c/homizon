import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/motor-city/green-community'] || {
  title: 'AC Servicing in Green Community - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Green Community. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingGreenCommunityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="motor-city"
      areaName="Motor City"
      subarea="green-community"
      subareaName="Green Community"
    />
  );
}