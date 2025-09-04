import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-south/mag-city'] || {
  title: 'Bathroom Plumbing in MAG City - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in MAG City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingMAGCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-south"
      areaName="Dubai South"
      subarea="mag-city"
      subareaName="MAG City"
    />
  );
}