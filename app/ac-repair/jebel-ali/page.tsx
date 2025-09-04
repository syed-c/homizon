import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jebel-ali'] || {
  title: 'AC Repair & Maintenance in Jebel Ali - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Jebel Ali. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceJebelAliPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jebel-ali"
      areaName="Jebel Ali"
    />
  );
}