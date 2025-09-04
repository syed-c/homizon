import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-garhoud'] || {
  title: 'AC Repair & Maintenance in Al Garhoud - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Garhoud. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlGarhoudPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-garhoud"
      areaName="Al Garhoud"
    />
  );
}