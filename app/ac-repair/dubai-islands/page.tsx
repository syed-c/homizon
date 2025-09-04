import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-islands'] || {
  title: 'AC Repair & Maintenance in Dubai Islands - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai Islands. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiIslandsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-islands"
      areaName="Dubai Islands"
    />
  );
}