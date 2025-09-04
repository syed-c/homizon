import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-south/mag-city'] || {
  title: 'AC Servicing in MAG City - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in MAG City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMAGCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-south"
      areaName="Dubai South"
      subarea="mag-city"
      subareaName="MAG City"
    />
  );
}