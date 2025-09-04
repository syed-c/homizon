import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-creek-harbour/creek-horizon'] || {
  title: 'AC Servicing in Creek Horizon - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Creek Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingCreekHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-horizon"
      subareaName="Creek Horizon"
    />
  );
}