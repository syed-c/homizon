import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jvc'] || {
  title: 'AC Repair & Maintenance in JVC - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in JVC. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceJVCPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jvc"
      areaName="JVC"
    />
  );
}