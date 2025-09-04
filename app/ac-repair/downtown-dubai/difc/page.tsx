import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/downtown-dubai/difc'] || {
  title: 'AC Repair & Maintenance in DIFC - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in DIFC. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDIFCPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="difc"
      subareaName="DIFC"
    />
  );
}