import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-hills-estate'] || {
  title: 'AC Repair & Maintenance in Dubai Hills Estate - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai Hills Estate. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiHillsEstatePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
    />
  );
}