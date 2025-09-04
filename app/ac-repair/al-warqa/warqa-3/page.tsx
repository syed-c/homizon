import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-warqa/warqa-3'] || {
  title: 'AC Repair & Maintenance in Warqa 3 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Warqa 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceWarqa3Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-3"
      subareaName="Warqa 3"
    />
  );
}