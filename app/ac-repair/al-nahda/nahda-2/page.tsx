import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-nahda/nahda-2'] || {
  title: 'AC Repair & Maintenance in Nahda 2 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Nahda 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceNahda2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-nahda"
      areaName="Al Nahda"
      subarea="nahda-2"
      subareaName="Nahda 2"
    />
  );
}