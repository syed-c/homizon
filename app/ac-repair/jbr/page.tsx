import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jbr'] || {
  title: 'AC Repair & Maintenance in JBR - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in JBR. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceJBRPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jbr"
      areaName="JBR"
    />
  );
}