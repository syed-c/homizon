import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/silicon-oasis'] || {
  title: 'AC Repair & Maintenance in Silicon Oasis - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Silicon Oasis. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceSiliconOasisPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="silicon-oasis"
      areaName="Silicon Oasis"
    />
  );
}