import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-warqa/warqa-2'] || {
  title: 'AC Repair & Maintenance in Warqa 2 - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Warqa 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceWarqa2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-2"
      subareaName="Warqa 2"
    />
  );
}