import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-twar'] || {
  title: 'AC Repair & Maintenance in Al Twar - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Twar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlTwarPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-twar"
      areaName="Al Twar"
    />
  );
}