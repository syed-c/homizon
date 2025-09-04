import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/downtown-dubai/dubai-mall-district'] || {
  title: 'AC Repair & Maintenance in Dubai Mall District - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai Mall District. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiMallDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="dubai-mall-district"
      subareaName="Dubai Mall District"
    />
  );
}