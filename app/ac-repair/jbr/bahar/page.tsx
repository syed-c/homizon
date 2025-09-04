import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jbr/bahar'] || {
  title: 'AC Repair & Maintenance in Bahar - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Bahar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceBaharPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jbr"
      areaName="JBR"
      subarea="bahar"
      subareaName="Bahar"
    />
  );
}