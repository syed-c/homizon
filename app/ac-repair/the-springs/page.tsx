import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/the-springs'] || {
  title: 'AC Repair & Maintenance in The Springs - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in The Springs. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceTheSpringsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="the-springs"
      areaName="The Springs"
    />
  );
}