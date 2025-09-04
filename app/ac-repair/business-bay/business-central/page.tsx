import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/business-bay/business-central'] || {
  title: 'AC Repair & Maintenance in Business Central - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Business Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceBusinessCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="business-bay"
      areaName="Business Bay"
      subarea="business-central"
      subareaName="Business Central"
    />
  );
}