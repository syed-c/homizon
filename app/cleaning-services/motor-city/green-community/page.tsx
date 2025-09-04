import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/motor-city/green-community'] || {
  title: 'Cleaning Services in Green Community - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Green Community. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesGreenCommunityPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="motor-city"
      areaName="Motor City"
      subarea="green-community"
      subareaName="Green Community"
    />
  );
}