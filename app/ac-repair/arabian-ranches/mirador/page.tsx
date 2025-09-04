import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/arabian-ranches/mirador'] || {
  title: 'AC Repair & Maintenance in Mirador - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Mirador. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMiradorPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="mirador"
      subareaName="Mirador"
    />
  );
}