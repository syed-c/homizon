import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-creek-harbour/creek-horizon'] || {
  title: 'AC Repair & Maintenance in Creek Horizon - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Creek Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceCreekHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-horizon"
      subareaName="Creek Horizon"
    />
  );
}