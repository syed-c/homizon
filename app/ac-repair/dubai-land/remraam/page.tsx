import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-land/remraam'] || {
  title: 'AC Repair & Maintenance in Remraam - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Remraam. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceRemraamPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="remraam"
      subareaName="Remraam"
    />
  );
}