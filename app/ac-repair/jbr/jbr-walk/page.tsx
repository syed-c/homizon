import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jbr/jbr-walk'] || {
  title: 'AC Repair & Maintenance in JBR Walk - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in JBR Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceJBRWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jbr"
      areaName="JBR"
      subarea="jbr-walk"
      subareaName="JBR Walk"
    />
  );
}