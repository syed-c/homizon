import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-investment-park/green-community-dip'] || {
  title: 'Bathroom Deep Cleaning in Green Community DIP - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Green Community DIP. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningGreenCommunityDIPPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="green-community-dip"
      subareaName="Green Community DIP"
    />
  );
}