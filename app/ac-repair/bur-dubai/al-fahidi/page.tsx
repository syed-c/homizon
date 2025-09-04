import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/bur-dubai/al-fahidi'] || {
  title: 'AC Repair & Maintenance in Al Fahidi - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Fahidi. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlFahidiPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="al-fahidi"
      subareaName="Al Fahidi"
    />
  );
}