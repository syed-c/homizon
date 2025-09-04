import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-creek-harbour/creek-beach'] || {
  title: 'AC Servicing in Creek Beach - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Creek Beach. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingCreekBeachPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-beach"
      subareaName="Creek Beach"
    />
  );
}