import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/emirates-hills'] || {
  title: 'AC Repair & Maintenance in Emirates Hills - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Emirates Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceEmiratesHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="emirates-hills"
      areaName="Emirates Hills"
    />
  );
}