import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/the-views'] || {
  title: 'AC Repair & Maintenance in The Views - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceTheViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="the-views"
      areaName="The Views"
    />
  );
}