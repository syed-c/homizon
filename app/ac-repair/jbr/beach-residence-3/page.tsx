import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jbr/beach-residence-3'] || {
  title: 'AC Repair & Maintenance in Beach Residence 3 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Beach Residence 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceBeachResidence3Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-3"
      subareaName="Beach Residence 3"
    />
  );
}