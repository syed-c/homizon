import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/motor-city/green-community'] || {
  title: 'Bathroom Deep Cleaning in Green Community - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Green Community. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningGreenCommunityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="motor-city"
      areaName="Motor City"
      subarea="green-community"
      subareaName="Green Community"
    />
  );
}