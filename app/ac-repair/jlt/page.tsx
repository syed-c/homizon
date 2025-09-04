import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jlt'] || {
  title: 'AC Repair & Maintenance in JLT - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in JLT. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceJLTPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jlt"
      areaName="JLT"
    />
  );
}