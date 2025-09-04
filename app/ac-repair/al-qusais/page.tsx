import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-qusais'] || {
  title: 'AC Repair & Maintenance in Al Qusais - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Qusais. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlQusaisPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-qusais"
      areaName="Al Qusais"
    />
  );
}