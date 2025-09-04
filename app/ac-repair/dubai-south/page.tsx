import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-south'] || {
  title: 'AC Repair & Maintenance in Dubai South - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai South. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-south"
      areaName="Dubai South"
    />
  );
}