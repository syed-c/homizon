import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-investment-park/green-community-dip'] || {
  title: 'Carpet Cleaning in Green Community DIP - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Green Community DIP. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningGreenCommunityDIPPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="green-community-dip"
      subareaName="Green Community DIP"
    />
  );
}