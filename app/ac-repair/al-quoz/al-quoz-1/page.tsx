import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-quoz/al-quoz-1'] || {
  title: 'AC Repair & Maintenance in Al Quoz 1 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Quoz 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlQuoz1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-1"
      subareaName="Al Quoz 1"
    />
  );
}