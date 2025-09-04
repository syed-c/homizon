import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-creek-harbour'] || {
  title: 'AC Repair & Maintenance in Dubai Creek Harbour - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai Creek Harbour. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiCreekHarbourPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
    />
  );
}