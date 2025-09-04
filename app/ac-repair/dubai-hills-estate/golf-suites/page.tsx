import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-hills-estate/golf-suites'] || {
  title: 'AC Repair & Maintenance in Golf Suites - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Golf Suites. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceGolfSuitesPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="golf-suites"
      subareaName="Golf Suites"
    />
  );
}