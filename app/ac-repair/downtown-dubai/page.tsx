import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/downtown-dubai'] || {
  title: 'AC Repair & Maintenance in Downtown Dubai - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Downtown Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDowntownDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="downtown-dubai"
      areaName="Downtown Dubai"
    />
  );
}