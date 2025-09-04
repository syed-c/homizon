import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/the-meadows'] || {
  title: 'AC Repair & Maintenance in The Meadows - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in The Meadows. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceTheMeadowsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="the-meadows"
      areaName="The Meadows"
    />
  );
}