import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jbr/beach-residence-2'] || {
  title: 'AC Repair & Maintenance in Beach Residence 2 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Beach Residence 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceBeachResidence2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-2"
      subareaName="Beach Residence 2"
    />
  );
}