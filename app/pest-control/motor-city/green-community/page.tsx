import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/motor-city/green-community'] || {
  title: 'Pest Control in Green Community - Professional Services | HOMIZON',
  description: 'Professional pest control services in Green Community. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlGreenCommunityPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="motor-city"
      areaName="Motor City"
      subarea="green-community"
      subareaName="Green Community"
    />
  );
}