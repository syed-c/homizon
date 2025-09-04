import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/arjan'] || {
  title: 'AC Repair & Maintenance in Arjan - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Arjan. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceArjanPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="arjan"
      areaName="Arjan"
    />
  );
}