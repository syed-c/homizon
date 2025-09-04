import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-barsha/al-barsha-south'] || {
  title: 'AC Repair & Maintenance in Al Barsha South - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Barsha South. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlBarshaSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-south"
      subareaName="Al Barsha South"
    />
  );
}