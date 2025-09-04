import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-barari'] || {
  title: 'AC Repair & Maintenance in Al Barari - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Barari. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlBarariPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-barari"
      areaName="Al Barari"
    />
  );
}