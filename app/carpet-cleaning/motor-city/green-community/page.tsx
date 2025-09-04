import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/motor-city/green-community'] || {
  title: 'Carpet Cleaning in Green Community - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Green Community. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningGreenCommunityPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="motor-city"
      areaName="Motor City"
      subarea="green-community"
      subareaName="Green Community"
    />
  );
}