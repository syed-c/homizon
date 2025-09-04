import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-quoz/al-quoz-2'] || {
  title: 'AC Repair & Maintenance in Al Quoz 2 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Quoz 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlQuoz2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-2"
      subareaName="Al Quoz 2"
    />
  );
}