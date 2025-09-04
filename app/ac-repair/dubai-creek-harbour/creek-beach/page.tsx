import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-creek-harbour/creek-beach'] || {
  title: 'AC Repair & Maintenance in Creek Beach - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Creek Beach. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceCreekBeachPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-beach"
      subareaName="Creek Beach"
    />
  );
}