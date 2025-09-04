import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-investment-park/green-community-dip'] || {
  title: 'Cleaning Services in Green Community DIP - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Green Community DIP. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesGreenCommunityDIPPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="green-community-dip"
      subareaName="Green Community DIP"
    />
  );
}