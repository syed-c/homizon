import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/nad-al-sheba'] || {
  title: 'AC Repair & Maintenance in Nad Al Sheba - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Nad Al Sheba. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceNadAlShebaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="nad-al-sheba"
      areaName="Nad Al Sheba"
    />
  );
}