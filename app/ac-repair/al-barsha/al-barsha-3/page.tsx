import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-barsha/al-barsha-3'] || {
  title: 'AC Repair & Maintenance in Al Barsha 3 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Barsha 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlBarsha3Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-3"
      subareaName="Al Barsha 3"
    />
  );
}