import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-festival-city/creek-waters'] || {
  title: 'AC Servicing in Creek Waters - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Creek Waters. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingCreekWatersPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="creek-waters"
      subareaName="Creek Waters"
    />
  );
}