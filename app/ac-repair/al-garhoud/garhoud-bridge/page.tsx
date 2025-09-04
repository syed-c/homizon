import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-garhoud/garhoud-bridge'] || {
  title: 'AC Repair & Maintenance in Garhoud Bridge - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Garhoud Bridge. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceGarhoudBridgePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="garhoud-bridge"
      subareaName="Garhoud Bridge"
    />
  );
}