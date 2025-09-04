import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/deira'] || {
  title: 'AC Repair & Maintenance in Deira - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDeiraPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="deira"
      areaName="Deira"
    />
  );
}