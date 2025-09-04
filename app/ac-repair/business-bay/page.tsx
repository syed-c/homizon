import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/business-bay'] || {
  title: 'AC Repair & Maintenance in Business Bay - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Business Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceBusinessBayPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="business-bay"
      areaName="Business Bay"
    />
  );
}