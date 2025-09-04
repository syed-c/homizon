import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/bluewaters-island'] || {
  title: 'AC Repair & Maintenance in Bluewaters Island - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Bluewaters Island. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceBluewatersIslandPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="bluewaters-island"
      areaName="Bluewaters Island"
    />
  );
}