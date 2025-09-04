import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/the-greens'] || {
  title: 'AC Repair & Maintenance in The Greens - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in The Greens. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceTheGreensPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="the-greens"
      areaName="The Greens"
    />
  );
}