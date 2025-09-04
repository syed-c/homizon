import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/downtown-dubai/opera-district'] || {
  title: 'AC Repair & Maintenance in Opera District - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Opera District. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceOperaDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="opera-district"
      subareaName="Opera District"
    />
  );
}