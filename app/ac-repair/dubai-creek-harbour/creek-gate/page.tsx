import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-creek-harbour/creek-gate'] || {
  title: 'AC Repair & Maintenance in Creek Gate - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Creek Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceCreekGatePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-gate"
      subareaName="Creek Gate"
    />
  );
}