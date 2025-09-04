import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jvc/jvc-district-3'] || {
  title: 'AC Repair & Maintenance in JVC District 3 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in JVC District 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceJVCDistrict3Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-3"
      subareaName="JVC District 3"
    />
  );
}