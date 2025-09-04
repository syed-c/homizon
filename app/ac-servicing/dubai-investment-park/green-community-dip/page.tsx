import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-investment-park/green-community-dip'] || {
  title: 'AC Servicing in Green Community DIP - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Green Community DIP. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingGreenCommunityDIPPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="green-community-dip"
      subareaName="Green Community DIP"
    />
  );
}