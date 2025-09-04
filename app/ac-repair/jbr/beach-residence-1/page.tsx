import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jbr/beach-residence-1'] || {
  title: 'AC Repair & Maintenance in Beach Residence 1 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Beach Residence 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceBeachResidence1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-1"
      subareaName="Beach Residence 1"
    />
  );
}