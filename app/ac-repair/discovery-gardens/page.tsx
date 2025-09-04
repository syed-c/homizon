import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/discovery-gardens'] || {
  title: 'AC Repair & Maintenance in Discovery Gardens - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Discovery Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDiscoveryGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="discovery-gardens"
      areaName="Discovery Gardens"
    />
  );
}